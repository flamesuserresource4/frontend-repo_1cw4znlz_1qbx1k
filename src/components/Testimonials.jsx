import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const data = [
  {
    name: 'Aisha K',
    title: 'Data Analyst (Switched in 4 months)',
    avatar: 'https://i.pravatar.cc/150?img=5',
    quote:
      'The weekly tasks from YouTube plus mentor verification kept me accountable. I earned back 20% and finally shipped my portfolio.',
  },
  {
    name: 'Rahul M',
    title: 'SDE-1, Fintech',
    avatar: 'https://i.pravatar.cc/150?img=11',
    quote:
      'Daily checklists and mock quizzes were game-changers. The progress wheel and streaks made it addictive in a healthy way.',
  },
  {
    name: 'Emily R',
    title: 'GATE Aspirant',
    avatar: 'https://i.pravatar.cc/150?img=31',
    quote:
      'Loved the empathic design. I never felt alone — mentors were just a click away and rebates kept me motivated.',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % data.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Learner stories</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Real people, real outcomes — and fewer lonely nights studying.</p>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="rounded-2xl border border-teal-100 bg-white p-6 shadow-lg dark:border-teal-900/40 dark:bg-gray-900">
            <div className="flex items-center gap-4">
              <img src={data[index].avatar} alt={`${data[index].name} avatar`} className="h-14 w-14 rounded-full object-cover" />
              <div>
                <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{data[index].name}</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">{data[index].title}</div>
              </div>
              <div className="ml-auto flex items-center gap-1 text-orange-500" aria-label="Rating 5 out of 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f97316" stroke="#f97316" />
                ))}
              </div>
            </div>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-200">“{data[index].quote}”</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 flex justify-center gap-2">
          {data.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-2 w-6 rounded-full transition ${index === i ? 'bg-teal-500' : 'bg-teal-200 dark:bg-teal-900'}`} aria-label={`Go to testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
