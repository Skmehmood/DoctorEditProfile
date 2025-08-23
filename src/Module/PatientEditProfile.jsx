import React, { useState } from 'react';
import styles from './PatientEditProfile.module.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";

function PatientEditProfile() {
  const [patientData, setPatientData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    age: '',
    gender: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'dob') {
      const calculatedAge = calculateAge(value);
      setPatientData({ ...patientData, dob: value, age: calculatedAge });
    } else {
      setPatientData({ ...patientData, [name]: value });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Edit Patient Profile</h2>
        <form>
          <div className={styles.name}>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={patientData.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={patientData.lastname}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={patientData.dob}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <label>Gender</label>
            <div className={styles.genderGroup}>
              <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
              <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
              <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
            </div>
          </div>

          <textarea
            name="address"
            placeholder="Enter Address"
            value={patientData.address}
            onChange={handleChange}
            rows="3"
          ></textarea>

          <div className={styles.passwordRow}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={patientData.password}
              onChange={handleChange}
            />
            {/* <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span> */}
          </div>

          <div className={styles.passwordRow}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={patientData.confirmPassword}
              onChange={handleChange}
            />
            {/* <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span> */}
          </div>

          <button type="submit">Save Changes</button>
        </form>
      </div>

      <div className={styles.previewContainer}>
        <h3>Live Preview</h3>
        <div className={styles.previewCard}>
          <p><strong>Name:</strong> {patientData.firstname} {patientData.lastname}</p>
          <p><strong>DOB:</strong> {patientData.dob}</p>
          <p><strong>Age:</strong> {patientData.age}</p>
          <p><strong>Gender:</strong> {patientData.gender}</p>
          <p><strong>Address:</strong> {patientData.address}</p>
        </div>
      </div>
    </div>
  );
}

export default PatientEditProfile;
