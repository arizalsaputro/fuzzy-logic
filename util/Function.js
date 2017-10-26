/**
 * Created by muharizals on 25/10/2017.
 */

const {RECTANGLE,LINEAR_DOWN,LINEAR_UP} = require('./Condition')

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

            }
        }catch (err){
            console.log(err.message)
            return 0
        }
    }
}

module.exports = Function