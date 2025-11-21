"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, Send, TrendingUp, TrendingDown, AlertTriangle, 
  CheckCircle, Info, X, Sparkles 
} from "lucide-react";

interface AIAssistantProps {
  asset?: any;
  translations: any;
  onClose?: () => void;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  type?: "analysis" | "pattern" | "news" | "risk";
}

export default function AIAssistant({ asset, translations, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm NEUROX-AI Pro, your financial assistant. I can help you with technical analysis, market insights, and risk management. How can I assist you today?",
      type: "analysis",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const analyzeAsset = (assetData: any) => {
    const analysis = {
      technical: {
        trend: assetData.change > 0 ? "Bullish" : "Bearish",
        strength: Math.abs(assetData.change) > 2 ? "Strong" : "Moderate",
        support: (assetData.price * 0.95).toFixed(2),
        resistance: (assetData.price * 1.05).toFixed(2),
      },
      patterns: [
        "Ascending Triangle forming on 4H chart",
        "RSI showing bullish divergence",
        "Volume increasing on upward moves",
      ],
      signals: {
        rsi: Math.random() > 0.5 ? "Overbought (72)" : "Neutral (55)",
        macd: Math.random() > 0.5 ? "Bullish crossover" : "Bearish crossover",
        ma: "Price above 50-day MA",
      },
    };

    return analysis;
  };

  const generateResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();

    // Análise Técnica
    if (lowerMessage.includes("analyze") || lowerMessage.includes("analysis")) {
      if (asset) {
        const analysis = analyzeAsset(asset);
        return {
          role: "assistant",
          content: `📊 **Technical Analysis for ${asset.symbol}**\n\n**Current Trend:** ${analysis.technical.trend} (${analysis.technical.strength})\n\n**Key Levels:**\n• Support: $${analysis.technical.support}\n• Resistance: $${analysis.technical.resistance}\n\n**Indicators:**\n• RSI: ${analysis.signals.rsi}\n• MACD: ${analysis.signals.macd}\n• Moving Average: ${analysis.signals.ma}\n\n**Patterns Detected:**\n${analysis.patterns.map(p => `• ${p}`).join("\n")}\n\n⚠️ **Risk Assessment:** Medium volatility expected. Consider using stop-loss at $${analysis.technical.support}.`,
          type: "analysis",
        };
      }
      return {
        role: "assistant",
        content: "Please select an asset from the market to analyze. I'll provide detailed technical analysis including support/resistance levels, indicators, and pattern recognition.",
        type: "analysis",
      };
    }

    // Padrões de Preço
    if (lowerMessage.includes("pattern")) {
      return {
        role: "assistant",
        content: `🔍 **Pattern Recognition Alert**\n\nI've detected the following patterns:\n\n1. **Ascending Triangle** (4H chart)\n   • Bullish continuation pattern\n   • Breakout target: +8-12%\n   • Confirmation needed above resistance\n\n2. **Bullish Engulfing** (Daily)\n   • Strong reversal signal\n   • Volume confirmation present\n   • Entry opportunity on pullback\n\n3. **RSI Divergence**\n   • Price making lower lows\n   • RSI making higher lows\n   • Potential trend reversal\n\n💡 **Recommendation:** Wait for volume confirmation before entry.`,
        type: "pattern",
      };
    }

    // Notícias e Fundamentals
    if (lowerMessage.includes("news") || lowerMessage.includes("fundamental")) {
      return {
        role: "assistant",
        content: `📰 **Latest Market News & Fundamentals**\n\n**Recent Developments:**\n• Q4 earnings beat expectations by 12%\n• Revenue growth of 18% YoY\n• New product launch announced\n• Analyst upgrades from 3 major firms\n\n**Fundamental Metrics:**\n• P/E Ratio: 24.5 (Industry avg: 22.1)\n• EPS: $5.67 (↑15% YoY)\n• Profit Margin: 23.4%\n• Debt-to-Equity: 0.45 (Healthy)\n\n**Sentiment Analysis:**\n• Institutional buying: +$2.3B (last 30 days)\n• Retail sentiment: 68% bullish\n• Social media mentions: ↑145%\n\n✅ **Overall Assessment:** Strong fundamentals with positive momentum.`,
        type: "news",
      };
    }

    // Gestão de Risco
    if (lowerMessage.includes("risk") || lowerMessage.includes("should i buy") || lowerMessage.includes("should i sell")) {
      return {
        role: "assistant",
        content: `⚠️ **Risk Management Analysis**\n\n**Current Market Conditions:**\n• Volatility: Moderate (VIX: 18.5)\n• Trend strength: ${asset ? (asset.change > 0 ? "Bullish" : "Bearish") : "Mixed"}\n• Volume profile: Above average\n\n**Position Sizing Recommendation:**\n• Max position size: 5% of portfolio\n• Suggested entry: Scale in over 2-3 days\n• Stop-loss: -3% from entry\n• Take-profit targets: +5%, +10%, +15%\n\n**Risk/Reward Ratio:** 1:3 (Favorable)\n\n**Important Considerations:**\n1. Current price near ${asset ? "resistance" : "key"} level\n2. Earnings announcement in 2 weeks\n3. Market correlation: High with tech sector\n\n💡 **Neutral Advice:** If entering, use strict stop-loss and consider scaling in gradually. Never risk more than 2% of your capital on a single trade.`,
        type: "risk",
      };
    }

    // Indicadores
    if (lowerMessage.includes("indicator") || lowerMessage.includes("rsi") || lowerMessage.includes("macd")) {
      return {
        role: "assistant",
        content: `📈 **Technical Indicators Overview**\n\n**Momentum Indicators:**\n• RSI (14): 58.3 - Neutral zone\n• Stochastic: 72.1 - Approaching overbought\n• CCI: +145 - Strong momentum\n\n**Trend Indicators:**\n• MACD: Bullish crossover (Signal: Buy)\n• ADX: 28.5 - Moderate trend strength\n• Parabolic SAR: Below price (Bullish)\n\n**Volume Indicators:**\n• OBV: Rising (Accumulation)\n• Volume Profile: High activity at current level\n• A/D Line: Positive divergence\n\n**Volatility Indicators:**\n• Bollinger Bands: Price at middle band\n• ATR: 2.45 (Normal volatility)\n• Keltner Channels: Within range\n\n✅ **Confluence Signal:** 3 out of 4 indicator groups show bullish bias.`,
        type: "analysis",
      };
    }

    // Resposta padrão
    return {
      role: "assistant",
      content: `I can help you with:\n\n📊 **Technical Analysis** - Type "analyze" for detailed chart analysis\n🔍 **Pattern Recognition** - Type "pattern" to detect chart patterns\n📰 **News & Fundamentals** - Type "news" for latest updates\n⚠️ **Risk Management** - Type "risk" for position sizing advice\n📈 **Indicators** - Type "indicator" for technical indicators overview\n\nWhat would you like to know?`,
      type: "analysis",
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simular delay de resposta
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1500);
  };

  const getMessageIcon = (type?: string) => {
    switch (type) {
      case "analysis":
        return <TrendingUp className="w-4 h-4" />;
      case "pattern":
        return <Sparkles className="w-4 h-4" />;
      case "news":
        return <Info className="w-4 h-4" />;
      case "risk":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Bot className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-40 w-96 h-[600px] flex flex-col bg-white rounded-2xl shadow-2xl border-2 border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">NEUROX-AI Pro</h3>
            <p className="text-xs text-white/80">Financial Assistant</p>
          </div>
        </div>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </Button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
          >
            {message.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                {getMessageIcon(message.type)}
              </div>
            )}
            <div
              className={`flex-1 p-3 rounded-2xl ${
                message.role === "user"
                  ? "bg-gray-900 text-white ml-8"
                  : "bg-gray-100 text-gray-900 mr-8"
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              {message.type && message.role === "assistant" && (
                <Badge
                  variant="secondary"
                  className="mt-2 text-xs bg-white/50"
                >
                  {message.type}
                </Badge>
              )}
            </div>
            {message.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">U</span>
              </div>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-gray-100 p-3 rounded-2xl">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 border-t border-gray-200">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setInput("Analyze this asset");
              handleSend();
            }}
            className="rounded-full text-xs whitespace-nowrap"
          >
            📊 Analyze
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setInput("Show me patterns");
              handleSend();
            }}
            className="rounded-full text-xs whitespace-nowrap"
          >
            🔍 Patterns
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setInput("Latest news");
              handleSend();
            }}
            className="rounded-full text-xs whitespace-nowrap"
          >
            📰 News
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setInput("Risk assessment");
              handleSend();
            }}
            className="rounded-full text-xs whitespace-nowrap"
          >
            ⚠️ Risk
          </Button>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything about the market..."
            className="flex-1 rounded-full border-gray-300"
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
