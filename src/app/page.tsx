"use client";

import { useState } from "react";
import { Play, Pause, Heart, ShoppingCart, TrendingUp, TrendingDown, Share2, MessageCircle, Bookmark, ChevronUp, ChevronDown, DollarSign, Search, Filter, Star, Package, CreditCard, User, Home, Video, Store, LineChart, Plus, Globe, X, Check, Truck, Calendar, MapPin, Clock, BarChart3, Activity, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import SignupModal from "@/components/auth/SignupModal";
import LoginModal from "@/components/auth/LoginModal";
import ForgotPasswordModal from "@/components/auth/ForgotPasswordModal";
import MarketDashboard from "@/components/market/MarketDashboard";
import TradingTerminal from "@/components/market/TradingTerminal";
import AIAssistant from "@/components/market/AIAssistant";

// Translations (mantido igual)
const translations = {
  en: {
    appName: "NEUROX",
    feed: "Feed",
    marketplace: "Store",
    market: "Market",
    profile: "Profile",
    currentPrice: "Current Price",
    change24h: "24h Change",
    buyNow: "Buy Now",
    searchProducts: "Search products...",
    searchFeed: "Search in feed...",
    all: "All",
    electronics: "Electronics",
    fashion: "Fashion",
    home: "Home",
    sports: "Sports",
    beauty: "Beauty",
    addToCart: "Add to Cart",
    realTimeMarket: "Real-Time Market",
    trackStocks: "Track major stocks and cryptocurrencies",
    volume: "Volume",
    high24h: "24h High",
    low24h: "24h Low",
    welcome: "Welcome!",
    loginMessage: "Log in to access your account and start selling",
    loginCreate: "Login / Create Account",
    myProducts: "My Products",
    manageListings: "Manage listings",
    payments: "Payments",
    methodsHistory: "Methods and history",
    paymentMethods: "Payment Methods",
    expires: "Expires",
    primary: "Primary",
    addMethod: "Add Method",
    logout: "Logout",
    createAccount: "Create Account",
    fullName: "Full Name",
    email: "Email",
    password: "Password",
    cancel: "Cancel",
    verifiedSeller: "Verified Seller",
    products: "Products",
    followers: "Followers",
    rating: "Rating",
    language: "Language",
    country: "Country",
    delivery: "Delivery",
    estimatedDelivery: "Estimated Delivery",
    freeShipping: "Free Shipping",
    commission: "Your Commission",
    paymentMethod: "Payment Method",
    creditCard: "Credit Card",
    paypal: "PayPal",
    applePay: "Apple Pay",
    googlePay: "Google Pay",
    viewChart: "View Chart",
    closeChart: "Close Chart",
    todayOffers: "Today's Offers",
    flashSale: "Flash Sale",
    limitedTime: "Limited Time",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    businessDays: "business days",
    username: "Username",
    confirmPassword: "Confirm Password",
    invalidEmail: "Please enter a valid email address",
    usernameExists: "Username already exists",
    usernameAvailable: "Username available!",
    passwordsDontMatch: "Passwords don't match",
    registerAsSeller: "Register as Seller",
    startSellingImmediately: "Start selling products immediately",
    storeNamePlaceholder: "Your Store Name",
    agreeToTerms: "I agree to the",
    termsOfService: "Terms of Service",
    and: "and",
    privacyPolicy: "Privacy Policy",
    creatingAccount: "Creating Account...",
    alreadyHaveAccount: "Already have an account?",
    login: "Log in",
    accountCreated: "Account Created Successfully!",
    verificationEmailSent: "A verification email has been sent to:",
    checkEmailInbox: "Please check your inbox and click the verification link to activate your account.",
    gotIt: "Got it!",
    continueWithGoogle: "Continue with Google",
    continueWithApple: "Continue with Apple",
    orContinueWith: "Or continue with email",
    forgotPassword: "Forgot password?",
    loggingIn: "Logging in...",
    dontHaveAccount: "Don't have an account?",
    signUp: "Sign up",
    fillAllFields: "Please fill all fields",
    checkYourEmail: "Check Your Email",
    resetLinkSent: "We've sent a password reset link to:",
    resetLinkInstructions: "Click the link in the email to reset your password. The link will expire in 24 hours.",
    backToLogin: "Back to Log In",
    close: "Close",
    forgotPasswordInstructions: "Enter your email address and we'll send you a link to reset your password.",
    sendResetLink: "Send Reset Link",
    sendingLink: "Sending link...",
  },
  pt: {
    appName: "NEUROX",
    feed: "Feed",
    marketplace: "Loja",
    market: "Mercado",
    profile: "Perfil",
    currentPrice: "Preço Atual",
    change24h: "Variação 24h",
    buyNow: "Comprar Agora",
    searchProducts: "Buscar produtos...",
    searchFeed: "Buscar no feed...",
    all: "Todos",
    electronics: "Eletrônicos",
    fashion: "Moda",
    home: "Casa",
    sports: "Esportes",
    beauty: "Beleza",
    addToCart: "Adicionar",
    realTimeMarket: "Mercado em Tempo Real",
    trackStocks: "Acompanhe as principais ações e criptomoedas",
    volume: "Volume",
    high24h: "Alta 24h",
    low24h: "Baixa 24h",
    welcome: "Bem-vindo!",
    loginMessage: "Faça login para acessar sua conta e começar a vender",
    loginCreate: "Entrar / Criar Conta",
    myProducts: "Meus Produtos",
    manageListings: "Gerenciar anúncios",
    payments: "Pagamentos",
    methodsHistory: "Métodos e histórico",
    paymentMethods: "Métodos de Pagamento",
    expires: "Expira",
    primary: "Principal",
    addMethod: "Adicionar Método",
    logout: "Sair da Conta",
    createAccount: "Criar Conta",
    fullName: "Nome Completo",
    email: "Email",
    password: "Senha",
    cancel: "Cancelar",
    verifiedSeller: "Vendedor Verificado",
    products: "Produtos",
    followers: "Seguidores",
    rating: "Avaliação",
    language: "Idioma",
    country: "País",
    delivery: "Entrega",
    estimatedDelivery: "Entrega Estimada",
    freeShipping: "Frete Grátis",
    commission: "Sua Comissão",
    paymentMethod: "Método de Pagamento",
    creditCard: "Cartão de Crédito",
    paypal: "PayPal",
    applePay: "Apple Pay",
    googlePay: "Google Pay",
    viewChart: "Ver Gráfico",
    closeChart: "Fechar Gráfico",
    todayOffers: "Ofertas de Hoje",
    flashSale: "Oferta Relâmpago",
    limitedTime: "Tempo Limitado",
    inStock: "Em Estoque",
    outOfStock: "Sem Estoque",
    businessDays: "dias úteis",
    username: "Nome de Usuário",
    confirmPassword: "Confirmar Senha",
    invalidEmail: "Por favor, insira um email válido",
    usernameExists: "Nome de usuário já existe",
    usernameAvailable: "Nome de usuário disponível!",
    passwordsDontMatch: "As senhas não coincidem",
    registerAsSeller: "Registrar como Vendedor",
    startSellingImmediately: "Comece a vender produtos imediatamente",
    storeNamePlaceholder: "Nome da Sua Loja",
    agreeToTerms: "Eu concordo com os",
    termsOfService: "Termos de Serviço",
    and: "e",
    privacyPolicy: "Política de Privacidade",
    creatingAccount: "Criando Conta...",
    alreadyHaveAccount: "Já tem uma conta?",
    login: "Entrar",
    accountCreated: "Conta Criada com Sucesso!",
    verificationEmailSent: "Um email de verificação foi enviado para:",
    checkEmailInbox: "Por favor, verifique sua caixa de entrada e clique no link de verificação para ativar sua conta.",
    gotIt: "Entendi!",
    continueWithGoogle: "Continuar com Google",
    continueWithApple: "Continuar com Apple",
    orContinueWith: "Ou continue com email",
    forgotPassword: "Esqueceu a senha?",
    loggingIn: "Entrando...",
    dontHaveAccount: "Não tem uma conta?",
    signUp: "Cadastre-se",
    fillAllFields: "Por favor, preencha todos os campos",
    checkYourEmail: "Verifique Seu Email",
    resetLinkSent: "Enviamos um link de redefinição de senha para:",
    resetLinkInstructions: "Clique no link no email para redefinir sua senha. O link expirará em 24 horas.",
    backToLogin: "Voltar para Login",
    close: "Fechar",
    forgotPasswordInstructions: "Digite seu endereço de email e enviaremos um link para redefinir sua senha.",
    sendResetLink: "Enviar Link de Redefinição",
    sendingLink: "Enviando link...",
  },
};

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
];

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸", currency: "USD" },
  { code: "BR", name: "Brazil", flag: "🇧🇷", currency: "BRL" },
];

