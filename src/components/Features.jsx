import { useEffect, useMemo, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Lock, Users, BadgePercent } from 'lucide-react';

function FlipTaskCard({ title, items }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="[perspective:1000px]" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className={`relative h-56 w-full rounded-2xl bg-gradient-to-br from-white to-teal-50 shadow-lg transition-transform duration-500 [transform-style:preserve-3d] dark:from-gray-900 dark:to-teal-950 ${hover ? '[transform:rotateY(180deg)]' : ''}`}>
        <div className="absolute inset-0 p-5 [backface-visibility:hidden]">
          <div className="mb-3 flex items-center gap-2 text-teal-700 dark:text-teal-300">
            <CheckCircle2 />
            <h4 className="font-semibold">{title}</h4>
          </div>
          <ul className="space-y-2 text-sm">
            {items.slice(0, 4).map((it, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                <span className="h-2 w-2 rounded-full bg-teal-500" /> {it}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">Hover to see progress</p>
        </div>
        <div className="absolute inset-0 rotate-y-180 rounded-2xl p-5 [backface-visibility:hidden]">
          <div className="flex h-full flex-col justify-between">
            <div>
              <h4 className="font-semibold text-teal-700 dark:text-teal-300">Progress</h4>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">Keep streaks alive and unlock rewards.</p>
            </div>
            <ProgressWheel value={68} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressWheel({ value }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="relative mx-auto h-28 w-28">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r={radius} stroke="#e5e7eb" strokeWidth="10" fill="transparent" />
        <motion.circle cx="50" cy="50" r={radius} stroke="url(#grad)" strokeWidth="10" fill="transparent" strokeLinecap="round" initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }} animate={{ strokeDashoffset: offset }} transition={{ duration: 1.2 }} />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center text-sm font-semibold text-gray-900 dark:text-gray-100">{value}%</div>
    </div>
  );
}

function SkeuoBadge() {
  return (
    <div className="relative mx-auto w-full max-w-[260px] rounded-2xl border border-orange-200 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(255,255,255,0.7))] p-4 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.05),inset_-6px_-6px_12px_rgba(255,255,255,0.6),0_10px_25px_rgba(249,115,22,0.25)] backdrop-blur dark:border-orange-900/40 dark:bg-[linear-gradient(145deg,rgba(17,24,39,0.9),rgba(17,24,39,0.7))]">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg"> <Lock /> </div>
        <div>
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Unlock up to 30% Rebate</div>
          <div className="text-xs text-gray-600 dark:text-gray-300">Finish your roadmap, verify with a mentor, and claim.</div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const ref = useMemo(() => ({ current: null }), []);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const sampleTasks = [
    'Watch: React hooks in 20 minutes',
    'Practice: 10 array problems',
    'Build: Todo app with filters',
    'Revise: Big-O cheat sheet',
    'Mock: 30-min timed quiz',
  ];

  return (
    <section ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Everything you need to stay consistent</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Flexible roadmaps, interactive tasks, mentor guidance, and motivational rebates — all in one place.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Roadmaps */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.05 }} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-teal-100 dark:bg-gray-900 dark:ring-teal-900/40">
          <div className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">Roadmaps</div>
          <div className="relative h-40 w-full">
            {/* timeline visual */}
            <div className="absolute left-6 top-2 h-36 w-1 rounded bg-teal-100 dark:bg-teal-900/40" />
            {[1, 2, 3, 4].map((s, i) => (
              <motion.div key={i} initial={{ x: -10, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.1 * i }} className="absolute left-2 right-2 flex items-center gap-3 rounded-xl border border-teal-100 bg-teal-50/60 px-3 py-2 shadow-sm backdrop-blur dark:border-teal-900/40 dark:bg-teal-950/40" style={{ top: `${i * 24 + 8}px` }}>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-teal-500 text-xs font-bold text-white">{i + 1}</span>
                <span className="text-xs font-medium text-gray-800 dark:text-gray-100">Milestone {i + 1}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">Clear milestones with an end-date that keeps you honest.</p>
        </motion.div>

        {/* Tasks interactive demo */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.1 }} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-teal-100 dark:bg-gray-900 dark:ring-teal-900/40">
          <div className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">Tasks</div>
          <FlipTaskCard title="Today" items={sampleTasks} />
        </motion.div>

        {/* Mentors */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.15 }} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-teal-100 dark:bg-gray-900 dark:ring-teal-900/40">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-teal-700 dark:text-teal-300">Mentors</div>
            <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">1-on-1</span>
          </div>
          <div className="mb-3 flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i + 20}`} alt={`Mentor ${i}`} className="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-gray-800" />
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Book a quick 15-min verification or a 45-min deep dive.</p>
          <button className="mt-4 w-full rounded-xl border border-teal-200 bg-teal-50/50 px-4 py-2 text-sm font-semibold text-teal-700 transition hover:bg-teal-100 dark:border-teal-900/40 dark:bg-teal-950/30 dark:text-teal-300">Find a mentor</button>
        </motion.div>

        {/* Rebates skeuo badge + wheel */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.2 }} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-teal-100 dark:bg-gray-900 dark:ring-teal-900/40">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-teal-700 dark:text-teal-300">
            <BadgePercent /> Rebates
          </div>
          <SkeuoBadge />
          <div className="mt-6 grid place-items-center">
            <ProgressWheel value={30} />
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">Complete modules, verify, and claim your reward.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
