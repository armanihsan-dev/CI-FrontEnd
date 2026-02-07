import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.15),transparent_40%)]" />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#020617',
            color: '#fff',
            border: '1px solid #22d3ee',
          },
        }}
      />

      {/* NAVBAR */}
      <header className="sticky top-0 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Arman.dev
          </h2>

          <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-cyan-400 transition duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Full Stack <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              MERN Engineer
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            I build production-ready full-stack applications with modern UI,
            DevOps automation, and scalable backend architecture.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => toast.success('🚀 Projects dropping soon')}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold hover:scale-105 transition"
            >
              View Projects
            </button>

            <button
              onClick={() => toast('📧 arman@dev.com', { icon: '🔥' })}
              className="px-8 py-3 rounded-xl border border-white/20 hover:border-cyan-400 hover:bg-white/5 transition"
            >
              Hire Me
            </button>
          </div>

          {/* stats */}
          <div className="flex gap-10 mt-12 text-sm text-gray-400">
            <div>
              <p className="text-3xl font-bold text-white">15+</p>
              <p>Projects Built</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">MERN</p>
              <p>Specialist</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">CI/CD</p>
              <p>Automation</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE GLASS CARD */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">
              🚀 DevOps Live Status
            </h3>

            <div className="space-y-4 text-gray-300">
              <Status label="CI/CD Pipeline" status="Active" />
              <Status label="Server" status="Running" />
              <Status label="Docker" status="Healthy" />
              <Status label="Uptime" status="99.99%" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <Feature
          title="⚡ Blazing Fast"
          desc="Optimized React + Node apps with caching and performance tuning."
        />
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Tech <span className="text-cyan-400">Stack</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            'React',
            'Next.js',
            'Node.js',
            'Express',
            'MongoDB',
            'Docker',
            'CI/CD',
            'Tailwind',
            'TypeScript',
            'Redis',
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-10 border-t border-white/10">
        © 2026 Arman Ihsan — MERN + DevOps Engineer
      </footer>
    </div>
  );
};

const Status = ({ label, status }) => (
  <div className="flex justify-between border-b border-white/10 pb-2">
    <span>{label}</span>
    <span className="text-cyan-400 font-semibold">{status}</span>
  </div>
);

const Feature = ({ title, desc }) => (
  <div
    onClick={() => toast.success('✨ Clean scalable architecture')}
    className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-cyan-400 hover:scale-105 transition cursor-pointer"
  >
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{desc}</p>
  </div>
);

export default App;
