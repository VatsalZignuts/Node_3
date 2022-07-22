import express from "express";
const app = express();

app.get("/", (req,res) => {
    res.send("Server is started...");
});

app.listen(3620, () => {
    console.log("Port can be started !!!");
})
