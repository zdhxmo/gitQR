import NavBar from "../components/NavBar";
import React, { useState } from 'react';
import QRCode from 'qrcode';
import Image from 'next/image';

export default function Home() {

  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateQrCode = async () => {
    try {
      const totalURL = "https://github.com/" + text;
      const response = await QRCode.toDataURL(totalURL);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-full flex flex-col align-center justify-center">
      <NavBar />
      <div className="flex justify-center items-center mt-20">
        <input className="w-60 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="Enter Github Username Here" onChange={(e) => setText(e.target.value)} />
        <button type="submit" className="mx-6 block text-sm text-slate-500 bg-white border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" onClick={() => generateQrCode()}>Generate</button>

      </div>
      <div className="flex justify-center items-center mt-20">
        {imageUrl ? (
          <Image src={imageUrl} alt="profile URL"
            width={250}
            height={250}
          />
        ) : null}
      </div>
    </div>
  )
}
