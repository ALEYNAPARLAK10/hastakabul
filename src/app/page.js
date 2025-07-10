import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[60px_1fr_40px] min-h-screen font-[family-name:var(--font-geist-sans)] bg-white text-gray-900">
      <Header />

   <main className="row-start-2 flex items-center justify-center p-8 gap-12 max-w-6xl mx-auto w-full">

       
        <div className="flex flex-col justify-center flex-1">
          <h1 className="text-6xl font-bold mb-2">ATAGEN</h1>
          <h2 className="text-2xl font-semibold mb-4">DİJİTAL PATOLOJİ </h2>
          <p className="text-lg text-gray-700 max-w-md">
             Atagen, dijital patoloji alanında yenilikçi çözümler sunan güçlü bir platformdur.
          </p>
        </div>

   
        <div className="flex flex-col items-center flex-1">
          <img
            src="/resim1.jpeg" 
            alt="Büyük Görsel"
            className="w-full max-w-md rounded-lg mb-6 object-cover"
          />

          <div className="flex gap-4">
            <img src="/resim2.jpeg" alt="Küçük Görsel 1" className="w-20 h-20 rounded-md object-cover" />
            <img src="/resim3.jpeg" alt="Küçük Görsel 2" className="w-20 h-20 rounded-md object-cover" />
            <img src="/resim.jpeg" alt="Küçük Görsel 3" className="w-20 h-20 rounded-md object-cover" />
            <img src="/resim5.jpeg" alt="Küçük Görsel 4" className="w-20 h-20 rounded-md object-cover" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}



