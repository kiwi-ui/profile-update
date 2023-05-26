import React from 'react'
import returnIcon from '../../assets/return.svg';
import './index.css';
import PhotoProfile from '../../components/PhotoProfile';
import { Link } from 'react-router-dom';

const ChangePicture = () => {
  return (
    <section className='bg-white overflow-hidden'>
        <div className='navigation bg-primary d-flex align-items-center ps-3 gap-3'>
          <Link to="/"><img src={ returnIcon } alt='return' type='button'/></Link>
          <h4 className='judul m-0 text-white'>Ganti Foto Profil</h4>
        </div>

        <div className='container my-3 h-100'>
          <div className='set-profile w-100 mt-3 mb-4'></div>

          <div className='btn-change-profile text-white d-flex flex-column gap-3 w-100 align-items-center'>
            <button>
              <Link to="/take">Ambil Dari Kamera</Link>
            </button>
            <button>Ambil Dari Gallery</button>
          </div>
        </div>
    </section>
  )
}

export default ChangePicture