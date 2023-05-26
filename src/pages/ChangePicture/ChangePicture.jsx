import React, { useState } from 'react'
import returnIcon from '../../assets/return.svg';
import './index.css';
import { Link } from 'react-router-dom';

const ChangePicture = ({ setCapturedImage }) => {
  
  const handleAddFromGallery = () => {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = 'image/*';
    inputElement.onchange = (event) => {
      const selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setCapturedImage(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    };
    inputElement.click();
  };

  return (
    <section className='position-relative bg-white overflow-hidden'>
        <div className='navigation bg-primary d-flex align-items-center ps-3 gap-3'>
          <Link to="/"><img src={ returnIcon } alt='return' type='button'/></Link>
          <h4 className='judul m-0 text-white'>Ganti Foto Profil</h4>
        </div>

        <div className='container my-3 h-100'>
          <div className='set-profile w-100 mt-3 mb-4'></div>

          <div className='btn-change-profile text-white d-flex flex-column gap-3 w-100 align-items-center'>
            <button><Link className='text-decoration-none text-white' to="/take">Ambil Dari Kamera</Link></button>
            <button onClick={ handleAddFromGallery }>Ambil Dari Gallery</button>
          </div>
        </div>

        <div className='bg-primary d-flex align-items-center text-center ps-3 gap-3 bottom-0 position-absolute'>
          <h4 className='judul m-0 text-white'>Simpan</h4>
        </div>
    </section>
  )
}

export default ChangePicture
