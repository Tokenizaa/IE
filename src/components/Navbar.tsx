/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Scale,
  LayoutDashboard,
  Search,
  MapPin,
  GitCompare,
  FileSpreadsheet,
  BookOpen,
  Database,
  CheckCircle2
} from 'lucide-react';

export type TabType = 'overview' | 'investigation' | 'territory' | 'comparisons' | 'reports' | 'sources' | 'docs';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  statusInfo: {
    cobertura: string;
    engine: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, statusInfo }) => {
  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: LayoutDashboard },
    { id: 'investigation', label: 'Investigação Eleitoral', icon: Search },
    { id: 'territory', label: 'Análise Territorial & Mapa', icon: MapPin },
    { id: 'comparisons', label: 'Comparações & Regras', icon: GitCompare },
    { id: 'reports', label: 'Relatórios & IA', icon: FileSpreadsheet },
    { id: 'sources', label: 'Fontes TSE', icon: Database },
    { id: 'docs', label: 'Cadernos Canônicos', icon: BookOpen },
  ];

  return (
    <aside className="w-64 lg:w-72 h-screen sticky top-0 shrink-0 border-r border-slate-800 bg-slate-900/95 backdrop-blur flex flex-col justify-between z-50">
      {/* Brand & Identity Header */}
      <div className="p-5 border-b border-slate-800 space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <div className="h-full w-full bg-slate-950 rounded-[7px] flex items-center justify-center">
              <Scale className="h-4 w-4 text-emerald-400" />
            </div>
          </div>
          <div className="min-w-0">
            <h1 className="text-base font-bold text-white tracking-tight truncate">
              Inteligência Eleitoral
            </h1>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
              <span>Fase 3</span>
              <span aria-hidden="true">·</span>
              <span>Em validação</span>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Plataforma Analítica Baseada em Dados Oficiais do TSE e Fórmulas Verificáveis
        </p>
      </div>

      {/* Vertical Navigation Items */}
      <nav
        aria-label="Navegação Principal"
        className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1.5"
      >
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors text-left ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Audit & System Status Footer */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/60 space-y-2.5 text-xs">
        <div className="text-[10px] font-semibold tracking-wider text-emerald-400 font-mono">
          SISTEMA OFICIAL DE INTELIGÊNCIA ELEITORAL
        </div>
        <div className="space-y-1 text-[11px] text-slate-400">
          <div className="flex items-center justify-between gap-2">
            <span>Cobertura:</span>
            <strong className="text-slate-200 font-medium truncate">{statusInfo.cobertura}</strong>
          </div>
          <div className="flex items-center justify-between gap-2 font-mono text-[10px]">
            <span>Motor:</span>
            <span className="text-slate-300 truncate">{statusInfo.engine}</span>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-amber-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">Validação metodológica em andamento</span>
        </div>
      </div>
    </aside>
  );
};