interface Product {
  id: number;
  title: string;
  seller: string;
  sellerAvatar: string;
  price: number;
  originalPrice?: number;
  priceChange: number;
  marketCap: string;
  likes: number;
  comments: number;
  shares: number;
  videoUrl: string;
  thumbnail: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  deliveryDays: number;
  isFlashSale?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    title: "Premium Minimalist Watch",
    seller: "@luxurywatch",
    sellerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    price: 1999.90,
    originalPrice: 2499.90,
    priceChange: 12.5,
    marketCap: "1.2M",
    likes: 24500,
    comments: 892,
    shares: 1240,
    videoUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=700&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=700&fit=crop",
    category: "Accessories",
    inStock: true,
    rating: 4.8,
    reviews: 342,
    deliveryDays: 3,
    isFlashSale: true,
  },
  {
    id: 2,
    title: "Limited Edition Sneakers",
    seller: "@sneakerking",
    sellerAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    price: 699.90,
    originalPrice: 899.90,
    priceChange: -3.2,
    marketCap: "850K",
    likes: 18200,
    comments: 654,
    shares: 890,
    videoUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=700&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=700&fit=crop",
    category: "Footwear",
    inStock: true,
    rating: 4.9,
    reviews: 567,
    deliveryDays: 5,
    isFlashSale: true,
  },
  {
    id: 3,
    title: "Premium Noise Cancelling Headphones",
    seller: "@audiotech",
    sellerAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    price: 1299.90,
    priceChange: 8.7,
    marketCap: "2.1M",
    likes: 31400,
    comments: 1120,
    shares: 1580,
    videoUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=700&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=700&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.7,
    reviews: 891,
    deliveryDays: 2,
  },
];

