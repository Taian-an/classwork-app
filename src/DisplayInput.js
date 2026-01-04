import React, { useState } from 'react';

const genderOptions = ["Male", "Female", "Others"];
const hobbyOptions = ["Music", "Movies", "Plastic Model"];
const roleOptions = ["General staff", "Developer", "System Analyst"];

function DisplayInput() {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    role: 'General staff'
  });
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
      <h1>Assignment 1: Real-time Display</h1>
      <form style={{ border: '1px solid #ccc', padding: '15px' }}>
        <div>Username: <input type="text" name="username" onChange={handleChange} /></div>
        <br />
        <div>Firstname: <input type="text" name="firstname" onChange={handleChange} /></div>
        <br />
        <div>Lastname: <input type="text" name="lastname" onChange={handleChange} /></div>
        <br />
        <div>
          Gender:
          {genderOptions.map(opt => (
            <label key={opt}><input type="radio" name="gender" value={opt} onChange={handleChange} /> {opt}</label>
          ))}
        </div>
        <br />
        <div>
          Hobbies:
          {hobbyOptions.map(h => (
            <label key={h}><input type="checkbox" value={h} onChange={onHobbiesToggle} /> {h}</label>
          ))}
        </div>
        <br />
        <div>
          Role:
          <select name="role" onChange={handleChange}>
            {roleOptions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </form>

      <hr />
      <div style={{ backgroundColor: '#f9f9f9', padding: '15px' }}>
        <h3>Lower Part (Real-time Reflection):</h3>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
        <p><strong>Role:</strong> {formData.role}</p>
      </div>
    </div>
  );
}

export default DisplayInput;