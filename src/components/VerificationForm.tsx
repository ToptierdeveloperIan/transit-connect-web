import React, { useState } from "react";
import { useFormModal } from './FormContext.tsx';

interface VerificationFormProps {
  phoneNumber: string;
  verificationMethod: string;
  email?: string; // optional
}

const VerificationForm: React.FC<VerificationFormProps> = ({ phoneNumber, verificationMethod, email }) => {
  const [otpdata, setFormData] = useState({ otp: "" });
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const { setShowForm } = useFormModal();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...otpdata, [e.target.name]: e.target.value });
  };

  const handleSend = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/verify/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: otpdata.otp, phone_number: phoneNumber }),
      });

      if (response.ok) {
        const result = await response.json();
        alert("OTP verified successfully!");
        setShowForm(false);
        console.log(result);
      } else {
        const errorData = await response.json();
        alert("Failed to verify OTP.");
        console.error(errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/resendotp/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone_number: phoneNumber }), // ✅ resend tied to phoneNumber
      });

      if (response.ok) {
        const result = await response.json();
        alert("OTP resent successfully!");
        console.log(result);
      } else {
        const errorData = await response.json();
        alert("Failed to resend OTP.");
        console.error(errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <section>
      <div className="container form">
        <div className="card">
          <div className="card-body forms">
            <label className="form-label fw-bold small">Enter the code sent to your phone</label>
            <p className="text-muted small">
              We've sent a 6-digit code to{" "}
              <strong className="text-white">
                {verificationMethod === "Email" ? email : phoneNumber}
              </strong>.
              Please enter it below.
            </p>
            <input
              type="text"
              name="otp"
              className="form-control"
              placeholder="Enter OTP"
              onChange={handleInput}
              value={otpdata.otp}
            />
            <div className="sendbtn">
              <button
                className="mt-4 btn btn-info text-white px-4"
                onClick={handleSend}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

              <button
                type="button"
                className="btn btn-link p-0 small"
                onClick={handleResend}
                disabled={resendLoading}
              >
                {resendLoading ? "Resending..." : "Didn’t get the code? Resend"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationForm;
