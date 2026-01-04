// src/DisplayInput.js
import React, { useState } from 'react';

const genderOptions = ["Male", "Female", "Others"];
const hobbyOptions = ["Music", "Movies", "Plastic Model"];
const roleOptions = ["General staff", "Developer", "System Analyst"];

function DisplayInput() {
  const [formData, setFormData] = useState({ username: '', firstname: '', lastname: '', gender: '', role: 'General staff' });
  const [hobbies, setHobbies] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onHobbiesToggle = (e) => {
    const val = e.target.value;
    setHobbies(prev => e.target.checked ? [...prev, val] : prev.filter(i => i !== val));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Assignment 1: Display Input Data</h2>
      <form>
        {/* 表單內容...與之前相同 */}
        <div>Username: <input type="text" name="username" onChange={handleChange} /></div>
        {/* 其他欄位省略，請填入之前的內容 */}
      </form>
      <hr />
      <div style={{ backgroundColor: '#eee', padding: '10px' }}>
        <h3>Lower Part (Real-time):</h3>
        <p>Username: {formData.username}</p>
        <p>Hobbies: {hobbies.join(", ")}</p>
      </div>
    </div>
  );
}
export default DisplayInput;