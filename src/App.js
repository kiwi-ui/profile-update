import ProfilePage from './pages/ProfilePage/ProfilePage';
import ChangePicture from './pages/ChangePicture/ChangePicture';
import CropPicture from './pages/CropPicture/CropPicture';
import TakePicture from './pages/TakePicture/TakePicture'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App d-flex bg-secondary justify-content-center'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ProfilePage /> }/>
          <Route path="/change" element={ <ChangePicture /> }/>
          <Route path='/take' element={ <TakePicture /> } />
          <Route path='/crop' element={ <CropPicture /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
