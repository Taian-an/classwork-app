import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmitDataForm from './SubmitDataForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/submit-data" element={<SubmitDataForm />} />
      </Routes>
    </Router>
  );
}
export default App;