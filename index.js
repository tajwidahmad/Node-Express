const express= require("express");
const app = express();
// console.dir(app);
const port=3000;
app.listen(port,()=>{
    console.log(`App is litening to port ${port}`)
});


// localhost:3000
// cannot get /
// not able to get the request....

// get the request...
// app.use((req,res)=>callback)
//======############## request ko get kiya with app.use ##############################################

// app.use((req,res)=>{
//     console.log("new incoming request...")
//     res.send("this is a basic response..")
// });

// ######################################################################################

// using app.get routing technique
app.get("/",(req,res)=>{
    res.send("Welcome to the home page !! of the web appliction.....")
})
// app.get("/about",(req,res)=>{
//     res.send("Welcome to the about page of the web appliction.....")
// })
// app.get("/contact",(req,res)=>{
//     res.send("Welcome to the contact page of the web appliction.....")
// })


app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    let {username,id}= req.params;
    res.send(`hello and welcome to the page of @${username}.`)
})

// querry strings 
app.get("/search",(req,res)=>{
    let {q}= req.query;
    if(!q){
        res.send("ohh i see no query string...")
    }
    res.send(`searching for ${q}`);
})