import Image from "next/image";
import Link from "next/link";


export default function Sidebar({ minimal, annotations = [] }) {
 
 
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col py-8 px-4 gap-10 overflow-y-auto">
    
      <div className="flex justify-center">
        <Image
          src="/images.jpeg"
          alt="Logo"
          width={60}
          height={60}
          style={{ borderRadius: "50%" }}
        />
      </div>

   
      {!minimal && (
        <>
          <nav className="flex flex-col gap-6 items-start">
            <Link href="/dashboard" className="hover:underline text-lg font-medium">
              Hastalar
            </Link>
            <Link href="/images" className="hover:underline text-lg font-medium">
              Görseller
            </Link>
            <Link href="/viewer" className="hover:underline text-lg font-medium">
              Görüntüleyici
            </Link>
          </nav>

          <Link
            href="/"
            className="mt-auto text-red-400 hover:text-red-600 text-lg font-medium"
          >
            Çıkış Yap
          </Link>
        </>
      )}

    
      <div className="bg-white text-black p-4 rounded shadow mt-6">
        <h2 className="text-lg font-semibold mb-4">Anotasyonlar</h2>

        {annotations.length === 0 ? (
         <p className="text-sm text-gray-500">Henüz etiket yok</p>
        ) : (
          <ul className="space-y-2">
            {annotations.map((anno, idx) => {
              const commentBody = anno.body?.find(b => b.purpose === 'commenting');
              const tagBody = anno.body?.find(b => b.purpose === 'tagging');

              return (
                <li key={idx} className="p-2 border rounded shadow-sm bg-sky-50">
                  <p className="text-sm font-medium">{commentBody?.value}</p>
                  {tagBody?.value && (
                    <p className="text-xs text-gray-600 mt-1">
                      Etiket: {tagBody.value}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </aside>
  );
}







