import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnswerSheetPage from './pages/AnswerSheetPage';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AnswerSheetPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
