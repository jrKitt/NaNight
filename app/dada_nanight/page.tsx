import Image from "next/image";

export default function Gallery() {
  const images = [
    "/img1.jpg",
    "/IMG_8944.png",
    "/IMG_8945.jpg",
    "/IMG_8946.jpg",
  ];

  return (
    <div className="min-h-screen bg-base-200 flex flex-col  items-center py-10">
      <h1 className="text-3xl font-bold mb-6">📸 คลังรูปภาพของเราสองคน</h1>

      <Image src="/couple.gif" alt="Cute GIF" className="w-32 h-32 mx-auto" width={128} height={128} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl px-4 justify-center">
        {images.map((src, index) => (
          <div key={index} className="grid gap-4">
            <Image
              className="h-auto max-w-full rounded-lg shadow-md"
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={300} 
              height={200} 
            />
          </div>
        ))}
      </div>

      <p className="font-bold mb-6 mt-4">ถึงรูปจะมีแค่นี้แต่ดาด้าตั้งใจเลือกนะที่เหลือมันเอามาหมดไม่ได้เลย</p>

      <div className="flex justify-center">
        <button className="btn btn-active btn-primary text-white">
          <a href="/night">ย้อนกลับ 🌸</a>
        </button>
      </div>
    </div>
  );
}
