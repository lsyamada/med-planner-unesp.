import React from 'react';
import { BookOpen, CheckCircle, TrendingUp } from 'lucide-react';

export default function DashboardMed() {
  const temasUnesp = [
    { area: "Preventiva", tema: "Indicadores de Saúde", peso: "Altíssimo", status: "Revisar hoje" },
    { area: "Infectologia", tema: "Arboviroses (Dengue)", peso: "Altíssimo", status: "Em dia" },
    { area: "Cirurgia", tema: "ATLS: Trauma Abdominal", peso: "Alto", status: "R1 Pendente" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans text-slate-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold italic text-blue-900">MedPlanner UNESP 🩺</h1>
        <p className="text-slate-600 font-medium">Foco Residência Botucatu | Internato 6º Ano</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><TrendingUp className="text-blue-600" /> Prioridades</h2>
          <div className="space-y-3">
            {temasUnesp.map((item, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between">
                <div><p className="text-xs font-bold text-blue-700 uppercase">{item.area}</p><p className="font-semibold">{item.tema}</p></div>
                <div className="text-right"><p className="text-xs text-slate-500">Peso: {item.peso}</p><p className="text-sm font-bold text-orange-600">{item.status}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><CheckCircle /> Progresso</h2>
          <div className="space-y-4">
            <div><p className="text-blue-200 text-sm font-medium">Média Simulados</p><p className="text-5xl font-black">78%</p></div>
            <div className="w-full bg-blue-800 h-3 rounded-full overflow-hidden"><div className="bg-emerald-400 h-full w-[78%]"></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
