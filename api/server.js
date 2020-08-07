const express=require('express');
const cors=require('cors');
const bodyparser=require("body-parser");
const fs=require('fs');

const http=require("https");

const app=express();
app.use(cors());
app.use(bodyparser.json());

app.post('/',function(req,res){
    var n=req.body.Number;
    var words={};
    const file = fs.createWriteStream("file.txt");
    http.get("https://terriblytinytales.com/test.txt", function(response,err){
    if(response){
    response.pipe(file);
    fs.readFile(__dirname+"/file.txt","utf-8",function(err,data){
        if(err){
            console.log(err);
            return;
        }
        data=data.replace(/[!"#$%&'()*+,-./:;<=>?[\]^_`{|}~@–0-9]/g,"");
        data=data.split(/\s+/);
        data.forEach((key)=>{
            if (key!=='' && words.hasOwnProperty(key)){
                words[key]+=1;
            }
            else{
                words[key]=1; 
            }
        });
        var words_Array=[];
        words_Array=Object.keys(words).map((key)=>{
            return{
                value:key,
                count:words[key],
            }
        })
        words_Array.sort(function(a,b){
            return b.count-a.count;
        })
        console.log();
        res.status(200).json(words_Array.slice(0,n));
    })
}
else{
    res.status(200).json({status:"File Fetching Failed"});   
}
});
})
app.listen(8000);