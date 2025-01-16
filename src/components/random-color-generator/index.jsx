import { useState } from "react";

function RandomColorGenerator() {
    const [typeOfColor, setTypeOfColor] =  useState("hex");
    const [color, setColor] = useState("#000000");
    const [colorCode, setColorCode] = useState("#000000")

    function randomColor(length){
        return Math.floor(Math.random() * length);
    }

    function handleHEXColor(){
        setTypeOfColor("hex");
        const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = "#";

        for(let i =0; i<6; i++){
            hexColor += hex[randomColor(hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
    }
    function handleRGBColor(){
        setTypeOfColor("rgb");

        let r = randomColor(256);
        let g = randomColor(256);
        let b = randomColor(256);
        let hexColor = `rgb(${r},${g},${b})`;

        setColor(hexColor);
    }
  return (
    <div style={{
        width: "100vw",
        height: "97vh",
        backgroundColor: color,
        paddingTop: "20px"
    }}>
        <button type="button" style={{padding: "10px 60px"}} onClick={handleHEXColor}>HEX Color</button>
        <button style={{padding: "10px 60px"}} onClick={handleRGBColor}>RGB Color</button>

        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{typeOfColor === "hex" ? "Hex color" : "RGB color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColorGenerator;
