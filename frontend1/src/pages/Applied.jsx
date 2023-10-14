import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import '../assets/css/Applied.css';
import { Button } from '@mui/material';
import axios from 'axios';

function Applied() {
  const [invoiceNo, setInvoiceNo] = useState('');
  const [value, setValue] = useState('cash');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const nav = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlePayment = () => {
    setError('');
   

    // Basic validation
    if (!invoiceNo || isNaN(invoiceNo)) {
      setError('Please enter a valid invoice number.');
      return;
    }

    if (!amount || isNaN(amount) || amount <= 0) {
      setError('Please enter a valid positive amount.');
      return;
    }

    const data = {
      invoiceNo: Number(invoiceNo),
      paymentType: value,
      amount: Number(amount),
    };

    const apiEndpoint = 'http://localhost:8080/auth/api/billing';

    axios
      .post(apiEndpoint, data)
      .then((response) => {
        console.log('Payment successful:', response.data);
      })
      .catch((error) => {
        console.error('Payment failed:', error);
      });
      nav("/Payment")
  };

  return (
    <>
      <Layout />
      <div className="main-wrapper">
        <div className="apply">
          <h1>Congratulations !! You have joined the class successfully</h1>
        </div>
        <div className="bill-container">
          <div className="billform">
            <div className="bhead">
              <h1>BILLING</h1>
            </div>
            <br />
            <label>
              INVOICE NO :{' '}
              <input
                type="number"
                placeholder="Invoice no"
                className="invoice"
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
              />
            </label>
            <label>
              PAYMENT TYPE:
              <select value={value} onChange={handleChange}>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
              </select>
            </label>
            <br />
            <label>
              AMOUNT :{' '}
              <input
                type="number"
                placeholder="Amount"
                className="invoice"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <br />
            {error && <p className="error-message">{error}</p>}
            <br />
            <br />
            <Button className="list1">
              <div className="button1" onClick={handlePayment}>
                PAYMENT
              </div>
              <br />
              <Link to="/Dashboard">
                <div className="button2">CANCEL</div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Applied;
