/**
 * Created by muharizals on 25/10/2017.
 */
const csv = require("fast-csv")
const FuzzyClass = require('./Fuzzy')
const {EmotionGraph,ProvocationGraph,FuzzyRules,AppropriatenessRule} = require('./data/Datas')

const isTraining = false

let pathData = isTraining ? './data/training.csv' : './data/dataprocess.csv'

let rawData = []

csv
    .fromPath(pathData,{headers: false})
    .transform(function (row) {
        return {
            emotion:Number(row[0]),
            provocation:Number(row[1]),
            expectation:row[2]
        }
    })
    .on("data", function(data){
        rawData.push(data)
    })
    .on("end", function(){
       console.log("done readData");
       Run()
    });

const Run = () => {
    console.log('running fuzzy')
    let fuzzy = new FuzzyClass(EmotionGraph,ProvocationGraph,FuzzyRules,AppropriatenessRule)
    //console.log(fuzzy.think(100,18))

    let result = fuzzy.bulkThink(rawData,isTraining)
    csv
        .writeToPath("./data/output.csv",result, {headers: true})
        .on("finish", function(){
            console.log("done write data , check /data/output.csv' !");
        });
}