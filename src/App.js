import React, { useState } from 'react';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ChangePicture from './pages/ChangePicture/ChangePicture';
import CropPicture from './pages/CropPicture/CropPicture';
import TakePicture from './pages/TakePicture/TakePicture'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [capturedImage, setCapturedImage] = useState(null); // Tambahkan state untuk menyimpan gambar yang diambil

  return (
    <div className='App d-flex bg-secondary justify-content-center'>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<ProfilePage capturedImage={capturedImage} />} // Kirimkan gambar yang diambil ke halaman ProfilePage
          />
          <Route
            path="/take"
            element={<TakePicture setCapturedImage={setCapturedImage} />} // Kirimkan prop setCapturedImage ke halaman TakePicture
          />
          <Route
            path="/change"
            element={<ChangePicture capturedImage={capturedImage} setCapturedImage={setCapturedImage} />}
          />
          <Route path='/crop' element={ <CropPicture /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
