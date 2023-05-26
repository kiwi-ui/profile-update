import React from 'react'
import returnIcon from '../../assets/return.svg';
import './index.css';
import { Link } from 'react-router-dom';
import blank from '../../assets/blank.jpg'

const ChangePicture = ({capturedImage ,setCapturedImage }) => {
  
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

        <div className='container my-3 h-100 d-flex flex-column'>
          { capturedImage ? <img className='rounded-3' src={ capturedImage } alt='profile' height='50%' width='100%'/> : <img className='rounded-3' src={ blank } alt='blank' height='50%' /> }

          <div className='btn-change-profile text-white d-flex flex-column gap-3 w-100 align-items-center mt-4'>
            <button><Link className='text-decoration-none text-white' to="/take">Ambil Dari Kamera</Link></button>
            <button onClick={ handleAddFromGallery }><Link className='text-decoration-none text-white' to="/crop">Ambil Dari Gallery</Link></button>
          </div>
        </div>

        <div className='bg-primary text-center ps-3 gap-3 bottom-0 position-absolute w-100 pb-1'>
          <Link to='/'><h5 className='judul m-0 text-white py-1'>Simpan</h5></Link>
        </div>
    </section>
  )
}

export default ChangePicture
