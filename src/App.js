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
            element={<ProfilePage capturedImage={capturedImage} />}
          />
          <Route
            path="/take"
            element={<TakePicture setCapturedImage={setCapturedImage} />} />
          <Route
            path="/change"
            element={<ChangePicture capturedImage={capturedImage} setCapturedImage={setCapturedImage} />}
          />
          <Route path='/crop' element={ <CropPicture capturedImage={capturedImage} setCapturedImage={setCapturedImage}/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
