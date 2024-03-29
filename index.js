/**
 * Created by muharizals on 25/10/2017.
 */
const csv = require("fast-csv")
const FuzzyClass = require('./Fuzzy')
const {EmotionGraph,ProvocationGraph,FuzzyRules,AppropriatenessRule} = require('./data/Datas')


let pathData ='./data/dataprocess.csv'

let rawData = []

csv
    .fromPath(pathData,{headers: true,delimiter:';'})
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

    let result = fuzzy.bulkThink(rawData)
    csv
        .writeToPath("./data/output.csv",result, {headers: true,delimiter:';'})
        .on("finish", function(){
            console.log("done write data , check /data/output.csv' !");
        });
}