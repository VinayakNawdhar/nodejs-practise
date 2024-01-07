const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log('app is running on port ' + port)
})
app.get('/',(req,res)=>{
    res.json({
        name : "Vinayak",
        age : 20,
        college : "dsatm"
    })
})