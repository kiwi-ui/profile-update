import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import returnIcon from '../../assets/return.svg';
import './index.css'

const TakePicture = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    // Minta izin pengguna untuk mengakses kamera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((mediaStream) => {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      })
      .catch((error) => {
        console.log('Gagal mengakses kamera:', error);
      });

    return () => {
      // Hentikan stream video saat komponen unmount
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Atur ukuran canvas sesuai dengan video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Gambar frame video pada canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Dapatkan data gambar dari canvas sebagai URL base64
    const imageData = canvas.toDataURL('image/png');
    // Simpan imageData ke state atau kirim ke server
    
    // Navigasikan kembali ke halaman ChangePicture setelah mengambil gambar
    navigate('/change');
  };

  return (
    <section className='bg-white overflow-hidden'>
      <div className='navigation bg-primary d-flex align-items-center ps-3 gap-3'>
        <img src={ returnIcon } alt='return' type='button'/>
        <h4 className='judul m-0 text-white'>Profil</h4>
      </div>

      <div className='container my-3 h-100'>
        <div className='camera-display w-100 mt-3 mb-4'>
          <video className='w-100 h-100' ref={videoRef} autoPlay playsInline muted></video>
        </div>

        <div className='d-flex w-100 justify-content-center'>
          <button className='rounded-circle bg-secondary p-4 border-0' onClick={handleCapture}></button>
        </div>
      </div>

      {/* Tambahkan elemen canvas untuk menampilkan gambar yang diambil */}
      <canvas ref={canvasRef} className='d-none'></canvas>
    </section>
  )
}

export default TakePicture