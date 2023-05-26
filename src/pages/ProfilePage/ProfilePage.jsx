import React from 'react'
import camera from '../../assets/camera.svg';
import returnIcon from '../../assets/return.svg';
import './index.css';
import { Link } from 'react-router-dom';

const ProfilePage = ({ capturedImage }) => {
  return (
    <section className='bg-white overflow-hidden'>
      <div className='navigation bg-primary d-flex align-items-center ps-3 gap-3'>
        <img src={ returnIcon } alt='return' type='button'/>
        <h4 className='judul m-0 text-white'>Profil</h4>
      </div>

      <div className='container my-3 h-100'>
        <div className='d-flex w-50 gap-3 align-items-center justify-items-center'>
          <div className={ `display-profile d-flex align-items-center justify-content-center ${ capturedImage ? 'p-0' : 'p-2' }` } style={{ width: 'auto', height: 'auto' }}>
            <Link to="/change">
              <img src={ capturedImage ? capturedImage : camera } width={ capturedImage ? '56px' : '28px' } height={ capturedImage ? 'auto' : '28px' } className='rounded-2' type="button"/>
            </Link>
          </div>
          
          <div className='d-flex flex-column justify-items-center'>
            <strong>John Doe</strong>
            <p className='mb-1'>Kelas 10 IPA B</p>
          </div>
        </div>
      
        <div className='content w-100 bg-primary mt-3'></div>
        <div className='content w-100 bg-primary mt-3'></div>
        <div className='content w-100 bg-primary mt-3'></div>
      </div>
    </section>
  )
}

export default ProfilePage