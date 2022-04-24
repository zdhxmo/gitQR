import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import dynamic from 'next/dynamic'

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false })

const scan = () => {

    const [scanResultWebCam, setScanResultWebCam] = useState('');

    const handleError = (error) => {
        console.log(error);
    }
    const handleScan = (result) => {
        if (result) {
            setScanResultWebCam(result);
        }
    }

    return (
        <div>
            <NavBar />
            <div className='w-50'>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                />
                <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
            </div>

        </div>
    )
}

export default scan;