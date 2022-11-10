const express = require('express');
const { mongoose } = require('mongoose');

const headsetRouter = require('./router/headsetRouter');
const mongo = require('./connect');

require('dotenv').config();

const app = express();
app.use(express.json());
mongo.connect();
mongo.connectMongoose();
app.use('/', (req,res,next) => {
   });
   
const axios = require("axios");
const cheerio = require("cheerio");


const Prices = {};

const SomeFunction = (newPrice) => {
 console.log("wew! go buy nowwww.... the new price is", newPrice);
};

const FetchPrice = (productUrl) => {
 const succeed=
 axios
   .get(productUrl, {
     
   })
   .then(({ data }) => {
     const $ = cheerio.load(data);
     let gotThePrice = $(".a-price-whole").text();
    
     const priceList = gotThePrice.match(/\d+/g);
     if (priceList) {
     }
     priceList.splice(priceList.length - 1, 1);
     const price = Number(priceList.join(""));
     if (Prices[productUrl]) {
       if (Prices[productUrl] > price) {
         SomeFunction(price);
       }
     }
     Prices[productUrl] = price;
     succeed(
       `${$("title").text().substr(0, 80)}...: ${price}`
     );
   });
};

const PRODUCTS = [
 
 "https://www.amazon.in/Canon-1500D-Digital-Camera-S18-55/dp/B07BS4TJ43",
];

const Track = () => {
 PRODUCTS.map((prod) => {
   FetchPrice(prod);
 });
 setTimeout(Track, 300000);  
};

Track();
  

app.use('/headset', headsetRouter);


app.listen(3001);