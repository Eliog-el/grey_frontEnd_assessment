import './App.css';
import Header from './components/Header';
import * as React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { AppContextProvider } from './context/AppContext';
import { ToastContainer } from 'react-toastify';
import SideBar from './components/SideBar';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import DetailsPage from './Pages/DetailsPage';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <div className='App' style={{
          display: 'flex',
          height: '100vh',
        }}>
          <SideBar />
          <div style={{
            width: '100%',
          }}>
            <Header />
            <div className='App-Body' style={{
              maxHeight: "93vh",
              overflow: "auto",
            }}>
              <Routes>
                <Route path="/" index id='0' element={<HomePage />} />
                <Route path="/search" index id='1' element={<SearchPage />} />
                <Route path="/:characterId/details" index id='2' element={<DetailsPage />} />
              </Routes>
              <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
