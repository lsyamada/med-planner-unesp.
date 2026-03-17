import React from 'react';
import { BookOpen, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

export default function DashboardMed() {
  const temasUnesp = [
    { area: "Preventiva", tema: "Indicadores de Saúde", peso: "Altíssimo", status: "Revisar hoje" },
    { area: "Infectologia", tema: "Arboviroses (Dengue)", peso: "Altíssimo", status: "Em dia" },
    { area: "Cirurgia", tema: "ATLS: Trauma Abdominal", peso: "Alto", status: "R1 Pendente" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">MedPlanner UNESP 🩺</h1>
        <p className="text-slate-600">Internato 6º Ano - Foco Botucatu</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Painel de Incidência */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-blue-600" />
            <h2 className="text-xl font-semibold">Prioridades da Semana</h2>
          </div>
          
          <div className="space-y-4">
            {temasUnesp.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase">{item.area}</span>
                  <h3 className="font-medium text-slate-800">{item.tema}</h3>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-slate-500">Peso: {item.peso}</span>
                  <span className={`text-sm font-bold ${item.status === 'Revisar hoje' ? 'text-orange-500' : 'text-emerald-500'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resumo de Desempenho */}
        <div className="bg-unesp-blue text-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle size={20} /> Seu Progresso
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-blue-100 text-sm">Média em Simulados</p>
              <p className="text-4xl font-bold">78%</p>
            </div>
            <div className="w-full bg-blue-900/50 h-2 rounded-full">
              <div className="bg-white h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
            <p className="text-xs text-blue-200 italic">"Foco em Preventiva para subir para 85%!"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
