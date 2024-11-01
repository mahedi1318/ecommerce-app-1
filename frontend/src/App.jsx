import './App.css'
import Routes from './routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() { 

  return (
    <>
    <div>
      <ToastContainer />
      <Routes/>      
    </div>
    </>
  )
}

export default App
