/**
 * Created by muharizals on 27/10/2017.
 */
const csv = require("fast-csv")
const FuzzyClass = require('./Fuzzy')
const {EmotionGraph,ProvocationGraph,FuzzyRules,AppropriatenessRule} = require('./data/Datas')

const isTraining = true

let pathData = './data/training.csv'

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
    //console.log(fuzzy.think(40,85,true))
    let result = fuzzy.bulkThink(rawData,isTraining)
    csv
        .writeToPath("./data/output-training.csv",result, {headers: true,delimiter:';'})
        .on("finish", function(){
            console.log("done write data , check /data/output-training.csv' !");
        });
}