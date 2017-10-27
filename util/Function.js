/**
 * Created by muharizals on 25/10/2017.
 */

const {RECTANGLE,LINEAR_DOWN,LINEAR_UP,SIGMOID_DOWN,SIGMOID_UP} = require('./Condition')

class Function{
    static rectangle(obj, value){
        return {
            value:obj.default,
            ling:obj.ling
        }
    }

    static downLinear(obj, value){
        let result = (obj.end.value - value) / (obj.end.value - obj.start.value)
        return {
            value:result,
            ling:obj.ling
        }
    }

    static upLinear(obj, value){
        let result = (value - obj.start.value) / (obj.end.value - obj.start.value)
        return {
            value:result,
            ling:obj.ling
        }
    }

    static sigmoidUp(obj,value){
        let result = {
            value:0,
            ling:obj.ling
        }
        switch (obj.sigmoid.condition){
            case 1 :
                result.value = 2*Math.pow(((value - obj.sigmoid.start)/(obj.sigmoid.end - obj.sigmoid.start)),2)
                break;
            case 2 :
                result.value = 1 - 2*Math.pow(((obj.sigmoid.end - value)/(obj.sigmoid.end - obj.sigmoid.start)),2)
                break;
        }
        return result
    }

    static sigmoidDown(obj,value){
        let result = {
            value:0,
            ling:obj.ling
        }
        switch (obj.sigmoid.condition){
            case 1 :
                result.value = 1 - (2*Math.pow(((value - obj.sigmoid.start)/(obj.sigmoid.end - obj.sigmoid.start)),2))
                break;
            case 2 :
                result.value = 2*Math.pow(((obj.sigmoid.end - value)/(obj.sigmoid.end - obj.sigmoid.start)),2)
                break;
        }
        return result
    }

    static calculate(obj, value){
        try{
            switch (obj.type){
                case RECTANGLE:
                    return Function.rectangle(obj,value)
                    break
                case LINEAR_DOWN:
                    return Function.downLinear(obj,value)
                    break
                case LINEAR_UP:
                    return  Function.upLinear(obj,value)
                    break
                case SIGMOID_DOWN:
                    return Function.sigmoidDown(obj,value)
                    break
                case SIGMOID_UP:
                    return Function.sigmoidUp(obj,value)
                    break
            }
        }catch (err){
            console.log(err.message)
            return 0
        }
    }
}

module.exports = Function