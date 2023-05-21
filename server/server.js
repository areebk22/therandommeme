var express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

const PORT = process.env.PORT || 5000 ;

// const url = "https://meme-api.com/gimme";
// var imgUrl = "";

// async function getMeme(){
//   const data = await fetch(url);
//   let response = await data.json() ;
//   imgUrl = response.url;
//   console.log(response.url);
// }

// getMeme();

// fetch(url)
// .then((response) => response.json())
// .then((data)=> {
//   imgUrl = data.url;
//   console.log(imgUrl);
// });
  
// app.get("/api",function(req,res){
//   res.json(imgUrl);
// });

app.listen(PORT,function(){
  console.log("server running at port " + PORT);
});

// https.get(url,function(response){
//   console.log(response.statusCode);

//   response.on("data",function(data){
//     // const meme_data = JSON.parse(data);
//     // const imgURL = meme_data.url ;

//       // try {
//       //   const meme_data = JSON.parse(data);
//       //   imgURL = meme_data.url ;
//       // } catch (error) {
//       //   console.log(error.message);
//       // }
    
//     // const meme_data = JSON.parse(data);
//     // return meme_data;

//   })
// });
