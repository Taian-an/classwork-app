// src/App.js 範例
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';

function App() {
  return (
    <BrowserRouter basename="/classwork-app">
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;