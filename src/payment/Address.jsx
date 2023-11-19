import React, { useState } from 'react';
import "./Payment.module.css"
import { useNavigate } from 'react-router-dom';

function AddressPage() {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const navigate = useNavigate();

  const handleNext = () => {
    // Validate form fields and perform any necessary checks
    if (!fullName || !mobileNumber || !addressLine1 || !city || !pincode || !state || !country) {
      alert('Please fill in all required fields.');
      return;
    }

    if (pincode.length !== 6 || isNaN(pincode)) {
      alert('Please enter a valid 6-digit pincode.');
      return;
    }

    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    // If validation is successful, navigate to the payment page
    navigate('/payment');
  };

  return (
    <div className='AP'>
    <div className="container">
      <h2>Enter Shipping Address</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
     
      <input
        type="text"
        placeholder="Address Line 1"
        value={addressLine1}
        onChange={(e) => setAddressLine1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address Line 2"
        value={addressLine2}
        onChange={(e) => setAddressLine2(e.target.value)}
      />
      <input
        type="text"
        placeholder="Landmark"
        value={landmark}
        onChange={(e) => setLandmark(e.target.value)}
      />
       </div>
      <div className="input-group">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
    </div>
  );
}

export default AddressPage;
