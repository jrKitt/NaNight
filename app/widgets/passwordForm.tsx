"use client";
import { useState } from "react";

export default function VerifyPassword() {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      <main className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="max-w-md text-center bg-white px-6 py-8 rounded-xl shadow-md">
          <header className="mb-6">
            <h1 className="text-2xl font-bold mb-1">P&apos; Night</h1>
            <p className="text-sm text-gray-500">วันสำคัญของนะไน้กับดาด้าคือวันไหน?</p>
          </header>

          <form id="otp-form" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  className="w-14 h-14 text-center text-2xl font-extrabold text-gray-900 bg-gray-100 border border-gray-300 rounded-lg outline-none focus:bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-300"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              ))}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2.5 px-4 rounded-lg shadow-md transition duration-150"
              >
                ยืนยัน
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* ✅ Error Modal when OTP is incorrect */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-red-600">จริงหร๊ออออ</h2>
            <p className="text-gray-600">นะไน้ลองคิดดีๆๆๆ</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              ตกลง
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
