/**
 * Created by muharizals on 26/10/2017.
 */

const {NO,YES} = require('../util/Linguistik')

class Sugeno{
    constructor(roles){
        this.roles = roles
    }

    calculateValue(yes,no){
        let forYes = this.roles.find((item)=>item.ling === yes.ling)
        let forNo = this.roles.find((item)=>item.ling === no.ling)
        let yStar = ((yes.value*forYes.value) + (no.value * forNo.value)) / (yes.value + no.value)
        return {
            value:yStar >= forYes.value ? YES : NO,
            weight:yStar
        }
    }
}

module.exports = Sugeno