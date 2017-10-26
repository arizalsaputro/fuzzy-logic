/**
 * Created by muharizals on 26/10/2017.
 */

const {GTE,GT,LT,LTE,RECTANGLE,LINEAR_DOWN,LINEAR_UP} = require('../util/Condition')
const {LOW,MEDIUM,HIGH,NO,YES} = require('../util/Linguistik')

module.exports = {
    EmotionGraph:[
        {
            type:RECTANGLE,
            ling:LOW,
            start:{
                value:0,
                condition:GTE
            },
            default:1,
            end:{
                value:25,
                condition:LTE
            }
        },{
            type:LINEAR_DOWN,
            ling:LOW,
            start:{
                value:25,
                condition:GT
            },
            end:{
                value:30,
                condition:LTE
            }
        },{
            type:LINEAR_UP,
            ling:MEDIUM,
            start:{
                value:25,
                condition:GTE
            },
            end:{
                value:50,
                condition:LT
            }
        },{
            type:RECTANGLE,
            ling:MEDIUM,
            start:{
                value:50,
                condition:GTE
            },
            default:1,
            end:{
                value:50,
                condition:LTE
            }
        },{
            type:LINEAR_DOWN,
            ling:MEDIUM,
            start:{
                value:50,
                condition:GT
            },
            end:{
                value:75,
                condition:LTE
            },
        },{
            type:LINEAR_UP,
            ling:HIGH,
            start:{
                value:70,
                condition:GTE
            },
            end:{
                value:75,
                condition:LT
            }
        },{
            type:RECTANGLE,
            ling:HIGH,
            start:{
                value:75,
                condition:GTE
            },
            default:1,
            end:{
                value:100,
                condition:LTE
            }
        }
    ],
    ProvocationGraph:[
        {
            type:RECTANGLE,
            ling:LOW,
            start:{
                value:0,
                condition:GTE
            },
            default:1,
            end:{
                value:25,
                condition:LTE
            }
        },{
            type:LINEAR_DOWN,
            ling:LOW,
            start:{
                value:25,
                condition:GT
            },
            end:{
                value:30,
                condition:LTE
            }
        },{
            type:LINEAR_UP,
            ling:MEDIUM,
            start:{
                value:25,
                condition:GTE
            },
            end:{
                value:50,
                condition:LT
            }
        },{
            type:RECTANGLE,
            ling:MEDIUM,
            start:{
                value:50,
                condition:GTE
            },
            default:1,
            end:{
                value:50,
                condition:LTE
            }
        },{
            type:LINEAR_DOWN,
            ling:MEDIUM,
            start:{
                value:50,
                condition:GT
            },
            end:{
                value:75,
                condition:LTE
            },
        },{
            type:LINEAR_UP,
            ling:HIGH,
            start:{
                value:70,
                condition:GTE
            },
            end:{
                value:75,
                condition:LT
            }
        },{
            type:RECTANGLE,
            ling:HIGH,
            start:{
                value:75,
                condition:GTE
            },
            default:1,
            end:{
                value:100,
                condition:LTE
            }
        }
    ],
    FuzzyRules:[{
            emotion:LOW,
            provocation:LOW,
            value:NO
        },
        {
            emotion:LOW,
            provocation:MEDIUM,
            value:NO
        },
        {
            emotion:LOW,
            provocation:HIGH,
            value:YES
        },
        {
            emotion:MEDIUM,
            provocation:LOW,
            value:NO
        },
        {
            emotion:MEDIUM,
            provocation:MEDIUM,
            value:NO
        },
        {
            emotion:MEDIUM,
            provocation:HIGH,
            value:YES
        },
        {
            emotion:HIGH,
            provocation:LOW,
            value:NO
        },
        {
            emotion:HIGH,
            provocation:MEDIUM,
            value:YES
        },
        {
            emotion:HIGH,
            provocation:HIGH,
            value:YES
        },
    ],
    AppropriatenessRule :[
        {
            ling:NO,
            value:50
        },{
            ling:YES,
            value:60
        }
    ]
}