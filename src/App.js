import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DisplayInput from './DisplayInput';
import Register from './Register'; // 這是你原本寫好的作業 2

function App() {
  return (
    // 使用 BrowserRouter 必須加上 basename，否則部署後會 404
    <BrowserRouter basename="/classwork-app">
      <nav style={{ 
        padding: '15px', 
        backgroundColor: '#282c34', 
        display: 'flex', 
        gap: '20px' 
      }}>
        {/* 指向根目錄，即作業 2 */}
        <Link to="/" style={{ color: 'white', fontWeight: 'bold' }}>Assignment 2 (Submit)</Link>
        {/* 指向 /display，即作業 1 */}
        <Link to="/display" style={{ color: 'white', fontWeight: 'bold' }}>Assignment 1 (Display)</Link>
      </nav>

      <Routes>
        {/* 根路徑 (https://taian-an.github.io/classwork-app/) 顯示作業 2 */}
        <Route path="/" element={<Register />} />
        
        {/* 子路徑 (https://taian-an.github.io/classwork-app/display) 顯示作業 1 */}
        <Route path="/display" element={<DisplayInput />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;