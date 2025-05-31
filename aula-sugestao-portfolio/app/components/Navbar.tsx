import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white p-6 shadow-xl sticky top-0 z-50">
      <ul className="flex gap-12 justify-center items-center">
        <li>
          <Link href="#sobre" className="text-xl font-bold hover:text-indigo-300 transition-colors transform hover:scale-105">Sobre</Link>
        </li>
        <li>
          <Link href="#projetos" className="text-xl font-bold hover:text-indigo-300 transition-colors transform hover:scale-105">Projetos</Link>
        </li>
        <li>
          <Link href="#contato" className="text-xl font-bold hover:text-indigo-300 transition-colors transform hover:scale-105">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}