import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRScanner = () => {
  const [data, setData] = useState("Keine Daten gefunden");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>QR-Code Scanner</h1>
      <QRCode value={"Hello, World!"} size={80} viewBox={`0 0 256 256`} />
      <p>Erkannter Text: {data}</p>
    </div>
  );
};

export default QRScanner;
