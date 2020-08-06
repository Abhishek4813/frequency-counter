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
    const file = fs.createWriteStream("file.txt");
    http.get("https://terriblytinytales.com/test.txt", function(response,err){
    if(response){
    response.pipe(file);
    fs.readFile(__dirname+"/file.txt","utf-8",function(err,data){
        if(err){
            console.log(err);
            return;
        }
        data=data.replace(/[!"#$%&'()*+,-./:;<=>?[\]^_`{|}~@–\n\t]/g," ");
        console.log(data.split(" "));
        res.status(200).json({status:n});
    })
}
else{
    res.status(200).json({status:"File Fetching Failed"});   
}
});
})
app.listen(8000);