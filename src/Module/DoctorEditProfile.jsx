import React, { useState } from 'react';
import style from './DoctorEditProfile.module.css';


function DoctorEditProfile() {
   const [doctorData, setDoctorData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    specialty: '',
    image: null,
    years_of_experience: '',
    imr_registration_no: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDoctorData({
        ...doctorData,
        image: URL.createObjectURL(file),
      });
    }
  };
  
  const experienceOptions = {
    zero_to_two: '0 - 2 years',
    three_to_four: '3 - 4 years',
    above_four: '4+ years',
  };
  
  
  
  
  return (
    <div className={style.container}>
      <div className={style.form_container}>
        <form>
        <h2>Edit Profile</h2>
          <div className={style.name}>
            <input
              type="text"
              name="firstname"
              value={doctorData.firstname}
              onChange={handleChange}
              placeholder='First Name'
              className={style.naam}
            />

            <input
              type="text"
              name="lastname"
              value={doctorData.lastname}
              onChange={handleChange}
              placeholder='Last Name'
              className={style.naam}
            />
          </div>

          <div className={style.contact}>
            <input
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={doctorData.email}
              onChange={handleChange}
              placeholder='Email'
            />

            <input
              type="tel"
              name="phone"
              maxlength="10"
              value={doctorData.phone}
              onChange={handleChange}
              placeholder='Phone'
            />
          </div>

          
          <div className={style.selection}>
            <div className={style.specialty}>
              <label>Specialty</label>
              <select
                name="specialty"
                value={doctorData.specialty}
                onChange={handleChange}
                className={style.select}
              >
                <option value="">Select Specialty</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="General Physician">General Physician</option>
              </select>
            </div>

            <div className={style.experience}>
              <label>Year of Experience</label>
              {/* <select
                name="years_of_experience"
                value={doctorData.years_of_experience}
                onChange={handleChange}
                className={style.select}
              >
                <option value="">Exprience</option>
                <option value="zero_to_two">0 - 2</option>
                <option value="three_to_four">3 - 4</option>
                <option value="above_four">4 +</option>
              </select> */}
              <select
                name="years_of_experience"
                value={doctorData.years_of_experience}
                onChange={handleChange}
                className={style.select}
              >
                <option value="">Experience</option>
                {Object.entries(experienceOptions).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>

            </div>
          </div>

          <div className={style.registraion_no}>
            <input
              type="text"
              name="imr_registration_no"
              maxlength="12"
              value={doctorData.imr_registration_no}
              onChange={handleChange}
              placeholder='IMR Registration No.'
              className={style.imr}
            />
          </div>

          <label>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          <div><button type="submit">Save Changes</button></div>
        </form>
      </div>

      <div className={style.preview_container}>
        <div className={style.preview_card}>
          {doctorData.image && (
            <img
              src={doctorData.image}
              alt="Doctor"
              className={style.preview_image}
            />
          )}
          <p><strong>Name:</strong> {doctorData.firstname} {doctorData.lastname}</p>
          {/* <p><strong>Last Name:</strong> {doctorData.lastname}</p> */}
          <p><strong>Email:</strong> {doctorData.email}</p>
          <p><strong>Phone:</strong> {doctorData.phone}</p>
          <p><strong>Specialty:</strong> {doctorData.specialty}</p>
          {/* <p><strong>Years of Experience:</strong> {doctorData.years_of_experience}</p> */}
          <p><strong>Years of Experience:</strong> {experienceOptions[doctorData.years_of_experience] || ' '}</p>
          <p><strong>IMR Registration No.:</strong> {doctorData.imr_registration_no}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorEditProfile;
