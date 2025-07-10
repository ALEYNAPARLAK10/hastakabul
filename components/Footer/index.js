import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="row-start-3 w-full flex items-center justify-between bg-gray-800 text-white font-semibold text-sm sm:text-base px-6 sm:px-12 py-4">
   
      <div className="flex items-center gap-2">
        <div className="rounded-full  p-1">
          <Image
            src="/images.jpeg"
            alt="Logo"
            width={30}
            height={30}
            className=" rounded-full"
          />
        </div>
        <span className="font-bold text-lg hidden sm:inline"></span>
      </div>

      <nav className="flex gap-6">
        <Link href="/menu1" className="hover:underline">İletişim</Link>
        <Link href="/menu2" className="hover:underline">Adres</Link>
        <Link href="/menu3" className="hover:underline">Hakkımızda</Link>
      </nav>

     
      <nav className="flex gap-6">
        <Link href="/menu1" className="hover:underline">Link1</Link>
        <Link href="/menu2" className="hover:underline">Link2</Link>
        <Link href="/menu3" className="hover:underline">Link3</Link>
        <Link href="/menu3" className="hover:underline">Link4</Link>
      </nav>
    </footer>
  );
}



