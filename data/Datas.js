/**
 * Created by muharizals on 26/10/2017.
 */

const {GTE,GT,LT,LTE,RECTANGLE,LINEAR_DOWN,LINEAR_UP,SIGMOID_UP,SIGMOID_DOWN} = require('../util/Condition')
const {LOW,MEDIUM,HIGH,NO,YES} = require('../util/Linguistik')

module.exports = {
    EmotionGraph:[
        {
            type:SIGMOID_DOWN,
            sigmoid:{
                condition:1,
                start:0,
                end:40
            },
            ling:LOW,
            start:{
                value:0,
                condition:GTE
            },
            default:1,
            end:{
                value:20,
                condition:LTE
            }
        },{
            type:SIGMOID_DOWN,
            ling:LOW,
            sigmoid:{
                condition:2,
                start:0,
                end:40
            },
            start:{
                value:20,
                condition:GT
            },
            end:{
                value:40,
                condition:LTE
            }
        },{
            type:SIGMOID_UP,
            ling:MEDIUM,
            sigmoid:{
                condition:1,
                start:25,
                end:50
            },
            start:{
                value:25,
                condition:GTE
            },
            end:{
                value:37,
                condition:LT
            }
        },
        {
            type:SIGMOID_UP,
            ling:MEDIUM,
            sigmoid:{
                condition:2,
                start:25,
                end:50
            },
            start:{
                value:37,
                condition:GTE
            },
            end:{
                value:50,
                condition:LT
            }
        },
        {
            type:SIGMOID_DOWN,
            ling:MEDIUM,
            sigmoid:{
                condition:1,
                start:50,
                end:75
            },
            start:{
                value:50,
                condition:GTE
            },
            default:1,
            end:{
                value:62,
                condition:LT
            }
        },{
            type:SIGMOID_DOWN,
            ling:MEDIUM,
            sigmoid:{
                condition:2,
                start:50,
                end:75
            },
            start:{
                value:62,
                condition:GTE
            },
            end:{
                value:75,
                condition:LTE
            },
        },{
            type:SIGMOID_UP,
            ling:HIGH,
            sigmoid:{
              condition:1,
              start:70,
              end:100
            },
            start:{
                value:70,
                condition:GTE
            },
            end:{
                value:85,
                condition:LTE
            }
        },
        {
            type:SIGMOID_UP,
            ling:HIGH,
            sigmoid:{
                condition:2,
                start:70,
                end:100
            },
            start:{
                value:85,
                condition:GT
            },
            end:{
                value:100,
                condition:LTE
            }
        }
    ],
    ProvocationGraph:[
        {
            type:SIGMOID_DOWN,
            sigmoid:{
                condition:1,
                start:0,
                end:40
            },
            ling:LOW,
            start:{
                value:0,
                condition:GTE
            },
            default:1,
            end:{
                value:20,
                condition:LTE
            }
        },{
            type:SIGMOID_DOWN,
            ling:LOW,
            sigmoid:{
                condition:2,
                start:0,
                end:40
            },
            start:{
                value:20,
                condition:GT
            },
            end:{
                value:40,
                condition:LTE
            }
        },{
            type:SIGMOID_UP,
            ling:MEDIUM,
            sigmoid:{
                condition:1,
                start:25,
                end:50
            },
            start:{
                value:25,
                condition:GTE
            },
            end:{
                value:37,
                condition:LT
            }
        },
        {
            type:SIGMOID_UP,
            ling:MEDIUM,
            sigmoid:{
                condition:2,
                start:25,
                end:50
            },
            start:{
                value:37,
                condition:GTE
            },
            end:{
                value:50,
                condition:LT
            }
        },
        {
            type:SIGMOID_DOWN,
            ling:MEDIUM,
            sigmoid:{
                condition:1,
                start:50,
                end:75
            },
            start:{
                value:50,
                condition:GTE
            },
            default:1,
            end:{
                value:62,
                condition:LT
            }
        },{
            type:SIGMOID_DOWN,
            ling:MEDIUM,
            sigmoid:{
                condition:2,
                start:50,
                end:75
            },
            start:{
                value:62,
                condition:GTE
            },
            end:{
                value:75,
                condition:LTE
            },
        },{
            type:SIGMOID_UP,
            ling:HIGH,
            sigmoid:{
                condition:1,
                start:70,
                end:100
            },
            start:{
                value:70,
                condition:GTE
            },
            end:{
                value:85,
                condition:LTE
            }
        },
        {
            type:SIGMOID_UP,
            ling:HIGH,
            sigmoid:{
                condition:2,
                start:70,
                end:100
            },
            start:{
                value:85,
                condition:GT
            },
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
            value:0.5
        },{
            ling:YES,
            value:0.6
        }
    ]
}