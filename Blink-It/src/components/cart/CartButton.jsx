import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { showCart } from '../../store/ui';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import './CartButton.css'
import './GroceryDelivery.css';
import './PaymentPage.css'

const GroceryDelivery = ({ onClose, onGrocerySubmit }) => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

  const slots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
    '6:00 PM - 8:00 PM'
  ];

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onGrocerySubmit(selectedSlot); // Pass selected slot back to parent
  };

  // Update the current date every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grocery-delivery-overlay">
      <div className="grocery-delivery">
        <button className="close-button" onClick={onClose}>×</button>
        <h1 className="title">Delivery Timing Slot</h1>
        <p className="current-date">Current Date and Time: {currentDate}</p>
        <form onSubmit={handleSubmit}>
          <label className="slot-label">Choose a delivery slot:</label>
          <select value={selectedSlot} onChange={handleSlotChange} className="slot-select">
            <option value="">Select a slot</option>
            {slots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

const PaymentPage = ({ onClose, selectedSlot }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    otp: '',
    bankDetails: {
      accountNumber: '',
      ifsc: '',
      password: ''
    },
    walletDetails: {
      walletNumber: '',
      walletPassword: ''
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('bank')) {
      setPaymentDetails({
        ...paymentDetails,
        bankDetails: {
          ...paymentDetails.bankDetails,
          [name]: value
        }
      });
    } else if (name.includes('wallet')) {
      setPaymentDetails({
        ...paymentDetails,
        walletDetails: {
          ...paymentDetails.walletDetails,
          [name]: value
        }
      });
    } else {
      setPaymentDetails({ ...paymentDetails, [name]: value });
    }
  };


  
  const handlePayment = (event) => {
    event.preventDefault();

    console.log(`Processing payment via ${selectedMethod}`);

    // Handle different payment methods
    if (selectedMethod === 'GPay' || selectedMethod === 'Paytm') {
      // Handle OTP confirmation for GPay or Paytm
      console.log(`Confirming ${selectedMethod} with OTP: ${paymentDetails.otp}`);
      // Assuming OTP confirmation is successful
      alert(`Payment via ${selectedMethod} successful!`);
    } else if (selectedMethod === 'NetBanking') {
      // Handle NetBanking confirmation
      console.log('Confirming Net Banking with details:', paymentDetails.bankDetails);
      // Assuming NetBanking confirmation is successful
      alert('Payment via Net Banking successful!');
    } else if (selectedMethod === 'Wallet') {
      // Handle Wallet confirmation
      console.log('Confirming Wallet Payment with details:', paymentDetails.walletDetails);
      // Assuming Wallet payment confirmation is successful
      alert('Payment via Wallet successful!');
    } else {
      alert('Invalid payment method selected!');
      return;
    }

    // Reset state after payment
    setSelectedMethod('');
    setPaymentDetails({
      otp: '',
      bankDetails: {
        accountNumber: '',
        ifsc: '',
        password: ''
      },
      walletDetails: {
        walletNumber: '',
        walletPassword: ''
      }
    });
  };

  return (
    <div className="payment-page-overlay">
      <div className="payment-page">
        <div className="container">
          <h1>Select Payment Method</h1>
          <form className='pay' onSubmit={handlePayment}>
            <label className='xy'>
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                onChange={() => setSelectedMethod('COD')}
                checked={selectedMethod === 'COD'}
              />
              <img className="i" src="data:image/jpeg;base64,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" alt="COD" />
              Cash on Delivery
            </label>
            <br />
            <label className='xy'>
              <input
                type="radio"
                name="paymentMethod"
                value="Wallet"
                onChange={() => setSelectedMethod('Wallet')}
                checked={selectedMethod === 'Wallet'}
              />
            <img className="i" src="data:image/jpeg;base64,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" alt="Wallet" />
              Wallet
            </label>
            <br />
            <label className='xy'>
              <input
                type="radio"
                name="paymentMethod"
                value="GPay"
                onChange={() => setSelectedMethod('GPay')}
                checked={selectedMethod === 'GPay'}
              />
            <img className="i" src="data:image/jpeg;base64,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" alt="GooglePay" />
              Google Pay
            </label>
            <br />
            <label className='xy'>
              <input
                type="radio"
                name="paymentMethod"
                value="Paytm"
                onChange={() => setSelectedMethod('Paytm')}
                checked={selectedMethod === 'Paytm'}
              />
            <img className="i" src="data:image/png;base64,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" alt="Paytm" />
              Paytm
            </label >
            <br />
            <label className='xy'>
              <input
                type="radio"
                name="paymentMethod"
                value="NetBanking"
                onChange={() => setSelectedMethod('NetBanking')}
                checked={selectedMethod === 'NetBanking'}
              />
            <img className="i" src="data:image/png;base64,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" alt="NetBanking" />
              Net Banking
            </label>
            <br />

            {/* Render OTP input for Google Pay and Paytm */}
            {(selectedMethod === 'GPay' || selectedMethod === 'Paytm') && (
              <div>
                <label >
                  Enter OTP:
                  <input
                    className='otp'
                    type="text"
                    name="otp"
                    value={paymentDetails.otp}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            )}

            {/* Render Bank details for Net Banking */}
            {selectedMethod === 'NetBanking' && (
              <div className='gap'>
                <label>
                  Account Number:
                  <input
                    className='o'
                    type="text"
                    name="bankAccountNumber"
                    value={paymentDetails.bankDetails.accountNumber}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  IFSC:
                  <input
                   className='o'
                    type="text"
                    name="bankIfsc"
                    value={paymentDetails.bankDetails.ifsc}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                   className='o'
                    type="password"
                    name="bankPassword"
                    value={paymentDetails.bankDetails.password}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            )}

            {/* Render Wallet details for Wallet */}
            {selectedMethod === 'Wallet' && (
              <div className='gap'>
                <label>
                  Wallet Number:
                  <input
                   className='o'
                    type="text"
                    name="walletNumber"
                    value={paymentDetails.walletDetails.walletNumber}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                   className='o'
                    type="password"
                    name="walletPassword"
                    value={paymentDetails.walletDetails.walletPassword}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            )}

            <br />
            <button className="v" type="submit" disabled={!selectedMethod}>
              Proceed to Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const CartButton = () => {
  const { billAmount, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showGroceryDelivery, setShowGroceryDelivery] = useState(false);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [selectedDeliverySlot, setSelectedDeliverySlot] = useState('');

  const handleCartClick = () => {
    dispatch(showCart());
    setShowGroceryDelivery(true);
  };

  const handleClose = () => {
    setShowGroceryDelivery(false);
    setShowPaymentPage(false); // Ensure PaymentPage is hidden on close
  };

  const handleGrocerySubmit = (slot) => {
    setSelectedDeliverySlot(slot);
    setShowPaymentPage(true);
    setShowGroceryDelivery(false); // Hide GroceryDelivery after submission
  };

  return (
    <>
      <div
        className="flexshop items-center rounded-[6px] min-w-[112px] h-[50px] py-2 px-3 gap-2 font-bold text-sm bg-[green] cursor-pointer text-white"
        onClick={handleCartClick}
      >
        <FaShoppingCart size={22} className="_wiggle" />
        <div className="flexshop flex-col font-bold text-[14px] leading-none">
          {totalQuantity === 0 ? (
            <span className="s">My Cart</span>
          ) : (
            <>
              <span className="tracking-tight">{totalQuantity} <a href="#">items</a></span>
              <span className="tracking-tight mt-0.5">₹{billAmount}</span>
            </>
          )}
        </div>
      </div>
      
      {showGroceryDelivery && (
        <GroceryDelivery onClose={handleClose} onGrocerySubmit={handleGrocerySubmit} />
      )}

      {showPaymentPage && (
        <PaymentPage onClose={handleClose} selectedSlot={selectedDeliverySlot} />
      )}
    </>
  );
};

export default CartButton;
