export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-[fadeIn_0.8s_ease-in-out]">
      {/* Ucapan Selamat Datang & Deskripsi Konsol */}
      <div>
        <h2 className="text-base font-light tracking-widest text-white uppercase">
          System Control Panel
        </h2>
        <p className="text-xs font-light text-neutral-500 mt-1">
          Monitor parameters, configure system settings, and manage real-time analytics pipelines.
        </p>
      </div>

      {/* Grid Kartu Metrik / Monitor Data Standar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-black border border-neutral-900 p-6 rounded relative overflow-hidden group hover:border-neutral-700 transition-colors">
          <p className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">// Active Pipelines</p>
          <p className="text-2xl font-light tracking-tight text-white mt-2">0.00</p>
          <span className="text-[10px] text-neutral-600 mt-1 block">Data streams connected</span>
        </div>

        {/* Card 2 */}
        <div className="bg-black border border-neutral-900 p-6 rounded relative overflow-hidden group hover:border-neutral-700 transition-colors">
          <p className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">// System Latency</p>
          <p className="text-2xl font-light tracking-tight text-emerald-400 mt-2">0 ms</p>
          <span className="text-[10px] text-neutral-600 mt-1 block">Optimal response link</span>
        </div>

        {/* Card 3 */}
        <div className="bg-black border border-neutral-900 p-6 rounded relative overflow-hidden group hover:border-neutral-700 transition-colors">
          <p className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">// Database Nodes</p>
          <p className="text-2xl font-light tracking-tight text-white mt-2">Offline</p>
          <span className="text-[10px] text-neutral-600 mt-1 block">Awaiting cluster initialization</span>
        </div>
      </div>

      {/* Area Kosong Besar untuk Visualisasi Data / Chart Masa Depan */}
      <div className="h-96 bg-black/40 border border-neutral-900 border-dashed rounded flex flex-col items-center justify-center p-6 text-center">
        <div className="text-xs font-mono text-neutral-600 tracking-widest uppercase">
          [ Standby Workspace Mode ]
        </div>
        <p className="text-xs font-light text-neutral-500 max-w-xs mt-2 leading-relaxed">
          The main execution interface is ready. Infiltrate data streams or initialize analytical engines here.
        </p>
      </div>
    </div>
  );
}