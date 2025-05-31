import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-400 text-white p-4 shadow-lg backdrop-blur-md">
      <ul className="flex gap-8 justify-center items-center">
        <li>
          <Link href="#sobre" className="text-xl font-semibold hover:text-purple-200 transition-colors">Sobre</Link>
        </li>
        <li>
          <Link href="#projetos" className="text-xl font-semibold hover:text-purple-200 transition-colors">Projetos</Link>
        </li>
        <li>
          <Link href="#contato" className="text-xl font-semibold hover:text-purple-200 transition-colors">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
