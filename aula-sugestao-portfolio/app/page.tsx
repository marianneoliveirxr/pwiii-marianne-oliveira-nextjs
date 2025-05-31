import Head from 'next/head';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="p-16">
          {/* Seção Sobre */}
          <section id="sobre" className="mb-14 text-center">
            <h1 className="text-5xl font-extrabold text-gradient mb-6">Olá, Sou a Marianne Oliveira</h1>
            <p className="text-2xl text-gray-400">Desenvolvedora apaixonada por criar experiências digitais inovadoras e impactantes, sempre buscando o equilíbrio entre funcionalidade e estética.</p>
          </section>

          {/* Seção Projetos */}
          <section id="projetos" className="mb-15">
            <h2 className="text-4xl font-bold text-gradient mb-10 text-center">Meus Projetos</h2>
            <div className="grid md:grid-cols-2 gap-14">
              {/* Projeto 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Projeto 1 - Malams Saloon</h3>
                <p className="text-gray-400 mb-4">Desenvolvimento de um sistema web para gerenciar agendamentos em salão de beleza, com foco em experiência do usuário e eficiência.</p>
                <a
                  href="https://github.com/marianneoliveirxr/projeto_malams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-500 transition-colors text-lg font-medium"
                >
                  Ver no GitHub
                </a>
              </div>

              {/* Projeto 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Projeto 2</h3>
                <p className="text-gray-400 mb-4">Uma aplicação web para otimizar o aprendizado e facilitar a gestão de estudos, com interface limpa e intuitiva.</p>
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-500 transition-colors text-lg font-medium"
                >
                  Ver Detalhes
                </a>
              </div>
            </div>
          </section>

          {/* Seção Contato */}
          <section id="contato" className="mb-28 text-center">
            <h2 className="text-4xl font-bold text-gradient mb-6">Contato</h2>
            <p className="text-2xl text-gray-400">Entre em contato pelo email: <span className="font-medium">marianneoliveirarodrigues@gmail.com</span></p>

            {/* Links para GitHub e LinkedIn */}
            <div className="mt-8 flex justify-center gap-14">
              <a
                href="https://github.com/marianneoliveirxr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-indigo-400 hover:text-indigo-500 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/marianne-oliveira-183208308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-indigo-400 hover:text-indigo-500 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}