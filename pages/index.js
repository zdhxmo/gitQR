import NavBar from "../components/NavBar";
import React, { useState, useRef } from 'react';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';


export default function Home() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const qrRef = useRef(null);

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  }

  const stringQR = async () => {
    await QRCode.toString('http://www.google.com', function (err, string) {
    if (err) throw err
    console.log(string)
  })
  }

  return (
    <div className="min-h-full flex flex-col align-center justify-center">
      <NavBar />
      <div className="flex justify-center items-center mt-20">
        <input className="w-60 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="Enter Github Username Here" onChange={(e) => setText("https://github.com/" + e.target.value)} />
        <button type="submit" className="mx-6 block text-sm text-slate-500" onClick={() => generateQrCode()}>Generate</button>
      </div>
      <div className="flex justify-center items-center mt-20">
        {imageUrl ? (
          <a href={imageUrl} target="_blank">
            <img src={imageUrl} alt="img" />
          </a>) : null}
      </div>
      <button type="submit" className="mx-6 block text-sm text-slate-500" onClick={() => stringQR()}>string</button>
    </div>
  )
}
