import React, { useState, useEffect } from 'react';
import "./Payment.module.css"
import { useNavigate } from 'react-router-dom';


function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [bank, setBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [upiID, setUPIID] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('1200');
  const [CheckIn, setCheckIn] = useState('');
  const [Chechout, setCheckOut] = useState('');
  const [bdays, setBdays] = useState('4');
  const [totalP, setTotalP] = useState('4800');
  const navigate=useNavigate()

  useEffect(() => {
    // Fetch the stored data from local storage
    const storedData = JSON.parse(localStorage.getItem('Price'));
    if (storedData) {
      setSelectedPrice(storedData.totalP);
      setCheckIn(storedData.Check_In);
      setCheckOut(storedData.Check_out);
      setBdays(storedData.bdays);
      setTotalP(storedData.totalP);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    e.preventDefault();



    switch (paymentMethod) {
      case 'creditcard':
      case 'debitcard':
        if (cardNumber.length !== 16  || cvv.length !== 3) {
          alert('Please enter valid card information.');
          return;
        }
  
        break;
      case 'netbanking':
        if (!bank || !accountNumber) {
          alert('Please fill in all required fields.');
          return;
        }
    
        break;
      case 'upi':
        if (!upiID) {
          alert('Please fill in UPI ID.');
          return;
        }
     
        break;
      case 'cashondelivery':
      
        break;
      default:
    
        break;
    }
    const isConfirmed = window.confirm('Are you sure you want to proceed with the payment?');
    if (!isConfirmed) {
      return;
    }
    else{
      navigate(`/paymentsuccesful`)

    }

    


    const randomOrderId = generateRandomOrderId();
    setOrderId(randomOrderId);
    setOrderSuccess(true);
  };

  const generateRandomOrderId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const orderIdLength = 10;
    let orderId = '';
    for (let i = 0; i < orderIdLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      orderId += characters.charAt(randomIndex);
    }
    return orderId;
  };

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case 'creditcard':
      case 'debitcard':
        return (
          <div >
            <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            <input type="month" style={{width:"390px"}} placeholder="Expiry Date (MM/YY)" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
            <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCVV(e.target.value)} />
          </div>
        );
      case 'netbanking':
        return (
          <div>
            <select value={bank} onChange={(e) => setBank(e.target.value)}>
              <option value="">Select Bank</option>
              <option value="SBI">SBI</option>
              <option value="HDFC">HDFC</option>
              <option value="IDFC">IDFC</option>
              <option value="BOI">BOI</option>
              <option value="ICICI">ICICI</option>
              <option value="Canara">Canara</option>
              {/* Add more bank options */}
            </select>
            <input type="text" placeholder="Account Number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
          </div>
        );
      case 'upi':
        return (
          <div>
            <input type="text" placeholder="UPI ID" value={upiID} onChange={(e) => setUPIID(e.target.value)} />
          </div>
        );
      case 'cashondelivery':
        return (
          <p>Please have the exact amount ready for payment upon delivery.</p>
        );
      default:
        return null;
    }
  };
  

  return (
    <div className="container">
      <h2>Select Payment Method</h2>
      <select className="payment-method-select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="creditcard">Credit Card</option>
        <option value="debitcard">Debit Card</option>
        <option value="netbanking">Net Banking</option>
        <option value="upi">UPI</option>
      </select>

      {renderPaymentForm()}

    <button onClick={handleSubmit} style={{margin:"auto",width:"390px"}}>Pay</button>

{orderSuccess && (
  <div className="order-success">
    <p>Your order has been placed successfully!</p>
    <p>Order ID: {orderId}</p>
  </div>
)}

<div className="right-section">
          <div id="Total_P" style={{color:"white"}}>
            <p >₹ {selectedPrice} X {bdays} Night</p>
            <p>{totalP}</p>
          </div>

          <div id="Befr_Tax">
            <h2>Total after Tax</h2>
            <h2>{totalP}</h2>
          </div>
        </div>
      </div>
 
  );
}

export default PaymentForm;