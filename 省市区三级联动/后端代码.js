var express = require('express');
var router = express.Router();

var pcdInfo=null;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/AllPCD',function (req,res,next) {
    if(!pcdInfo){
        var fs=require('fs');
        fs.readFile('./public/data/PCD.txt','utf-8',function(err,data){
            if(err){
                res.json({msg:err})
                return;
            }
            else{
                pcdInfo=JSON.parse(data);
            }
        });
    }
    res.json(pcdInfo);
})

router.get('/Province',function (req,res,next) {
    if(!pcdInfo){
        var fs=require('fs');
        fs.readFile('./public/data/PCD.txt','utf-8',function(err,data){
            if(err){
                res.json({msg:err})
                return;
            }
            else{
                pcdInfo=JSON.parse(data);
            }
        });
    }
    var provinces=[];
    for(var i in pcdInfo){
        provinces.push(pcdInfo[i].province.name);
    }
    res.json({msg:"省",data:provinces});
})

router.get('/City',function (req,res,next) {
    var pIndex=req.query.pindex;
    if(!pcdInfo){
        var fs=require('fs');
        fs.readFile('./public/data/PCD.txt','utf-8',function(err,data){
            if(err){
                res.json({msg:err})
                return;
            }
            else{
                pcdInfo=JSON.parse(data);
            }
        });
    }
    var cities=[];
    for(var i in pcdInfo[pIndex].province.state){
        cities.push(pcdInfo[pIndex].province.state[i].name)
    }
    res.json({msg:"市",data:cities});
})

router.get('/District',function (req,res,next) {
    var pIndex=req.query.pindex;
    var dIndex=req.query.dindex;
    if(!pcdInfo){
        var fs=require('fs');
        fs.readFile('./public/data/PCD.txt','utf-8',function(err,data){
            if(err){
                res.json({msg:err})
                return;
            }
            else{
                pcdInfo=JSON.parse(data);
            }
        });
    }
    var districts=[];
    var districtsOrigin=pcdInfo[pIndex].province.state[dIndex].city;
    for(var i in districtsOrigin){
        districts.push(districtsOrigin[i].name);
    }
    res.json({msg:"市",data:districts});
})
module.exports = router;
