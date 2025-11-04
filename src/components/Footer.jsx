export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-black/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <div className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-gray-100">EduBayte</div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Learn with empathy. Finish with confidence.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md items-center gap-3">
          <input type="email" required aria-label="Email address" placeholder="Enter your email for free trial" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
          <button type="submit" className="whitespace-nowrap rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400">Start Free</button>
        </form>
      </div>
    </footer>
  );
}
