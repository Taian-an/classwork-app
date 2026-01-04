import React, { useState } from 'react';

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
  
  // 新增：用來判斷是否切換到提交結果頁面
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  // 處理提交按鈕
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // 切換到結果頁面
  };

  // 處理返回按鈕
  const handleBack = () => {
    setIsSubmitted(false); // 切換回表單頁面
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      {/* 使用三元運算子決定渲染哪個 HTML */}
      {isSubmitted ? (
        // === 提交後的顯示畫面 (Submission View) ===
        <div style={{ textAlign: 'left', border: '1px solid green', padding: '20px' }}>
          <h2>Submission Successful!</h2>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Firstname:</strong> {formData.firstname}</p>
          <p><strong>Lastname:</strong> {formData.lastname}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
          <p><strong>Role:</strong> {formData.role}</p>
          <br />
          <button onClick={handleBack} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Go Back to Form
          </button>
        </div>
      ) : (
        // === 原始表單畫面 (Form View) ===
        <div>
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div>Username: <input type="text" name="username" value={formData.username} onChange={handleChange} required /></div>
            <br />
            <div>Firstname: <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} /></div>
            <br />
            <div>Lastname: <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} /></div>
            <br />
            <div>
              Gender:
              {genderOptions.map(opt => (
                <label key={opt}>
                  <input type="radio" name="gender" value={opt} checked={formData.gender === opt} onChange={handleChange} /> {opt}
                </label>
              ))}
            </div>
            <br />
            <div>
              Hobbies:
              {hobbyOptions.map(h => (
                <label key={h}>
                  <input type="checkbox" value={h} checked={hobbies.includes(h)} onChange={onHobbiesToggle} /> {h}
                </label>
              ))}
            </div>
            <br />
            <div>
              Apply Role:
              <select name="role" value={formData.role} onChange={handleChange}>
                {roleOptions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <br />
            {/* 作業要求：在表單下方新增 Submit 按鈕 */}
            <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
              Submit
            </button>
          </form>

          <hr />
          <h3>Input Preview (Real-time):</h3>
          <p>Username: {formData.username}</p>
          <p>Hobbies: {hobbies.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default Register;