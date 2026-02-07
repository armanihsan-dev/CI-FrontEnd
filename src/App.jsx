import './App.css';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="h-screen bg-pink-200 text-pink-700 px-6 md:px-20 py-8">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0f172a',
            color: '#fff',
            border: '1px solid #22d3ee',
          },
          success: { iconTheme: { primary: '#22d3ee', secondary: '#0f172a' } },
        }}
      />
      {/* NAVBAR */}
      <header className="flex justify-between items-center mb-16">
        <h2 className="text-2xl font-bold text-cyan-400">Arman.dev</h2>

        <nav className="flex gap-6 text-gray-300 font-medium">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            Projects
          </a>
          <a href="#" className="hover:text-white transition">
            Skills
          </a>

          <a
            href="#"
            className="hover:text-white transition flex items-center gap-2"
          >
            Blog
            <span className="bg-cyan-500 text-xs px-2 py-0.5 rounded-full text-black font-bold">
              New
            </span>
          </a>

          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Building Scalable <span className="text-cyan-400">Full-Stack</span>{' '}
            Applications
          </h1>

          <p className="text-gray-400 mb-8 max-w-lg">
            MERN Stack Developer crafting production-ready web apps with CI/CD,
            Docker, and modern architecture.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => toast.success('🎨 Projects section coming soon!')}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold text-black transition"
            >
              View Projects
            </button>

            <button
              onClick={() => toast('📧 Contact: arman@dev.com', { icon: '👋' })}
              className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl w-full max-w-sm">
            <h3 className="text-xl font-semibold mb-4">
              🚀 Live DevOps Status
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>CI/CD Pipeline: Active</p>
              <p>Server: Running</p>
              <p>Docker: Healthy</p>
              <p>Uptime: 99.99%</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 mb-20">
        <div
          onClick={() => toast.success('⚡ Lightning fast with React + Vite!')}
          className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500 transition cursor-pointer"
        >
          <h3 className="text-lg font-semibold mb-2">⚡ Fast Performance</h3>
          <p className="text-gray-400">
            Optimized full-stack apps with caching & modern architecture.
          </p>
        </div>

        <div
          onClick={() => toast.success('🔐 Security first approach!')}
          className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500 transition cursor-pointer"
        >
          <h3 className="text-lg font-semibold mb-2">🔐 Secure Backend</h3>
          <p className="text-gray-400">
            JWT auth, encryption, secure APIs & production practices.
          </p>
        </div>

        <div
          onClick={() => toast.success('🚀 Automated deployments active!')}
          className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500 transition cursor-pointer"
        >
          <h3 className="text-lg font-semibold mb-2">🚀 CI/CD Ready</h3>
          <p className="text-gray-400">
            Auto deployment using GitHub webhooks, Docker & VPS.
          </p>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Frontend */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl font-semibold mb-4">🎨 Frontend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>React.js</li>
              <li>Next.js</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl font-semibold mb-4">🖥️ Backend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>Authentication (JWT)</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* DevOps */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl font-semibold mb-4">🚀 DevOps</h3>
            <ul className="space-y-2 text-gray-400">
              <li>CI/CD Pipelines</li>
              <li>Docker</li>
              <li>GitHub Actions</li>
              <li>Linux/VPS</li>
              <li>Nginx</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl font-semibold mb-4">🛠️ Tools</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Figma</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 pt-6 text-center text-gray-500">
        <p>© 2026 Arman Ihsan — Full Stack Engineer</p>
      </footer>
    </div>
  );
};

export default App;
