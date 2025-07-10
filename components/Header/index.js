"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!username || !password) {
      alert("Lütfen kullanıcı adı ve şifre girin!");
      return;
    }

 


    router.push("/dashboard");
  };

  return (
    <header className="row-start-1 w-full flex items-center justify-between bg-gray-800 text-white px-6 sm:px-12 py-4">
  
      <div className="flex items-center gap-2">
        <Image
          src="/images.jpeg"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-bold text-lg hidden sm:inline">ATAGEN</span>
      </div>

    
      <div className="flex items-center gap-6 text-sm sm:text-base">
        <Link href="/menu1" className="hover:underline">Hakkımızda</Link>
        <Link href="/menu3" className="hover:underline">Hekimler</Link>
        <Link href="/menu2" className="hover:underline">Testler</Link>
       

        <button
          onClick={() => setShowLogin(true)}
          className="ml-4 bg-white text-gray-800 rounded px-3 py-1 font-medium hover:bg-gray-100 transition"
        >
          Giriş
        </button>
      </div>

      
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[90%] max-w-sm animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Giriş Yap
            </h2>
         <input
             type="text"
             placeholder="Kullanıcı Adı"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             className="border border-gray-300 w-full mb-4 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition placeholder:text-gray-700 placeholder:font-medium placeholder:text-base text-black"
        />   
          <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 w-full mb-6 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition placeholder:text-gray-700 placeholder:font-medium placeholder:text-base text-black"
              />
            <div className="flex justify-between">
              <button
                onClick={() => setShowLogin(false)}
                className="text-gray-600 hover:text-gray-900 transition font-medium"
              >
                İptal
              </button>
              <button
                onClick={handleLogin}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-semibold shadow"
              >
                Giriş Yap
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 

