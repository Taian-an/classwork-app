import React, { useState } from 'react';

const genders = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Others", value: "others" }
];

const hobbyOptions = [
  { label: "Music", value: "Music" },
  { label: "Movies", value: "Movies" },
  { label: "Plastic Model", value: "Plastic Model" }
];

const roles = [
  { label: "General staff", value: "General staff" },
  { label: "Developer", value: "Developer" },
  { label: "System Analyst", value: "System Analyst" }
];

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    role: roles[0].value
  });
  const [hobbies, setHobbies] = useState([]);
  
  // 新增：控制是否已提交的狀態
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

  // 新增：處理提交與返回
  const handleSubmit = (e) => {
    e.preventDefault(); // 防止頁面刷新
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setIsSubmitted(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registration Form</h2>

      {/* 使用三元運算子判斷顯示「表單」還是「結果」 */}
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            Username: <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div>
            Firstname: <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
          </div>
          <div>
            Lastname: <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
          </div>
          
          <div>
            Gender: 
            {genders.map(g => (
              <label key={g.value}>
                <input type="radio" name="gender" value={g.value} onChange={handleChange} required /> {g.label}
              </label>
            ))}
          </div>

          <div>
            Hobbies:
            {hobbyOptions.map(h => (
              <label key={h.value}>
                <input type="checkbox" value={h.value} onChange={onHobbiesToggle} /> {h.label}
              </label>
            ))}
          </div>

          <div>
            Apply Role:
            <select name="role" onChange={handleChange}>
              {roles.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
            </select>
          </div>
          
          <br />
          <button type="submit">Submit Data</button>
        </form>
      ) : (
        <div style={{ color: 'brown' }}>
          <h3>Submission Result:</h3>
          <p>Username: {formData.username}</p>
          <p>Firstname: {formData.firstname}</p>
          <p>Lastname: {formData.lastname}</p>
          <p>Gender: {formData.gender}</p>
          <p>Hobbies: {hobbies.join(", ")}</p>
          <p>Role: {formData.role}</p>
          <br />
          <button onClick={handleBack}>Go Back to Form</button>
        </div>
      )}
    </div>
  );
}

export default Register;