import express from 'express'

const app = express();

const port = 4000 || process.env.PORT

app.get('/',(req,res)=>
{
    res.send("server is listing to port number");
})

app.get('/api/jokes',(req,res)=>
{
    const jokes = [
    {
        id:1,
        title:"First",
        content:"this is first joke"
    },
{
        id:2,
        title:"Second",
        content:"this is Second joke"
    },
{
        id:3,
        title:"Third",
        content:"this is Third joke"
    },
{
        id:4,
        title:"Fourth",
        content:"this is Fourth joke"
    },
{
        id:5,
        title:"Fifth",
        content:"this is Firth joke"
    },]
    res.send(jokes);
})

app.listen(port,()=>
{
    console.log(`app is listining to port number ${port}`);
})