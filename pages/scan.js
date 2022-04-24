import { useState } from 'react';
import NavBar from '../components/NavBar';
import dynamic from 'next/dynamic';
const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });
import { useRouter } from 'next/router';

const Scan = () => {
    const router = useRouter()

    const [scanResultWebCam, setScanResultWebCam] = useState('');

    const handleError = (error) => {
        console.log(error);
    }

    const handleScan = async (result, err) => {
        if (result) {
            setScanResultWebCam(result);
            router.push(scanResultWebCam)
        } else {
            console.log(err)
        }
    }

    return (
        <div className='flex flex-col align-center justify-between'>
            <NavBar />
            <div className='p-20 md:p-60 lg:p-100'>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                />
            </div>

        </div>
    )
}

export default Scan;