import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import returnIcon from '../../assets/return.svg';
import './index.css'

const TakePicture = ({ setCapturedImage }) => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((mediaStream) => {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      })
      .catch((error) => {
        console.log('Gagal mengakses kamera:', error);
      });

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');
    console.log(imageData)
    setCapturedImage(imageData);
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

      <canvas ref={canvasRef} className='d-none'></canvas>
    </section>
  )
}

export default TakePicture
