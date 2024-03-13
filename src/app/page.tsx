import ThemeSwitcher from '@/components/common/ThemeSwitcher';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-slate-700">
      <div className="w-full container p-4 mx-auto">
        <div className="py-20 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center text-gray-800 dark:text-gray-100 font-bold">
            Next Themes + Tailwind Dark Mode
          </h1>
          <p className="italic text-2xl">with app-dir</p>

          <ThemeSwitcher />
        </div>
      </div>
    </main>
  );
}
