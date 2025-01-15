import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainapp from './pages/home/mainapp';
import Footer from './pages/home/footer';
import Navbar from './pages/home/navbar';
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Toaster
      position="top-right"
    />
      <Routes>
        <Route path='/' element={<Mainapp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
