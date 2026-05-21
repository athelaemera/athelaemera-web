import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white font-sans antialiased">
      {/* 1. SIDEBAR MINIMALIS */}
      <aside className="w-64 border-r border-neutral-900 bg-black flex flex-col justify-between p-6 fixed h-full">
        <div className="space-y-8">
          {/* Brand Identity */}
          <Link href="/dashboard" className="flex items-center space-x-3 group">
            <div className="relative w-8 h-8">
              <Image src="/logo.svg" alt="Athelaemera" fill className="object-contain invert" />
            </div>
            <span className="text-xs font-light tracking-[0.3em] uppercase text-neutral-400 group-hover:text-white transition-colors">
              Athelaemera
            </span>
          </Link>

          {/* Navigation Items */}
          <nav className="flex flex-col space-y-1">
            <Link href="/dashboard" className="text-xs font-light tracking-wider text-white bg-neutral-900/50 px-4 py-3 rounded border border-neutral-800/40 block">
              // Overview
            </Link>
            <button className="text-xs font-light tracking-wider text-neutral-500 hover:text-neutral-300 text-left px-4 py-3 rounded block transition-colors" disabled>
              // Analytics Terminal
            </button>
            <button className="text-xs font-light tracking-wider text-neutral-500 hover:text-neutral-300 text-left px-4 py-3 rounded block transition-colors" disabled>
              // Database Registry
            </button>
          </nav>
        </div>

        {/* System Status Indicator */}
        <div className="flex items-center space-x-2 px-4 py-2 bg-neutral-950 border border-neutral-900 rounded">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
            Core Engine Live
          </span>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA CONTAINER */}
      <div className="pl-64 w-full flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="h-16 border-b border-neutral-900 bg-black/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-50">
          <div className="text-xs font-light tracking-widest text-neutral-400 uppercase">
            Workspace / Central Console
          </div>
          <div className="text-[11px] font-mono text-neutral-500">
            SYS_REF: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </div>
        </header>

        {/* Dynamic Pages Workspace */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}