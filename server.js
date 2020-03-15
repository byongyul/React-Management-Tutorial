const express= require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT ||5000;

app.use(bodyParser.json());
app.unsubscribe(bodyParser.urlencoded({extended :true}));

//app.get('/api/hello',(req, res)=> {
//    res.send({message:'Hello Express!'});
//});
app.get('/api/customers',(req,res)=>{
    res.send([{
        'id':1,
        'name':'최예지',
        'image':'https://www.placeimg.com/64/64/1',
        'birthday':'030717',
        'gender': 'female',
        'job':'high school student'
      },
      {
        'id':2,
        'name':'최윤서',
        'image':'https://www.placeimg.com/64/64/2',
        'birthday':'011218',
        'gender': 'male',
        'job':'high school student'
      },
      {
        'id':3,
        'name':'홍길동',
        'image':'https://www.placeimg.com/64/64/10',
        'birthday':'960717',
        'gender': 'female',
        'job':'high school student'
      },
      ]


    );


})
app.listen(port,()=>console.log(`Listening on port ${port}`));
