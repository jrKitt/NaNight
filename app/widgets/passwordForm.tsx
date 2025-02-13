"use client";
import { useState } from "react";

export default function VerifyPassword() {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

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
                      maxLength={1}
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
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
