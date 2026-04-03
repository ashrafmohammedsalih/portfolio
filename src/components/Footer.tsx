export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="mx-auto max-w-4xl flex items-center justify-between">
        <span className="text-sm font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500">0X18</span>
        <p className="text-sm text-white/30">
          &copy; {new Date().getFullYear()} Ashraf Mohamed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
