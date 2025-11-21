"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  X, Maximize2, TrendingUp, TrendingDown, BarChart3, 
  LineChart, Activity, Volume2, Layers, Settings 
} from "lucide-react";

interface CandleData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface TradingTerminalProps {
  asset: any;
  onClose: () => void;
  translations: any;
}

export default function TradingTerminal({ asset, onClose, translations }: TradingTerminalProps) {
  const [chartType, setChartType] = useState<"candlestick" | "line" | "bar">("candlestick");
  const [timeframe, setTimeframe] = useState("1H");
  const [indicators, setIndicators] = useState<string[]>(["RSI", "MACD"]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [candleData, setCandleData] = useState<CandleData[]>([]);
  const [orderBook, setOrderBook] = useState({ bids: [] as any[], asks: [] as any[] });
  const [trades, setTrades] = useState<any[]>([]);

  // Gerar dados de candles simulados
  useEffect(() => {
    const generateCandles = () => {
      const candles: CandleData[] = [];
      let price = asset.price;
      
      for (let i = 0; i < 50; i++) {
        const open = price;
        const change = (Math.random() - 0.5) * 10;
        const close = open + change;
        const high = Math.max(open, close) + Math.random() * 5;
        const low = Math.min(open, close) - Math.random() * 5;
        const volume = Math.random() * 1000000;
        
        candles.push({
          time: `${i}m`,
          open,
          high,
          low,
          close,
          volume,
        });
        
        price = close;
      }
      
      return candles;
    };

    setCandleData(generateCandles());

    // Atualizar a cada 5 segundos
    const interval = setInterval(() => {
      setCandleData(prev => {
        const newCandles = [...prev];
        const lastCandle = newCandles[newCandles.length - 1];
        const change = (Math.random() - 0.5) * 2;
        
        newCandles[newCandles.length - 1] = {
          ...lastCandle,
          close: lastCandle.close + change,
          high: Math.max(lastCandle.high, lastCandle.close + change),
          low: Math.min(lastCandle.low, lastCandle.close + change),
        };
        
        return newCandles;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [asset]);

  // Gerar order book simulado
  useEffect(() => {
    const generateOrderBook = () => {
      const bids = [];
      const asks = [];
      
      for (let i = 0; i < 10; i++) {
        bids.push({
          price: asset.price - (i + 1) * 0.5,
          amount: Math.random() * 100,
          total: Math.random() * 10000,
        });
        asks.push({
          price: asset.price + (i + 1) * 0.5,
          amount: Math.random() * 100,
          total: Math.random() * 10000,
        });
      }
      
      setOrderBook({ bids, asks });
    };

    generateOrderBook();
    const interval = setInterval(generateOrderBook, 2000);
    return () => clearInterval(interval);
  }, [asset]);

  // Gerar trades simulados
  useEffect(() => {
    const generateTrade = () => {
      const newTrade = {
        time: new Date().toLocaleTimeString(),
        price: asset.price + (Math.random() - 0.5) * 2,
        amount: Math.random() * 10,
        side: Math.random() > 0.5 ? "buy" : "sell",
      };
      
      setTrades(prev => [newTrade, ...prev].slice(0, 20));
    };

    const interval = setInterval(generateTrade, 1000);
    return () => clearInterval(interval);
  }, [asset]);

  const renderCandlestickChart = () => {
    const maxPrice = Math.max(...candleData.map(c => c.high));
    const minPrice = Math.min(...candleData.map(c => c.low));
    const priceRange = maxPrice - minPrice;
    const chartHeight = 300;
    const chartWidth = 800;
    const candleWidth = chartWidth / candleData.length;

    return (
      <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full">
        {/* Grid */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="0"
            y1={i * (chartHeight / 4)}
            x2={chartWidth}
            y2={i * (chartHeight / 4)}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {/* Candles */}
        {candleData.map((candle, i) => {
          const x = i * candleWidth + candleWidth / 2;
          const isGreen = candle.close > candle.open;
          const bodyTop = Math.min(candle.open, candle.close);
          const bodyBottom = Math.max(candle.open, candle.close);
          
          const yHigh = chartHeight - ((candle.high - minPrice) / priceRange) * chartHeight;
          const yLow = chartHeight - ((candle.low - minPrice) / priceRange) * chartHeight;
          const yBodyTop = chartHeight - ((bodyTop - minPrice) / priceRange) * chartHeight;
          const yBodyBottom = chartHeight - ((bodyBottom - minPrice) / priceRange) * chartHeight;

          return (
            <g key={i}>
              {/* Wick */}
              <line
                x1={x}
                y1={yHigh}
                x2={x}
                y2={yLow}
                stroke={isGreen ? "#22c55e" : "#ef4444"}
                strokeWidth="1"
              />
              {/* Body */}
              <rect
                x={x - candleWidth / 4}
                y={yBodyTop}
                width={candleWidth / 2}
                height={Math.max(yBodyBottom - yBodyTop, 1)}
                fill={isGreen ? "#22c55e" : "#ef4444"}
              />
            </g>
          );
        })}
      </svg>
    );
  };

  return (
    <div className={`fixed inset-0 bg-black/95 z-50 ${isFullscreen ? "" : "p-6"}`}>
      <div className={`${isFullscreen ? "h-full" : "h-full max-w-7xl mx-auto"} bg-white rounded-xl overflow-hidden flex flex-col`}>
        {/* Header */}
        <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold">{asset.symbol}</h2>
              <p className="text-gray-400 text-sm">{asset.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">${asset.price.toFixed(2)}</span>
              <div className={`flex items-center gap-1 ${asset.change > 0 ? "text-green-400" : "text-red-400"}`}>
                {asset.change > 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                <span className="font-semibold">{asset.change > 0 ? "+" : ""}{asset.change}%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="text-white hover:bg-gray-800"
            >
              <Maximize2 className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Main Chart Area */}
          <div className="flex-1 flex flex-col p-4 overflow-y-auto">
            {/* Chart Controls */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant={chartType === "candlestick" ? "default" : "outline"}
                  onClick={() => setChartType("candlestick")}
                  className="rounded-lg"
                >
                  <BarChart3 className="w-4 h-4 mr-1" />
                  Candlestick
                </Button>
                <Button
                  size="sm"
                  variant={chartType === "line" ? "default" : "outline"}
                  onClick={() => setChartType("line")}
                  className="rounded-lg"
                >
                  <LineChart className="w-4 h-4 mr-1" />
                  Line
                </Button>
                <Button
                  size="sm"
                  variant={chartType === "bar" ? "default" : "outline"}
                  onClick={() => setChartType("bar")}
                  className="rounded-lg"
                >
                  <Activity className="w-4 h-4 mr-1" />
                  Bar
                </Button>
              </div>
              <div className="flex items-center gap-2">
                {["1M", "5M", "15M", "1H", "4H", "1D"].map((tf) => (
                  <Button
                    key={tf}
                    size="sm"
                    variant={timeframe === tf ? "default" : "outline"}
                    onClick={() => setTimeframe(tf)}
                    className="rounded-lg"
                  >
                    {tf}
                  </Button>
                ))}
              </div>
            </div>

            {/* Chart */}
            <Card className="flex-1 p-4 border-2 border-gray-200 mb-4">
              <div className="h-full">
                {renderCandlestickChart()}
              </div>
            </Card>

            {/* Indicators */}
            <div className="flex items-center gap-2 mb-4">
              <Button size="sm" variant="outline" className="rounded-lg">
                <Settings className="w-4 h-4 mr-1" />
                Add Indicator
              </Button>
              {indicators.map((ind) => (
                <Badge key={ind} variant="secondary" className="bg-gray-100 text-gray-900">
                  {ind}
                </Badge>
              ))}
            </div>

            {/* Volume Chart */}
            <Card className="p-4 border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Volume2 className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-semibold text-gray-900">Volume</span>
              </div>
              <div className="flex items-end gap-1 h-20">
                {candleData.slice(-20).map((candle, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gray-300 rounded-t"
                    style={{ height: `${(candle.volume / 1000000) * 100}%` }}
                  />
                ))}
              </div>
            </Card>
          </div>

          {/* Right Sidebar - Order Book & Trades */}
          <div className="w-80 border-l border-gray-200 flex flex-col">
            {/* Order Book */}
            <div className="flex-1 p-4 border-b border-gray-200 overflow-y-auto">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Order Book
              </h3>
              <div className="space-y-1">
                {/* Asks (Sell Orders) */}
                {orderBook.asks.slice().reverse().map((ask, i) => (
                  <div key={i} className="flex items-center justify-between text-xs relative">
                    <div
                      className="absolute inset-0 bg-red-100"
                      style={{ width: `${(ask.total / 50000) * 100}%` }}
                    />
                    <span className="relative z-10 text-red-600 font-mono">${ask.price.toFixed(2)}</span>
                    <span className="relative z-10 text-gray-600 font-mono">{ask.amount.toFixed(2)}</span>
                  </div>
                ))}
                
                {/* Current Price */}
                <div className="py-2 text-center font-bold text-lg border-y-2 border-gray-300">
                  ${asset.price.toFixed(2)}
                </div>
                
                {/* Bids (Buy Orders) */}
                {orderBook.bids.map((bid, i) => (
                  <div key={i} className="flex items-center justify-between text-xs relative">
                    <div
                      className="absolute inset-0 bg-green-100"
                      style={{ width: `${(bid.total / 50000) * 100}%` }}
                    />
                    <span className="relative z-10 text-green-600 font-mono">${bid.price.toFixed(2)}</span>
                    <span className="relative z-10 text-gray-600 font-mono">{bid.amount.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Time & Sales (Tape) */}
            <div className="flex-1 p-4 overflow-y-auto">
              <h3 className="font-bold text-gray-900 mb-3">Time & Sales</h3>
              <div className="space-y-1">
                {trades.map((trade, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-mono">{trade.time}</span>
                    <span className={`font-mono font-semibold ${trade.side === "buy" ? "text-green-600" : "text-red-600"}`}>
                      ${trade.price.toFixed(2)}
                    </span>
                    <span className="text-gray-600 font-mono">{trade.amount.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trading Actions */}
            <div className="p-4 border-t border-gray-200 space-y-2">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg">
                Buy {asset.symbol}
              </Button>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg">
                Sell {asset.symbol}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
