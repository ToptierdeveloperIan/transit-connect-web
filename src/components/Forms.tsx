import React, { useState } from "react";
import { useFormModal } from "./FormContext.tsx";
import VerificationForm from "./VerificationForm.tsx";

const Forms: React.FC = () => {
  const { showForm, setShowForm } = useFormModal();

  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    phone_number: "",
    verificationMethod: "",
    email:"",// required
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [step, setStep] = useState<"form" | "verify">("form");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.second_name.trim()) newErrors.second_name = "Second name is required";
    if (!formData.phone_number.trim()) newErrors.phone_number = "Phone number is required";
    else if (!/^\+?\d{10,15}$/.test(formData.phone_number))
      newErrors.phone_number = "Enter a valid phone number (10–15 digits)";
    if (!formData.verificationMethod) newErrors.verificationMethod = "Choose SMS or WhatsApp";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;



    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStep("verify");
        const result = await response.json();
        console.log(result);
        alert("Success! Proceed to verification stage");
      } else {
        const errorData = await response.json();
        console.error(errorData);
        alert("Failed to register user. Please try again later");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {showForm && (
        <section>
          <div
            className="modal-overlay"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,

            }}
          >
           <button className="mobile-btn"
              onClick={() => {
              setShowForm(false);
              setFormData({
              first_name: "",
              second_name: "",
              phone_number: "",
              verificationMethod: "",
              email: "",
    });
    setErrors({});
    setStep("form");
  }}

              style={{
                position: "absolute",
                top: "85px",
                right: "70px",
                zIndex: 10000,
                background: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                color: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              &times;
            </button>


              {/* Form Slide */}
              <div
                style={{
                  position: "absolute",
                  top:"90px",
                  left:"0",
                  width: "100%",
                  overflow: "hidden",
                  transition: "opacity 0.5s ease-in-out",
                  opacity: step === "form" ? 1 : 0,
                  pointerEvents:step === "form" ? "auto":"none",
                }}
              >
                <div className="container form">
                  <div className="card header p-3">
                    <h3>
                      <p
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        THIS IS EARLY SIGN UP IS EXCLUSIVE FOR THE PSV FEATURE
                      </p>
                    </h3>
                    <div className="card-body forms">
                      <form onSubmit={handleSubmit} noValidate>
                        <div className="row mb-3">
                          <div className="col-md-6 mb-3 mb-md-0">
                            <label className="form-label fw-bold small text-white">
                              FIRST NAME
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                className="form-control"
                                placeholder="First Name"
                                onChange={handleChange}
                                value={formData.first_name}
                            />
                            {errors.first_name && (
                                <small className="text-danger">{errors.first_name}</small>
                            )}
                            <br/>

                            <label className="form-label fw-bold small mt-3 text-white">
                              SECOND NAME
                            </label>
                            <input
                                type="text"
                                name="second_name"
                                className="form-control"
                                placeholder="Second Name"
                                onChange={handleChange}
                                value={formData.second_name}
                            />
                            {errors.second_name && (
                                <small className="text-danger">{errors.second_name}</small>
                            )}
                          </div>

                          <div className="col-md-6">
                            <label className="form-label fw-bold small text-white">
                              PHONE NUMBER
                            </label>
                            <input
                                type="tel"
                                name="phone_number"
                                className="form-control"
                                placeholder="Phone Number"
                                onChange={handleChange}
                                value={formData.phone_number}
                            />
                            {errors.phone_number && (
                                <small className="text-danger">{errors.phone_number}</small>
                            )}
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-bold small text-white">
                            Verification method
                          </label>
                          <div>
                            <div className="form-check form-check-inline">
                              <input
                                  type="radio"
                                  name="verificationMethod"
                                  value="sms"
                                  id="smsOption"
                                  className="form-check-input"
                                  onChange={handleChange}
                                  checked={formData.verificationMethod === "sms"}
                              />
                              <label className="form-check-label" htmlFor="smsOption">
                                SMS <p>(For Safaricom users only.)
                              </p>
                              </label>



                          </div>

                            <div className="form-check form-check-inline">
                              <input
                                  type="radio"
                                  name="verificationMethod"
                                  value="Email"
                                  id="emailOption"
                                  className="form-check-input"
                                  onChange={handleChange}
                                  checked={formData.verificationMethod === "Email"}
                              />
                              <label className="form-check-label" htmlFor="emailOption">
                                Email
                              </label>
                            </div>
                          </div>
                          {errors.verificationMethod && (
                              <small className="text-danger">{errors.verificationMethod}</small>
                          )}
                        </div>
                        {/* Email input appears only when Email is selected */}
                        {formData.verificationMethod === "Email" && (
                            <div
                                className="mt-3"
                                style={{
                                  transition: "all 0.3s ease-in-out",
                                  opacity: formData.verificationMethod === "Email" ? 1 : 0,
                                }}
                            >
                              <input
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  placeholder="Enter your email"
                                  value={formData.email}
                                  onChange={handleChange}
                              />
                              {errors.email && (
                                  <small className="text-danger">{errors.email}</small>
                              )}
                            </div>
                        )}
                        <button
                            type="submit"
                                className="btn btn-info text-white px-4">

                          Send Message
                        </button>

                      </form>
                    </div>
                  </div>
                </div>
              </div>

            {/* Verification Form Slide */}
            <div
                style={{
                  position: "absolute",
                  width: "100%",
                  opacity:step === "verify" ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                  pointerEvents: step=== "verify" ? "auto":"none",
                }}
            >
              <VerificationForm phoneNumber={formData.phone_number}
                                verificationMethod={formData.verificationMethod}
                                email={formData.email}/>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Forms;
