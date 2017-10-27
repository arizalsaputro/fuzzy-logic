/**
 * Created by muharizals on 25/10/2017.
 */

class MyFuzzyRules{
    constructor(rules){
        this.rules = rules
    }

    testLinguistic(emotion,provocation,log=false){
        try{
            let selectedRule = this.rules.find((item)=> (item.emotion === emotion.emotion && item.provocation === provocation.provocation))
            if(log){
                console.log('selectedRule',selectedRule)
            }
            return {
                ling:selectedRule.value,
                value:Math.min(emotion.value,provocation.value)
            }
        }catch (err){
            return undefined
        }
    }
}

module.exports = MyFuzzyRules