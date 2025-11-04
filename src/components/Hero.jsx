import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star, Play, Calendar } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const goals = [
  { key: 'it', title: 'Start Your IT Roadmap', subtitle: 'From zero to job-ready with guided milestones' },
  { key: 'ds', title: 'Master Data Structures', subtitle: 'Ace coding interviews with daily practice' },
  { key: 'cloud', title: 'Launch Your Cloud Career', subtitle: 'Hands-on AWS/GCP tracks with real labs' },
  { key: 'exam', title: 'Crack Competitive Exams', subtitle: 'Timed drills, doubt support, verified prep' },
];

export default function Hero({ onCTA }) {
  const personalized = useMemo(() => {
    const idx = Math.floor((Date.now() / (1000 * 15)) % goals.length);
    return goals[idx];
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-teal-50 to-white dark:from-[#071a19] dark:to-[#020908]">
      <div className="absolute inset-0 opacity-70">
        <Spline
          scene="https://prod.spline.design/1O8qVb2K5vXzDnc9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-black/50 dark:via-black/40 dark:to-black/70" />

      {/* Floating skill icons (experimental navigation) */}
      <div className="absolute inset-0" aria-hidden>
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }} className="hidden md:block">
          <motion.div className="absolute top-24 left-10 flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-lg backdrop-blur dark:bg-black/40"
            whileHover={{ scale: 1.05 }}>
            <Rocket size={18} className="text-teal-600" />
            <span className="text-xs font-medium text-gray-800 dark:text-gray-100">Web Dev</span>
          </motion.div>
          <motion.div className="absolute top-48 right-16 flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-lg backdrop-blur dark:bg-black/40"
            whileHover={{ scale: 1.05 }}>
            <Star size={18} className="text-orange-500" />
            <span className="text-xs font-medium text-gray-800 dark:text-gray-100">DSA</span>
          </motion.div>
          <motion.div className="absolute bottom-24 left-20 flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-lg backdrop-blur dark:bg-black/40"
            whileHover={{ scale: 1.05 }}>
            <Calendar size={18} className="text-teal-600" />
            <span className="text-xs font-medium text-gray-800 dark:text-gray-100">Exams</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center md:pt-28 lg:pt-32">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm backdrop-blur dark:border-teal-800/50 dark:bg-black/40 dark:text-teal-300">
          <Play size={14} /> {personalized.subtitle}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 bg-gradient-to-br from-teal-800 via-teal-600 to-orange-500 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
          Self-Learn Smarter: Skills Without the Grind
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 max-w-2xl text-balance text-base text-gray-700 dark:text-gray-300 md:text-lg">
          EduBayte empowers self-learners with flexible roadmaps, daily/weekly tasks sourced from top content, 1-on-1 mentor sessions, and up-to-30% motivational rebates when you finish.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <button onClick={onCTA} className="rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-3 text-white shadow-lg shadow-teal-500/30 transition hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:focus:ring-offset-black">
            Claim Your Roadmap
          </button>
          <div className="relative rounded-xl border border-orange-200 bg-white/80 px-4 py-3 text-left shadow dark:border-orange-900/40 dark:bg-black/40">
            <div className="text-xs font-semibold text-orange-600 dark:text-orange-300">AI Suggestion</div>
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{personalized.title}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
