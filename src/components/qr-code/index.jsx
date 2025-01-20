import { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
    const [qrcode, setQrcode] = useState("");
    const [input, setInput] = useState("");

    function handleGenerator(){
        setQrcode(input);
        setInput("");
    }

  return (
    <div className="container-qrcode">
        <h2>QR Code Generator</h2>
        <input 
        type="text"
        value={input}
        placeholder="Enter encrypting text"
        onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={input === "" ? true : false} onClick={handleGenerator}>Generate QR Code</button>
        <QRCode
        key="yyye"
        value={qrcode}
        bgColor="#fff"
        display="block"
        style={{
            margin: " 10px auto"
        }}
         />
    </div>
  );
}

export default QRCodeGenerator;
