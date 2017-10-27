/**
 * Created by muharizals on 25/10/2017.
 */
const MemberFunction = require('./model/MemberFunction')
const Rules = require('./model/MyFuzzyRules')
const Sugeno = require('./model/Sugeno')

const {YES,NO} = require('./util/Linguistik')
const {EMOTION,PROVOCATION}  = require('./util/Condition')


class Fuzzy{

    constructor(graphEmotion,graphProvocation,fuzzyRule,appropriatenessRule){
        this.Emotion = new MemberFunction(graphEmotion,EMOTION)
        this.Provocation = new MemberFunction(graphProvocation,PROVOCATION)
        this.Rules = new Rules(fuzzyRule)
        this.Sugeno = new Sugeno(appropriatenessRule)
    }

    think(emotion,provocation,log=false){
        let emoResult = this.Emotion.testValue(emotion)
        let provoResult = this.Provocation.testValue(provocation)

        if(log){
            console.log('\nemotionResult',emoResult)
            console.log('provocationResult',provoResult)
        }

        let interferenceResult =[]

        for(let i=0;i<emoResult.length;i++){
            let emotion = emoResult[i]
            for(let j=0;j<provoResult.length;j++){
                let provocation = provoResult[j]
                interferenceResult.push(this.Rules.testLinguistic(emotion,provocation,log))
            }
        }


        let lingYes = interferenceResult.filter((item)=>{
          return item.ling === YES
        })
        let lingNo = interferenceResult.filter((item)=>{
            return item.ling === NO
        })



        let params1 = {
            ling:YES,
            value: lingYes.length === 0 ? 0 : Math.max.apply(Math,lingYes.map((o)=>{return o.value}))
        }

        let params2 = {
            ling:NO,
            value: lingNo.length === 0 ? 0 : Math.max.apply(Math,lingNo.map((o)=>{return o.value}))
        }

        let result = this.Sugeno.calculateValue(params1,params2,log)

        if(log){
            console.log('interferenceBeforeFilter',interferenceResult)
            console.log('linguisticYes',lingYes)
            console.log('linguisticNo',lingNo)
            console.log('parameter1',params1)
            console.log('parameter2',params2)
            console.log('calculationResult',result)
        }

        return result
    }

    bulkThink(rawData,show=false){
        rawData = rawData.map((item)=>{
            let resThink = this.think(item.emotion,item.provocation,show)
            if(show){
                item.reality = resThink.value
                item.weight = resThink.weight
                item.status = item.expectation === item.reality
            }else{
                item.hoax = resThink.value
            }
            return item
        })
        if(show){
            this.calculateAccuracy(rawData)
        }
        return rawData
    }


    calculateAccuracy(raw){
        let data = raw.length
        let correct = raw.filter((item)=>{
            return item.expectation === item.reality
        }).length
        let wrong = data-correct
        let accuracy = (correct/data) * 100
        console.log('\nData Count : ' + data)
        console.log('Correct Answer : ' + correct)
        console.log('Wrong Answer : ' + wrong)
        console.log('Accuracy: ' + accuracy + ' %')
    }
}

module.exports = Fuzzy