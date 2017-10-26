/**
 * Created by muharizals on 26/10/2017.
 */

const Function = require('../util/Function')
const {GTE,GT,LT,LTE,EMOTION,PROVOCATION} = require('../util/Condition')

class MemberFunction{
    constructor(graph,type){
        this.graph = graph
        this.type = type
    }

    testValue(value){
        let toCalculate = []
        for(let i=0;i<this.graph.length;i++){
            let item = this.graph[i]
            if((value >= item.start.value) && (value <= item.end.value)){
                if(item.start.condition === GTE && item.end.condition === LTE){
                    toCalculate.push(item)
                    continue
                }
            }
            if(( value > item.start.value ) && (value < item.end.value)){
                if(item.start.condition === GT && item.end.condition === LT){
                    toCalculate.push(item)
                    continue
                }
            }
            if(( value >= item.start.value ) && (value < item.end.value)){
                if(item.start.condition === GTE && item.end.condition === LT){
                    toCalculate.push(item)
                    continue
                }
            }
            if(( value > item.start.value ) && (value <= item.end.value)){
                if(item.start.condition === GT && item.end.condition === LTE){
                    toCalculate.push(item)
                }
            }
        }



        toCalculate = toCalculate.map((item)=>{
            item =  Function.calculate(item,value)
            if(this.type === EMOTION){
                item.emotion = item.ling
            }
            if(this.type === PROVOCATION){
                item.provocation = item.ling
            }
            delete item.ling
            return item
        });
        return toCalculate
    }

}

module.exports = MemberFunction