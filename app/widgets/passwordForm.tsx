"use client";
import { useState } from "react";

export default function VerifyPassword() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp === "1206") {
      window.location.href = "/night";
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center overflow-hidden z-30">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">
            <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
              <header className="mb-8">
                <h1 className="text-2xl font-bold mb-1">P&apos; Night</h1>
                <p className="text-[15px] text-slate-500">
                  วันสำคัญของนะไน้กับดาด้าคือวันไหน
                </p>
              </header>
              <form id="otp-form" onSubmit={handleSubmit}>
                <div className="flex items-center justify-center gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-input-${index}`}
                      type="text"
                      className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-purple-400 focus:ring-2 focus:ring-indigo-100"
                      pattern="\d*"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                    />
                  ))}
                </div>
                <div className="max-w-[260px] mx-auto mt-4">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-purple-400 px-3.5 py-2.5 text-lg font-bold text-white shadow-sm shadow-indigo-950/10 hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-300 transition-colors duration-150"
                  >
                    ยืนยัน
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      \{" "}
      {isModalOpen && (
        <div
          id="popup-modal"
          className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-contrast-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setIsModalOpen(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  นะไน้แน่ใจหรอลองอีกครั้งมั้ย
                </h3>
                <button
                  type="button"
                  className="text-white bg-red-400 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-bold rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  onClick={() => setIsModalOpen(false)}
                >
                  ลองก็ดะ
                </button>
              </div>
            </div>
            
          </div>
          
        </div>
      )}
    </div>
  );
}
