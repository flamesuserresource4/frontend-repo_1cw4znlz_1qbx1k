import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  const handleCTA = () => {
    const el = document.getElementById('features');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-black dark:text-gray-100">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-transparent bg-white/70 backdrop-blur dark:bg-black/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-500 to-orange-500 shadow-lg" />
            <span className="text-lg font-extrabold tracking-tight">EduBayte</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300 md:flex">
            <a href="#features" className="hover:text-teal-600 dark:hover:text-teal-300">Features</a>
            <a href="#stories" className="hover:text-teal-600 dark:hover:text-teal-300">Stories</a>
            <a href="#trial" className="hover:text-teal-600 dark:hover:text-teal-300">Free Trial</a>
          </nav>
          <button aria-label="Toggle dark mode" onClick={() => setDark((d) => !d)} className="rounded-xl border border-gray-200 bg-white/80 p-2 shadow-sm transition hover:bg-white dark:border-gray-700 dark:bg-gray-900">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main>
        <Hero onCTA={handleCTA} />

        <div id="features">
          <Features />
        </div>

        <div id="stories">
          <Testimonials />
        </div>

        {/* Immersive 3D preview teaser */}
        <section className="mx-auto max-w-6xl px-6 pb-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 p-[1px] shadow-lg">
            <div className="rounded-2xl bg-white p-6 dark:bg-gray-900">
              <div className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">3D Preview of a Task</div>
              <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">A photorealistic, Figma-style preview that makes goals feel tangible.</p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" alt="Sample task preview" className="h-64 w-full rounded-xl object-cover" />
                <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-4 shadow-sm dark:border-gray-700 dark:from-gray-900 dark:to-gray-900">
                  <div className="mb-2 text-sm font-semibold">Interactive Checklist</div>
                  <ul className="space-y-2">
                    {['Watch intro', 'Code along', 'Quiz 10 Qs', 'Book mentor review'].map((t, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <input id={`t-${i}`} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                        <label htmlFor={`t-${i}`} className="text-sm text-gray-700 dark:text-gray-200">{t}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <div id="trial">
        <Footer />
      </div>
    </div>
  );
}
