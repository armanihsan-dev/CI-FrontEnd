import './App.css';

const App = () => {
  return (
    <div className="container">
      {/* NAVBAR */}
      <header className="navbar">
        <h2 className="logo">Arman.dev</h2>
        <nav>
          <a href="#">Homesssss</a>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Building Scalable <span>Full-Stack</span> Applications
          </h1>
          <p>
            MERN Stack Developer crafting production-ready web apps with CI/CD,
            Docker, and modern architecture.
          </p>

          <div className="buttons">
            <button className="btn-primary">View Projects</button>
            <button className="btn-outline">Hire Me</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="card">
            <h3>🚀 Live DevOps Status</h3>
            <p>CI/CD Pipeline: Active</p>
            <p>Server: Running</p>
            <p>Docker: Healthy</p>
            <p>Uptime: 99.99%</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">
          <h3>⚡ Fast Performance</h3>
          <p>Optimized full-stack apps with caching & modern architecture.</p>
        </div>

        <div className="feature">
          <h3>🔐 Secure Backend</h3>
          <p>JWT auth, encryption, secure APIs & production practices.</p>
        </div>

        <div className="feature">
          <h3>🚀 CI/CD Ready</h3>
          <p>Auto deployment using GitHub webhooks, Docker & VPS.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Arman Ihsan — Full Stack Engineer</p>
      </footer>
    </div>
  );
};

export default App;
