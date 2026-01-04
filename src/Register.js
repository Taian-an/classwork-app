import React, { useState } from 'react';

// 定義選項陣列
const genderOptions = ["Male", "Female", "Others"];
const hobbyOptions = ["Music", "Movies", "Plastic Model"];
const roleOptions = ["General staff", "Developer", "System Analyst"];

function Register() {
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

  const onHobbiesToggle = (event) => {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;
    if (!isChecked) {
      setHobbies(prev => prev.filter(item => item !== targetValue));
    } else {
      setHobbies(prev => [...prev, targetValue]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registration Form</h2>
      <form>
        <div>Username: <input type="text" name="username" onChange={handleChange} /></div>
        <br />
        <div>Firstname: <input type="text" name="firstname" onChange={handleChange} /></div>
        <br />
        <div>Lastname: <input type="text" name="lastname" onChange={handleChange} /></div>
        <br />
        <div>
          Gender:
          {genderOptions.map(opt => (
            <label key={opt}>
              <input type="radio" name="gender" value={opt} onChange={handleChange} /> {opt}
            </label>
          ))}
        </div>
        <br />
        <div>
          Hobbies:
          {hobbyOptions.map(h => (
            <label key={h}>
              <input type="checkbox" value={h} onChange={onHobbiesToggle} /> {h}
            </label>
          ))}
        </div>
        <br />
        <div>
          Apply Role:
          <select name="role" onChange={handleChange}>
            {roleOptions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </form>

      <hr />
      <h3>Output Preview:</h3>
      <p><strong>Username:</strong> {formData.username}</p>
      <p><strong>Firstname:</strong> {formData.firstname}</p>
      <p><strong>Lastname:</strong> {formData.lastname}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
      <p><strong>Role:</strong> {formData.role}</p>
    </div>
  );
}

export default Register; // 這行很重要，讓 App.js 可以找到它