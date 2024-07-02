const express = require('express');
const ejs = require('ejs');
const path = require('path')
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname , '/public')));
// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))

var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log('server started');
});


var cars =[
  {
    carID : 0,
    name : "Toyota Land Cruiser" ,
    brand: "Toyota",
    year : 2022,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  },
  {
    carID : 1,
    name : "Range Rover Vogue" ,
    brand: "Range",
    year : 2018,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  },
  {
    carID : 2,
    name : "Range Rover Vogue" ,
    brand: "Range",
    year : 2023,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  },
  {
    carID : 3,
    name : "Range Rover Sport" ,
    brand: "Range",
    year : 2023,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  },
  {
    carID : 4,
    name : "Mercedes SL43 AMG" ,
    brand: "Mercedes",
    year : 2023,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 2,
    gear : "Auto",
  }
  ,
  {
    carID : 5,
    name : "Mercedes E200" ,
    brand: "Mercedes",
    year : 2021,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  }

  ,
  {
    carID : 6,
    name : "Mercedes S450" ,
    brand: "Mercedes",
    year : 2022,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  },
  {
    carID : 7,
    name : "Mercedes G-Class 500" ,
    brand: "Mercedes",
    year : 2022,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  },

  {
    carID : 8,
    name : "Mercedes CLS350" ,
    brand: "Mercedes",
    year : 2022,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  },

  
  {
    carID : 9,
    name : "Land Rover Defender" ,
    brand: "Land Rover",
    year : 2022,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  },

  {
    carID : 10,
    name : "Toyota Rav4" ,
    brand: "Toyota",
    year : 2022,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  },
  {
    carID : 11,
    name : "Mercedes C200" ,
    brand: "Mercedes",
    year : 2022,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  },
  {
    carID : 12,
    name : "Chevrolet Tahoe RST" ,
    brand: "Chevrolet",
    year : 2022,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  },

  {
    carID : 13,
    name : "Chevrolet Tahoe Premier" ,
    brand: "Chevrolet",
    year : 2021,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 7,
    gear : "Auto",
  },
  {
    carID : 14,
    name : "BMW 735i" ,
    brand: "BMW",
    year : 2023,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 4,
    gear : "Auto",
  },
  {
    carID : 15,
    name : "BMW 430i" ,
    brand: "BMW",
    year : 2024,
    img : "/img/slider/12.jpg",
    subImg:"",
    seats : 2,
    gear : "Auto",
  },



]; 

app.get('/',function(req,res){
res.render("index",{cars : cars});
});

app.get('/services',function(req,res){
    res.render("services");
    
})

app.get('/about',function(req,res){
        res.render("about");
        
})

app.get('/cars',function(req,res){
  res.render("cars",{cars : cars});
  
})


app.get('/car-details/:tagId',function(req,res){



var  C1 = cars[req.params.tagId];
console.log(C1);
  res.render("car-details",{car : C1} );
  
})

app.get('/contact',function(req,res){
            res.render("contact");     
})


app.get('/thanks',function(req,res){
  res.render("thanks");
  
})
app.get('/service-details',function(req,res){
  res.render("service-details");
  
})


app.get('/accounts',function(req,res){
  res.render("accounts");
  
})


app.get('*',function(req,res){
    res.render("404");
    
})








app.post("/"  ,function async (req,res){

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const subject = req.body.subject;
    const message = req.body.message;
    



    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 578,
         secure: false,
        auth: {
          user: 'altaweel@thrillagency.net',
          pass: 'fcju clee mnmf llkh'
        }
      });
      
      var mailOptions = {
        from: 'altaweel@thrillagency.net',
        to: 'hello@thrillagency.net',
        subject: 'contact from thrill website',
        text: "Nmae : "+name+"\n"
        +"email : "+email+"\n"
        +"phone : "+phone+"\n"
        +"subject : "+subject+"\n"
        +"message : "+message+"\n"

      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      // res.render("thanks");
      res.redirect('/thanks');

})