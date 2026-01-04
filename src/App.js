import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DisployInput from './DisployInput'; // 作業 1
import Register from './Register';         // 作業 2

function App() {
  return (
    // basename 必須與你的 GitHub 倉庫名稱完全一致
    <BrowserRouter basename="/classwork-app">
      <nav style={{ padding: '15px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
        <Link to="/disployinput" style={{ marginRight: '20px', fontWeight: 'bold', textDecoration: 'none', color: '#007bff' }}>
          Assignment 1 (Display)
        </Link>
        <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#007bff' }}>
          Assignment 2 (Submit)
        </Link>
      </nav>

      <Routes>
        {/* 根路徑顯示作業 1 */}
        <Route path="/displayinput" element={<DisployInput />} />
        {/* /assignment2 路徑顯示作業 2 */}
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;