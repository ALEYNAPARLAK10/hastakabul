import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ minimal }) {
  return (
    <aside className="w-60 bg-gray-800 flex flex-col items-center py-8 gap-10">
      <Image
        src="/images.jpeg"
        alt="Logo"
        width={60}
        height={60}
        style={{ borderRadius: "50%" }}
      />
      {!minimal && (
        <>
          <nav className="flex flex-col gap-6 w-full items-center">
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
            className="mt-auto text-red-800 hover:text-red-800 text-lg font-medium"
          >
            Çıkış Yap
          </Link>
        </>
      )}
    </aside>
  );
}







