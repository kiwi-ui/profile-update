import React, { useEffect, useRef } from 'react';
import returnIcon from '../../assets/return.svg';
import { Link } from 'react-router-dom';

const CropPicture = ({ capturedImage, setCapturedImage }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = capturedImage;

    image.onload = () => {
      const cropX = 0;
      const cropY = 0;
      const cropWidth = 600;
      const cropHeight = 500;
    
      canvas.width = cropWidth;
      canvas.height = cropHeight;
    
      const canvasCenterX = canvas.width/ 2 ;
      const canvasCenterY = canvas.height / 2;
      const imageCenterX = cropWidth / 2;
      const imageCenterY = cropHeight / 2;
    
      const drawX = canvasCenterX - imageCenterX;
      const drawY = canvasCenterY - imageCenterY;
    
      ctx.drawImage(
        image,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        drawX,
        drawY,
        cropWidth,
        cropHeight
      );
      const croppedImage = canvas.toDataURL('image/png');

      setCapturedImage(croppedImage);
    };
  }, [capturedImage, setCapturedImage]);

  return (
    <section className='position-relative bg-white overflow-hidden'>
      <div className='navigation bg-primary d-flex align-items-center ps-3 gap-3'>
        <Link to="/"><img src={returnIcon} alt='return' type='button'/></Link>
        <h4 className='judul m-0 text-white'>Potong Gambar</h4>
      </div>

      <div className=''>
        <canvas ref={canvasRef} className='image-canvas'></canvas>
      </div>

      <div className='bg-primary text-center ps-3 gap-3 bottom-0 position-absolute w-100 py-1'>
        <Link to='/'>
          <button className='judul m-0 text-white py-1 bg-transparent border-0 '>Simpan</button>
        </Link>
      </div>
    </section>
  )
}

export default CropPicture;
