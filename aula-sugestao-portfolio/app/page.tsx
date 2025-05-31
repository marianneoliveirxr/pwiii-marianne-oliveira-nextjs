import Head from 'next/head';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-purple-50 via-pink-100 to-purple-300">
        <Navbar />
        <main className="p-8">
          {/* Seção Sobre */}
          <section id="sobre" className="mb-20 text-center">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Olá, Sou a Marianne Oliveira</h1>
            <p className="text-xl text-gray-700">Desenvolvedora apaixonada por criar experiências digitais incríveis.</p>
          </section>

          {/* Seção Projetos */}
          <section id="projetos" className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Meus Projetos</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {/* Projeto 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Projeto 1 - Malams Saloon</h3>
                <p className="text-gray-600 mb-4">Desenvolvimento de um sistema web para gerenciar e realizar agendamentos de salão de beleza online.</p>
                <a
                  href="https://github.com/marianneoliveirxr/projeto_malams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 transition-colors text-lg font-medium"
                >
                  Ver no GitHub
                </a>
              </div>

              {/* Projeto 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Projeto 2</h3>
                <p className="text-gray-600 mb-4">Uma aplicação web interativa focada em otimizar o processo de aprendizado.</p>
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-800 transition-colors text-lg font-medium"
                >
                  Ver Detalhes
                </a>
              </div>
            </div>
          </section>

          {/* Seção Contato */}
          <section id="contato" className="mb-20 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contato</h2>
            <p className="text-xl text-gray-700">Você pode me encontrar no email: <span className="font-medium">marianneoliveirarodrigues@gmail.com</span></p>

            {/* Links para GitHub e LinkedIn */}
            <div className="mt-8 flex justify-center gap-10">
              <a
                href="https://github.com/marianneoliveirxr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-600 hover:text-purple-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/marianne-oliveira-183208308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-600 hover:text-purple-800 transition-colors"
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