type Tab = "feed" | "marketplace" | "market" | "profile";
type Language = keyof typeof translations;
type AuthModalType = "signup" | "login" | "forgot" | null;

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("marketplace");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [feedSearchQuery, setFeedSearchQuery] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authModalType, setAuthModalType] = useState<AuthModalType>(null);
  const [language, setLanguage] = useState<Language>("en");
  const [country, setCountry] = useState("US");
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [showTradingTerminal, setShowTradingTerminal] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"card" | "paypal" | "apple" | "google">("card");

  const t = translations[language];
  const currentProduct = products[currentIndex];
  const selectedCountry = countries.find(c => c.code === country) || countries[0];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === "pt" ? "pt-BR" : "en-US", {
      style: "currency",
      currency: selectedCountry.currency,
    }).format(price);
  };

  const calculateCommission = (price: number) => {
    return price * 0.05;
  };

  const getDeliveryDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setLiked(false);
    setBookmarked(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setLiked(false);
    setBookmarked(false);
  };

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFeedProducts = products.filter(p =>
    p.title.toLowerCase().includes(feedSearchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(feedSearchQuery.toLowerCase())
  );

  const handleAssetClick = (asset: any) => {
    setSelectedAsset(asset);
    setShowTradingTerminal(true);
  };

  // Feed Tab (TikTok Style)
  const FeedTab = () => {
    const displayProducts = feedSearchQuery ? filteredFeedProducts : products;
    const displayProduct = displayProducts[currentIndex % displayProducts.length];

    return (
      <div className="relative h-screen w-full bg-black overflow-hidden">
        {/* Search Bar */}
        <div className="absolute top-20 left-0 right-0 z-30 px-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder={t.searchFeed}
              value={feedSearchQuery}
              onChange={(e) => setFeedSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-300"
            />
          </div>
        </div>

        {/* Video Background */}
        <div className="absolute inset-0">
          <img
            src={displayProduct.thumbnail}
            alt={displayProduct.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Navigation Arrows */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          <Button
            onClick={handlePrev}
            size="icon"
            className="rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20"
          >
            <ChevronUp className="w-5 h-5 text-white" />
          </Button>
          <Button
            onClick={handleNext}
            size="icon"
            className="rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20"
          >
            <ChevronDown className="w-5 h-5 text-white" />
          </Button>
        </div>

        {/* Product Info */}
        <div className="absolute bottom-24 left-0 right-0 z-10 px-6 pb-8 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={displayProduct.sellerAvatar}
              alt={displayProduct.seller}
              className="w-12 h-12 rounded-full border-2 border-white/30"
            />
            <div>
              <p className="text-white font-semibold text-sm">{displayProduct.seller}</p>
              <Badge variant="secondary" className="mt-1 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                {displayProduct.category}
              </Badge>
            </div>
          </div>

          <h2 className="text-white text-2xl font-bold leading-tight max-w-md">
            {displayProduct.title}
          </h2>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20">
              <p className="text-white/70 text-xs mb-1">{t.currentPrice}</p>
              <p className="text-white text-xl font-bold">
                {formatPrice(displayProduct.price)}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20">
              <p className="text-white/70 text-xs mb-1">{t.delivery}</p>
              <div className="flex items-center gap-1">
                <Truck className="w-4 h-4 text-white" />
                <p className="text-white text-sm font-bold">
                  {displayProduct.deliveryDays} {t.businessDays}
                </p>
              </div>
            </div>
          </div>

          <Button 
            size="lg"
            onClick={() => !isAuthenticated && setAuthModalType("signup")}
            className="w-full bg-white hover:bg-gray-100 text-black font-bold text-lg py-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            {t.buyNow}
          </Button>
        </div>

        {/* Interaction Buttons */}
        <div className="absolute right-6 bottom-32 z-20 flex flex-col gap-6">
          <button
            onClick={() => setLiked(!liked)}
            className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Heart
                className={`w-6 h-6 ${liked ? "fill-red-500 text-red-500" : "text-white"}`}
              />
            </div>
            <span className="text-white text-xs font-semibold">
              {(displayProduct.likes + (liked ? 1 : 0)).toLocaleString()}
            </span>
          </button>

          <button className="flex flex-col items-center gap-1 transition-transform hover:scale-110">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs font-semibold">
              {displayProduct.comments.toLocaleString()}
            </span>
          </button>

          <button className="flex flex-col items-center gap-1 transition-transform hover:scale-110">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs font-semibold">
              {displayProduct.shares.toLocaleString()}
            </span>
          </button>

          <button
            onClick={() => setBookmarked(!bookmarked)}
            className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Bookmark
                className={`w-6 h-6 ${bookmarked ? "fill-white text-white" : "text-white"}`}
              />
            </div>
          </button>
        </div>
      </div>
    );
  };

  // Marketplace Tab
  const MarketplaceTab = () => (
    <div className="min-h-screen bg-white pb-24">
      <div className="bg-black text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6" />
            <div>
              <p className="font-bold text-lg">{t.flashSale}</p>
              <p className="text-sm text-gray-300">{t.limitedTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-mono font-bold">23:45:12</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 px-6 py-4 space-y-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder={t.searchProducts}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-6 rounded-2xl border-gray-300 focus:border-black"
            />
          </div>
          <Button size="icon" variant="outline" className="rounded-2xl h-12 w-12 border-gray-300">
            <Filter className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="px-6 py-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.todayOffers}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden border-2 border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="relative aspect-square">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {product.isFlashSale && (
                  <Badge className="absolute top-2 left-2 bg-black text-white">
                    {t.flashSale}
                  </Badge>
                )}
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-sm line-clamp-2 text-gray-900">{product.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-black text-black" />
                  <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                </div>
                <div className="space-y-1">
                  {product.originalPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </p>
                  )}
                  <p className="text-xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </p>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-black hover:bg-gray-800 text-white rounded-xl"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {t.addToCart}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  // Market Tab with Dashboard
  const MarketTab = () => (
    <div className="min-h-screen bg-white pb-24">
      <div className="bg-black text-white px-6 py-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold mb-2">{t.realTimeMarket}</h2>
        <p className="text-gray-400 text-sm">{t.trackStocks}</p>
      </div>

      <MarketDashboard onAssetClick={handleAssetClick} translations={t} />
    </div>
  );

  // Profile Tab
  const ProfileTab = () => (
    <div className="min-h-screen bg-white pb-24">
      {isAuthenticated ? (
        <div className="px-6 py-8 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">John Smith</h2>
                <p className="text-gray-500">@johnsmith</p>
                <Badge className="mt-2 bg-black text-white">
                  {t.verifiedSeller}
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-900">127</p>
                <p className="text-gray-500 text-sm">{t.products}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">8.5k</p>
                <p className="text-gray-500 text-sm">{t.followers}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">4.9</p>
                <p className="text-gray-500 text-sm">{t.rating}</p>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={() => setIsAuthenticated(false)}
            className="w-full rounded-xl border-2 border-gray-200 hover:border-gray-400"
          >
            {t.logout}
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen px-6">
          <Card className="w-full max-w-md p-8 text-center border-2 border-gray-200">
            <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mx-auto mb-6">
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.welcome}</h2>
            <p className="text-gray-500 mb-6">
              {t.loginMessage}
            </p>
            <Button
              onClick={() => setAuthModalType("login")}
              className="w-full bg-black hover:bg-gray-800 text-white rounded-xl py-6 text-lg font-semibold"
            >
              {t.loginCreate}
            </Button>
          </Card>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">{t.appName}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowLanguageModal(true)}
              className="text-gray-700"
            >
              <Globe className="w-5 h-5" />
            </Button>
            {activeTab === "market" && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAIAssistant(!showAIAssistant)}
                className="text-gray-700"
              >
                <Bot className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16">
        {activeTab === "feed" && <FeedTab />}
        {activeTab === "marketplace" && <MarketplaceTab />}
        {activeTab === "market" && <MarketTab />}
        {activeTab === "profile" && <ProfileTab />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex items-center justify-around">
          <button
            onClick={() => setActiveTab("feed")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "feed" ? "text-black" : "text-gray-400"
            }`}
          >
            <Video className="w-6 h-6" />
            <span className="text-xs font-medium">{t.feed}</span>
          </button>
          <button
            onClick={() => setActiveTab("marketplace")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "marketplace" ? "text-black" : "text-gray-400"
            }`}
          >
            <Store className="w-6 h-6" />
            <span className="text-xs font-medium">{t.marketplace}</span>
          </button>
          <button
            onClick={() => setActiveTab("market")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "market" ? "text-black" : "text-gray-400"
            }`}
          >
            <LineChart className="w-6 h-6" />
            <span className="text-xs font-medium">{t.market}</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "profile" ? "text-black" : "text-gray-400"
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">{t.profile}</span>
          </button>
        </div>
      </div>

      {/* Modals */}
      {authModalType === "signup" && (
        <SignupModal
          onClose={() => setAuthModalType(null)}
          onSuccess={() => {
            setIsAuthenticated(true);
            setAuthModalType(null);
          }}
          onSwitchToLogin={() => setAuthModalType("login")}
          translations={t}
        />
      )}
      
      {authModalType === "login" && (
        <LoginModal
          onClose={() => setAuthModalType(null)}
          onSuccess={() => {
            setIsAuthenticated(true);
            setAuthModalType(null);
          }}
          onSwitchToSignup={() => setAuthModalType("signup")}
          onForgotPassword={() => setAuthModalType("forgot")}
          translations={t}
        />
      )}
      
      {authModalType === "forgot" && (
        <ForgotPasswordModal
          onClose={() => setAuthModalType(null)}
          onBackToLogin={() => setAuthModalType("login")}
          translations={t}
        />
      )}

      {/* Trading Terminal */}
      {showTradingTerminal && selectedAsset && (
        <TradingTerminal
          asset={selectedAsset}
          onClose={() => {
            setShowTradingTerminal(false);
            setSelectedAsset(null);
          }}
          translations={t}
        />
      )}

      {/* AI Assistant */}
      {showAIAssistant && activeTab === "market" && (
        <AIAssistant
          asset={selectedAsset}
          translations={t}
          onClose={() => setShowAIAssistant(false)}
        />
      )}
    </div>
  );
}
