import fs from 'fs';

const data = {
    name : "chintu",
    age : 2,
    city : "GND",
    country : "India"
}

const jsonData = JSON.stringify(data);

fs.writeFile("data1.json", jsonData,(error)=>{
console.log(error);
console.log("run successfully");
});

fs.readFile("data1.json", "utf8" , (error,datas)=>{

    console.log(error);
    const odata = JSON.parse(datas);
    console.log(odata);
    console.log(datas);
})