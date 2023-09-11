import express from 'express';

const app = express();

app.listen(3000 , ()=>{
    console.log("server is listeing on port 3000")
});

import scriptRoute from "./API/script/scriptRoute";
app.use('/api/script', scriptRoute)