const functions = require("firebase-functions");

const express=require("express");

const cors=require("cors");

const stripe=require("stripe")("sk_test_51Mmb4vSFAefFlH5LaqKoIPR9ZyHq5jVf7aDaeA3H0hvH4DaBp2gIjeFxmMrUgkcv6XScJZL6Fe4FCViWxpg7Kj2B00FhqoDRlm");

//Api 

//API-config
const app =express();
//APi middleware
app.use(cors({origin:true}));
app.use(express.json());

//API Routes
app.get("/",(req,res)=> res.status(200).send("Hello world, this is e-commerce clone "));
//-->>> This is how we can create an end point in our api

app.post("/payments/create",async (req,res)=>{
    const total=req.query.total;
    console.log("payment request recieved",total);

    const paymentIntent= await stripe.paymentIntents.create({
        amount:total,
        currency: "inr",
    }) 
    //ok created for res code 201
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
//Listen command

exports.api=functions.https.onRequest(app);

// example end point 
// http://127.0.0.1:5001/e-commerce-clone-2/us-central1/api
// "predeploy": [
//     "npm --prefix \"%RESOURCE_DIR%\" run lint"
//   ]