import React, { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const axiosSecure = useAxiosSecure();

  const [paymentInfo, setPaymentInfo] = useState(null);
  console.log(paymentInfo);
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then(res => {
          setPaymentInfo(res.data);
          console.log("payment-success ", res.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [sessionId, axiosSecure]);

  if (!paymentInfo) {
    return <p className="text-center mt-10">Loading payment info...</p>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        Payment Successful 🎉
      </h2>

      <p>
        <strong>Transaction ID:</strong> {paymentInfo.transactionId}
      </p>

      <p>
        <strong>Tution ID:</strong> {paymentInfo.TutionId}
      </p>

      <p>
        <strong>Student Email:</strong> {paymentInfo.StudentEmail}
      </p>
        <p>
        <strong>teacher Email:</strong> {paymentInfo.teacherEmail}
      </p>
      <p>
        <strong>Paid Amount:</strong>{' '}
        <span className="text-primary font-semibold">
          {paymentInfo.amount} TK
        </span>
      </p>

      <p className="mt-3 text-green-500 font-semibold">
        Payment Status: Successful
      </p>
      <div className='flex gap-4'>
        <NavLink to="/dashboard" className="btn btn-primary mt-5">
          Payment Histary
        </NavLink>
        <NavLink to="/" className="btn btn-primary mt-5">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default PaymentSuccess;
