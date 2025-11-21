"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, Calendar, AlertCircle } from "lucide-react";

interface Asset {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: number;
  marketCap: string;
}

interface MarketDashboardProps {
  onAssetClick: (asset: Asset) => void;
  translations: any;
}

export default function MarketDashboard({ onAssetClick, translations }: MarketDashboardProps) {
  const [fearGreedIndex, setFearGreedIndex] = useState(65); // 0-100
  const [orderFlow, setOrderFlow] = useState({ buy: 0, sell: 0 });

  // Simular atualização do fluxo de ordens a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setOrderFlow({
        buy: Math.floor(Math.random() * 500) + 200,
        sell: Math.floor(Math.random() * 500) + 200,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const assets: Asset[] = [
    { symbol: "AAPL", name: "Apple", price: 178.45, change: 2.5, volume: 52300000, marketCap: "2.8T" },
    { symbol: "TSLA", name: "Tesla", price: 242.84, change: -3.2, volume: 98700000, marketCap: "771B" },
    { symbol: "AMZN", name: "Amazon", price: 156.78, change: 1.8, volume: 45200000, marketCap: "1.6T" },
    { symbol: "GOOGL", name: "Google", price: 141.23, change: 0.9, volume: 28900000, marketCap: "1.8T" },
    { symbol: "MSFT", name: "Microsoft", price: 378.91, change: 1.5, volume: 32100000, marketCap: "2.8T" },
    { symbol: "BTC", name: "Bitcoin", price: 43892, change: -2.7, volume: 28400000000, marketCap: "858B" },
    { symbol: "ETH", name: "Ethereum", price: 2287, change: 3.5, volume: 15200000000, marketCap: "275B" },
    { symbol: "NVDA", name: "NVIDIA", price: 495.22, change: 4.2, volume: 67800000, marketCap: "1.2T" },
    { symbol: "META", name: "Meta", price: 352.89, change: -1.1, volume: 23400000, marketCap: "895B" },
    { symbol: "NFLX", name: "Netflix", price: 487.33, change: 2.8, volume: 12300000, marketCap: "210B" },
  ];

  const economicEvents = [
    { date: "Today 14:30", event: "Fed Interest Rate Decision", impact: "high" },
    { date: "Tomorrow 08:30", event: "US Employment Report", impact: "high" },
    { date: "Jan 25", event: "Apple Q4 Earnings", impact: "medium" },
    { date: "Jan 26", event: "Tesla Earnings Call", impact: "medium" },
    { date: "Jan 28", event: "GDP Growth Data", impact: "high" },
  ];

  const getFearGreedLabel = (value: number) => {
    if (value < 20) return { label: "Extreme Fear", color: "text-red-600" };
    if (value < 40) return { label: "Fear", color: "text-orange-600" };
    if (value < 60) return { label: "Neutral", color: "text-gray-600" };
    if (value < 80) return { label: "Greed", color: "text-green-600" };
    return { label: "Extreme Greed", color: "text-emerald-600" };
  };

  const sentiment = getFearGreedLabel(fearGreedIndex);

  return (
    <div className="space-y-6">
      {/* Heatmap de Ativos */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 px-6">Market Heatmap</h2>
        <div className="px-6 grid grid-cols-2 md:grid-cols-5 gap-3">
          {assets.map((asset) => {
            const size = Math.log(asset.volume) / 2; // Tamanho baseado no volume
            const isPositive = asset.change > 0;
            const intensity = Math.min(Math.abs(asset.change) * 10, 100);
            
            return (
              <Card
                key={asset.symbol}
                onClick={() => onAssetClick(asset)}
                className={`p-4 cursor-pointer transition-all hover:scale-105 border-2 ${
                  isPositive
                    ? `bg-green-${Math.floor(intensity / 20) * 100 + 100} border-green-600`
                    : `bg-red-${Math.floor(intensity / 20) * 100 + 100} border-red-600`
                }`}
                style={{
                  minHeight: `${80 + size}px`,
                  backgroundColor: isPositive
                    ? `rgba(34, 197, 94, ${intensity / 100})`
                    : `rgba(239, 68, 68, ${intensity / 100})`,
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="font-bold text-lg text-gray-900">{asset.symbol}</p>
                    <p className="text-xs text-gray-700">{asset.name}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">${asset.price.toLocaleString()}</p>
                    <div className="flex items-center gap-1">
                      {isPositive ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      <span className="text-sm font-semibold">
                        {isPositive ? "+" : ""}{asset.change}%
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Widgets de Sentimento */}
      <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fluxo de Ordens */}
        <Card className="p-6 border-2 border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-gray-900" />
            <h3 className="font-bold text-gray-900">Order Flow (per minute)</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Buy Orders</span>
                <span className="font-bold text-green-600">{orderFlow.buy}</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all duration-500"
                  style={{ width: `${(orderFlow.buy / 700) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Sell Orders</span>
                <span className="font-bold text-red-600">{orderFlow.sell}</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 transition-all duration-500"
                  style={{ width: `${(orderFlow.sell / 700) * 100}%` }}
                />
              </div>
            </div>
            <div className="pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Total Activity: <span className="font-bold text-gray-900">{orderFlow.buy + orderFlow.sell}</span> orders/min
              </p>
            </div>
          </div>
        </Card>

        {/* Fear & Greed Index */}
        <Card className="p-6 border-2 border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-gray-900" />
            <h3 className="font-bold text-gray-900">Fear & Greed Index</h3>
          </div>
          <div className="flex flex-col items-center">
            {/* Velocímetro */}
            <div className="relative w-48 h-24 mb-4">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                {/* Arco de fundo */}
                <path
                  d="M 20 90 A 80 80 0 0 1 180 90"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                {/* Arco colorido */}
                <path
                  d="M 20 90 A 80 80 0 0 1 180 90"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeDasharray={`${(fearGreedIndex / 100) * 251} 251`}
                />
                {/* Gradiente */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="25%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#6b7280" />
                    <stop offset="75%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                {/* Ponteiro */}
                <line
                  x1="100"
                  y1="90"
                  x2={100 + 60 * Math.cos((Math.PI * (fearGreedIndex / 100 - 0.5)))}
                  y2={90 - 60 * Math.sin((Math.PI * (fearGreedIndex / 100 - 0.5)))}
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="100" cy="90" r="5" fill="#000" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-1">{fearGreedIndex}</p>
              <p className={`text-lg font-semibold ${sentiment.color}`}>{sentiment.label}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Calendário Econômico */}
      <div className="px-6">
        <Card className="p-6 border-2 border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-gray-900" />
            <h3 className="font-bold text-gray-900">Economic Calendar</h3>
          </div>
          <div className="space-y-3">
            {economicEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{event.event}</p>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
                <Badge
                  variant="secondary"
                  className={`${
                    event.impact === "high"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {event.impact === "high" ? "High Impact" : "Medium Impact"}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
