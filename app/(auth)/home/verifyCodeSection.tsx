"use client";

import React, { useState } from "react";
import ReviewForms from "@/components/forms/reviewForms";

// verify code section
const VerifyCodeSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setVerified] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCheckVerify = async () => {
    setIsLoading(true);
    setErrorMessage(null); // Clear previous error messages

    try {
      const res = await fetch("api/check-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: verifyCode }),
      });

      if (res.status === 200) {
        const verificationCode = await res.json();
        if (verificationCode.isUsed) {
          setVerified(false);
          setErrorMessage("This code has already been used.");
        } else {
          setVerified(true);
        }
      } else {
        setVerified(false);
        setErrorMessage("Code not found. Please try again.");
      }
    } catch (error) {
      setVerified(false);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVerifyCode(value);
    setErrorMessage(null); // Clear error when typing
  };

  return (
    <div>
      <div className="min-h-[60vh] flex justify-center items-center w-full">
        {isVerified ? (
          <ReviewForms code={parseInt(verifyCode)} />
        ) : (
          <div className="w-full">
            {/* Validation Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm text-center mb-3">
                {errorMessage}
              </p>
            )}
            {/* Input Field with Red Border on Error */}
            <label className="input input-bordered flex items-center gap-2 w-full">
              Enter your review code
              <input
                onChange={handleChange}
                type="text"
                value={verifyCode}
                placeholder="Ex: 23761234"
                className={`grow ${
                  errorMessage ? "border-red-500 focus:ring-red-500" : ""
                }`}
              />
            </label>
            <div className="flex justify-end">
              <button
                onClick={handleCheckVerify}
                className="btn btn-outline mt-5"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify Code"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyCodeSection;
