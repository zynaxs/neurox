"use client";

import { useState } from "react";
import { Play, Pause, Heart, ShoppingCart, TrendingUp, TrendingDown, Share2, MessageCircle, Bookmark, ChevronUp, ChevronDown, DollarSign, Search, Filter, Star, Package, CreditCard, User, Home, Video, Store, LineChart, Plus, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

// Translations
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
  },
  es: {
    appName: "NEUROX",
    feed: "Feed",
    marketplace: "Tienda",
    market: "Mercado",
    profile: "Perfil",
    currentPrice: "Precio Actual",
    change24h: "Cambio 24h",
    buyNow: "Comprar Ahora",
    searchProducts: "Buscar productos...",
    all: "Todos",
    electronics: "Electrónicos",
    fashion: "Moda",
    home: "Hogar",
    sports: "Deportes",
    beauty: "Belleza",
    addToCart: "Agregar",
    realTimeMarket: "Mercado en Tiempo Real",
    trackStocks: "Sigue las principales acciones y criptomonedas",
    volume: "Volumen",
    high24h: "Máximo 24h",
    low24h: "Mínimo 24h",
    welcome: "¡Bienvenido!",
    loginMessage: "Inicia sesión para acceder a tu cuenta y empezar a vender",
    loginCreate: "Entrar / Crear Cuenta",
    myProducts: "Mis Productos",
    manageListings: "Gestionar anuncios",
    payments: "Pagos",
    methodsHistory: "Métodos e historial",
    paymentMethods: "Métodos de Pago",
    expires: "Expira",
    primary: "Principal",
    addMethod: "Agregar Método",
    logout: "Cerrar Sesión",
    createAccount: "Crear Cuenta",
    fullName: "Nombre Completo",
    email: "Correo",
    password: "Contraseña",
    cancel: "Cancelar",
    verifiedSeller: "Vendedor Verificado",
    products: "Productos",
    followers: "Seguidores",
    rating: "Calificación",
    language: "Idioma",
    country: "País",
  },
  fr: {
    appName: "NEUROX",
    feed: "Flux",
    marketplace: "Boutique",
    market: "Marché",
    profile: "Profil",
    currentPrice: "Prix Actuel",
    change24h: "Variation 24h",
    buyNow: "Acheter Maintenant",
    searchProducts: "Rechercher des produits...",
    all: "Tous",
    electronics: "Électronique",
    fashion: "Mode",
    home: "Maison",
    sports: "Sports",
    beauty: "Beauté",
    addToCart: "Ajouter",
    realTimeMarket: "Marché en Temps Réel",
    trackStocks: "Suivez les principales actions et cryptomonnaies",
    volume: "Volume",
    high24h: "Haut 24h",
    low24h: "Bas 24h",
    welcome: "Bienvenue!",
    loginMessage: "Connectez-vous pour accéder à votre compte et commencer à vendre",
    loginCreate: "Se Connecter / Créer un Compte",
    myProducts: "Mes Produits",
    manageListings: "Gérer les annonces",
    payments: "Paiements",
    methodsHistory: "Méthodes et historique",
    paymentMethods: "Méthodes de Paiement",
    expires: "Expire",
    primary: "Principal",
    addMethod: "Ajouter une Méthode",
    logout: "Se Déconnecter",
    createAccount: "Créer un Compte",
    fullName: "Nom Complet",
    email: "Email",
    password: "Mot de Passe",
    cancel: "Annuler",
    verifiedSeller: "Vendeur Vérifié",
    products: "Produits",
    followers: "Abonnés",
    rating: "Note",
    language: "Langue",
    country: "Pays",
  },
  de: {
    appName: "NEUROX",
    feed: "Feed",
    marketplace: "Shop",
    market: "Markt",
    profile: "Profil",
    currentPrice: "Aktueller Preis",
    change24h: "24h Änderung",
    buyNow: "Jetzt Kaufen",
    searchProducts: "Produkte suchen...",
    all: "Alle",
    electronics: "Elektronik",
    fashion: "Mode",
    home: "Haus",
    sports: "Sport",
    beauty: "Schönheit",
    addToCart: "Hinzufügen",
    realTimeMarket: "Echtzeit-Markt",
    trackStocks: "Verfolgen Sie wichtige Aktien und Kryptowährungen",
    volume: "Volumen",
    high24h: "24h Hoch",
    low24h: "24h Tief",
    welcome: "Willkommen!",
    loginMessage: "Melden Sie sich an, um auf Ihr Konto zuzugreifen und mit dem Verkauf zu beginnen",
    loginCreate: "Anmelden / Konto Erstellen",
    myProducts: "Meine Produkte",
    manageListings: "Anzeigen verwalten",
    payments: "Zahlungen",
    methodsHistory: "Methoden und Verlauf",
    paymentMethods: "Zahlungsmethoden",
    expires: "Läuft ab",
    primary: "Primär",
    addMethod: "Methode Hinzufügen",
    logout: "Abmelden",
    createAccount: "Konto Erstellen",
    fullName: "Vollständiger Name",
    email: "E-Mail",
    password: "Passwort",
    cancel: "Abbrechen",
    verifiedSeller: "Verifizierter Verkäufer",
    products: "Produkte",
    followers: "Follower",
    rating: "Bewertung",
    language: "Sprache",
    country: "Land",
  },
  zh: {
    appName: "NEUROX",
    feed: "动态",
    marketplace: "商店",
    market: "市场",
    profile: "个人资料",
    currentPrice: "当前价格",
    change24h: "24小时变化",
    buyNow: "立即购买",
    searchProducts: "搜索产品...",
    all: "全部",
    electronics: "电子产品",
    fashion: "时尚",
    home: "家居",
    sports: "运动",
    beauty: "美容",
    addToCart: "添加",
    realTimeMarket: "实时市场",
    trackStocks: "追踪主要股票和加密货币",
    volume: "成交量",
    high24h: "24小时最高",
    low24h: "24小时最低",
    welcome: "欢迎！",
    loginMessage: "登录以访问您的帐户并开始销售",
    loginCreate: "登录 / 创建帐户",
    myProducts: "我的产品",
    manageListings: "管理列表",
    payments: "付款",
    methodsHistory: "方法和历史",
    paymentMethods: "付款方式",
    expires: "到期",
    primary: "主要",
    addMethod: "添加方法",
    logout: "登出",
    createAccount: "创建帐户",
    fullName: "全名",
    email: "电子邮件",
    password: "密码",
    cancel: "取消",
    verifiedSeller: "已验证卖家",
    products: "产品",
    followers: "关注者",
    rating: "评分",
    language: "语言",
    country: "国家",
  },
  ja: {
    appName: "NEUROX",
    feed: "フィード",
    marketplace: "ストア",
    market: "マーケット",
    profile: "プロフィール",
    currentPrice: "現在の価格",
    change24h: "24時間変動",
    buyNow: "今すぐ購入",
    searchProducts: "商品を検索...",
    all: "すべて",
    electronics: "電子機器",
    fashion: "ファッション",
    home: "ホーム",
    sports: "スポーツ",
    beauty: "美容",
    addToCart: "追加",
    realTimeMarket: "リアルタイム市場",
    trackStocks: "主要な株式と暗号通貨を追跡",
    volume: "出来高",
    high24h: "24時間高値",
    low24h: "24時間安値",
    welcome: "ようこそ！",
    loginMessage: "アカウントにアクセスして販売を開始するにはログインしてください",
    loginCreate: "ログイン / アカウント作成",
    myProducts: "マイ商品",
    manageListings: "リストを管理",
    payments: "支払い",
    methodsHistory: "方法と履歴",
    paymentMethods: "支払い方法",
    expires: "有効期限",
    primary: "プライマリ",
    addMethod: "方法を追加",
    logout: "ログアウト",
    createAccount: "アカウント作成",
    fullName: "フルネーム",
    email: "メール",
    password: "パスワード",
    cancel: "キャンセル",
    verifiedSeller: "認証済み販売者",
    products: "商品",
    followers: "フォロワー",
    rating: "評価",
    language: "言語",
    country: "国",
  },
  ar: {
    appName: "NEUROX",
    feed: "التغذية",
    marketplace: "المتجر",
    market: "السوق",
    profile: "الملف الشخصي",
    currentPrice: "السعر الحالي",
    change24h: "تغيير 24 ساعة",
    buyNow: "اشتري الآن",
    searchProducts: "البحث عن المنتجات...",
    all: "الكل",
    electronics: "الإلكترونيات",
    fashion: "الموضة",
    home: "المنزل",
    sports: "الرياضة",
    beauty: "الجمال",
    addToCart: "إضافة",
    realTimeMarket: "السوق في الوقت الفعلي",
    trackStocks: "تتبع الأسهم والعملات المشفرة الرئيسية",
    volume: "الحجم",
    high24h: "أعلى 24 ساعة",
    low24h: "أدنى 24 ساعة",
    welcome: "مرحبا!",
    loginMessage: "قم بتسجيل الدخول للوصول إلى حسابك والبدء في البيع",
    loginCreate: "تسجيل الدخول / إنشاء حساب",
    myProducts: "منتجاتي",
    manageListings: "إدارة القوائم",
    payments: "المدفوعات",
    methodsHistory: "الطرق والتاريخ",
    paymentMethods: "طرق الدفع",
    expires: "تنتهي",
    primary: "الأساسي",
    addMethod: "إضافة طريقة",
    logout: "تسجيل الخروج",
    createAccount: "إنشاء حساب",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    cancel: "إلغاء",
    verifiedSeller: "بائع موثق",
    products: "المنتجات",
    followers: "المتابعون",
    rating: "التقييم",
    language: "اللغة",
    country: "البلد",
  },
  ru: {
    appName: "NEUROX",
    feed: "Лента",
    marketplace: "Магазин",
    market: "Рынок",
    profile: "Профиль",
    currentPrice: "Текущая Цена",
    change24h: "Изменение 24ч",
    buyNow: "Купить Сейчас",
    searchProducts: "Поиск товаров...",
    all: "Все",
    electronics: "Электроника",
    fashion: "Мода",
    home: "Дом",
    sports: "Спорт",
    beauty: "Красота",
    addToCart: "Добавить",
    realTimeMarket: "Рынок в Реальном Времени",
    trackStocks: "Отслеживайте основные акции и криптовалюты",
    volume: "Объем",
    high24h: "Макс 24ч",
    low24h: "Мин 24ч",
    welcome: "Добро пожаловать!",
    loginMessage: "Войдите, чтобы получить доступ к своей учетной записи и начать продавать",
    loginCreate: "Войти / Создать Аккаунт",
    myProducts: "Мои Товары",
    manageListings: "Управление объявлениями",
    payments: "Платежи",
    methodsHistory: "Методы и история",
    paymentMethods: "Способы Оплаты",
    expires: "Истекает",
    primary: "Основной",
    addMethod: "Добавить Метод",
    logout: "Выйти",
    createAccount: "Создать Аккаунт",
    fullName: "Полное Имя",
    email: "Электронная Почта",
    password: "Пароль",
    cancel: "Отмена",
    verifiedSeller: "Проверенный Продавец",
    products: "Товары",
    followers: "Подписчики",
    rating: "Рейтинг",
    language: "Язык",
    country: "Страна",
  },
  hi: {
    appName: "NEUROX",
    feed: "फ़ीड",
    marketplace: "स्टोर",
    market: "बाज़ार",
    profile: "प्रोफ़ाइल",
    currentPrice: "वर्तमान मूल्य",
    change24h: "24 घंटे परिवर्तन",
    buyNow: "अभी खरीदें",
    searchProducts: "उत्पाद खोजें...",
    all: "सभी",
    electronics: "इलेक्ट्रॉनिक्स",
    fashion: "फैशन",
    home: "घर",
    sports: "खेल",
    beauty: "सौंदर्य",
    addToCart: "जोड़ें",
    realTimeMarket: "रीयल-टाइम बाज़ार",
    trackStocks: "प्रमुख स्टॉक और क्रिप्टोकरेंसी को ट्रैक करें",
    volume: "वॉल्यूम",
    high24h: "24 घंटे उच्च",
    low24h: "24 घंटे निम्न",
    welcome: "स्वागत है!",
    loginMessage: "अपने खाते तक पहुंचने और बेचना शुरू करने के लिए लॉग इन करें",
    loginCreate: "लॉगिन / खाता बनाएं",
    myProducts: "मेरे उत्पाद",
    manageListings: "लिस्टिंग प्रबंधित करें",
    payments: "भुगतान",
    methodsHistory: "विधियां और इतिहास",
    paymentMethods: "भुगतान के तरीके",
    expires: "समाप्त होता है",
    primary: "प्राथमिक",
    addMethod: "विधि जोड़ें",
    logout: "लॉग आउट",
    createAccount: "खाता बनाएं",
    fullName: "पूरा नाम",
    email: "ईमेल",
    password: "पासवर्ड",
    cancel: "रद्द करें",
    verifiedSeller: "सत्यापित विक्रेता",
    products: "उत्पाद",
    followers: "फॉलोअर्स",
    rating: "रेटिंग",
    language: "भाषा",
    country: "देश",
  },
};

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
];

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸", currency: "USD" },
  { code: "BR", name: "Brazil", flag: "🇧🇷", currency: "BRL" },
  { code: "ES", name: "Spain", flag: "🇪🇸", currency: "EUR" },
  { code: "FR", name: "France", flag: "🇫🇷", currency: "EUR" },
  { code: "DE", name: "Germany", flag: "🇩🇪", currency: "EUR" },
  { code: "CN", name: "China", flag: "🇨🇳", currency: "CNY" },
  { code: "JP", name: "Japan", flag: "🇯🇵", currency: "JPY" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", currency: "SAR" },
  { code: "RU", name: "Russia", flag: "🇷🇺", currency: "RUB" },
  { code: "IN", name: "India", flag: "🇮🇳", currency: "INR" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", currency: "GBP" },
  { code: "CA", name: "Canada", flag: "🇨🇦", currency: "CAD" },
  { code: "AU", name: "Australia", flag: "🇦🇺", currency: "AUD" },
  { code: "MX", name: "Mexico", flag: "🇲🇽", currency: "MXN" },
  { code: "IT", name: "Italy", flag: "🇮🇹", currency: "EUR" },
  { code: "KR", name: "South Korea", flag: "🇰🇷", currency: "KRW" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", currency: "IDR" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", currency: "TRY" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", currency: "EUR" },
  { code: "SE", name: "Sweden", flag: "🇸🇪", currency: "SEK" },
];

interface Product {
  id: number;
  title: string;
  seller: string;
  sellerAvatar: string;
  price: number;
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
}

interface Stock {
  id: number;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  marketCap: string;
  high24h: number;
  low24h: number;
}

const products: Product[] = [
  {
    id: 1,
    title: "Premium Minimalist Watch",
    seller: "@luxurywatch",
    sellerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    price: 2499.90,
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
  },
  {
    id: 2,
    title: "Limited Edition Sneakers",
    seller: "@sneakerking",
    sellerAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    price: 899.90,
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
  },
];

const stocks: Stock[] = [
  {
    id: 1,
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 178.45,
    change: 2.34,
    changePercent: 1.33,
    volume: "52.3M",
    marketCap: "2.8T",
    high24h: 179.20,
    low24h: 176.10,
  },
  {
    id: 2,
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 242.84,
    change: -5.67,
    changePercent: -2.28,
    volume: "98.7M",
    marketCap: "771B",
    high24h: 248.50,
    low24h: 241.30,
  },
  {
    id: 3,
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 156.78,
    change: 3.21,
    changePercent: 2.09,
    volume: "45.2M",
    marketCap: "1.6T",
    high24h: 157.90,
    low24h: 153.50,
  },
  {
    id: 4,
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 141.23,
    change: 1.89,
    changePercent: 1.36,
    volume: "28.9M",
    marketCap: "1.8T",
    high24h: 142.10,
    low24h: 139.30,
  },
  {
    id: 5,
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: 378.91,
    change: 4.56,
    changePercent: 1.22,
    volume: "32.1M",
    marketCap: "2.8T",
    high24h: 380.20,
    low24h: 374.30,
  },
];

type Tab = "feed" | "marketplace" | "market" | "profile";
type Language = keyof typeof translations;

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("feed");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [country, setCountry] = useState("US");
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const t = translations[language];
  const currentProduct = products[currentIndex];
  const selectedCountry = countries.find(c => c.code === country) || countries[0];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === "pt" ? "pt-BR" : language === "en" ? "en-US" : language, {
      style: "currency",
      currency: selectedCountry.currency,
    }).format(price);
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

  // Language/Country Modal
  const LanguageModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-6 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.language} & {t.country}</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">{t.language}</h3>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as Language)}
                  className={`p-3 rounded-xl border-2 transition-all text-left ${
                    language === lang.code
                      ? "border-amber-500 bg-amber-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className="text-2xl mr-2">{lang.flag}</span>
                  <span className="font-medium text-sm">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">{t.country}</h3>
            <div className="grid grid-cols-2 gap-2">
              {countries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCountry(c.code)}
                  className={`p-3 rounded-xl border-2 transition-all text-left ${
                    country === c.code
                      ? "border-amber-500 bg-amber-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className="text-2xl mr-2">{c.flag}</span>
                  <div>
                    <p className="font-medium text-sm">{c.name}</p>
                    <p className="text-xs text-slate-500">{c.currency}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <Button
          onClick={() => setShowLanguageModal(false)}
          className="w-full mt-6 bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-white rounded-xl"
        >
          {t.cancel}
        </Button>
      </Card>
    </div>
  );

  // Feed Tab (TikTok Style)
  const FeedTab = () => (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <img
          src={currentProduct.thumbnail}
          alt={currentProduct.title}
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

      {/* Product Info - Left Side */}
      <div className="absolute bottom-24 left-0 right-0 z-10 px-6 pb-8 space-y-4">
        {/* Seller Info */}
        <div className="flex items-center gap-3">
          <img
            src={currentProduct.sellerAvatar}
            alt={currentProduct.seller}
            className="w-12 h-12 rounded-full border-2 border-white/30"
          />
          <div>
            <p className="text-white font-semibold text-sm">{currentProduct.seller}</p>
            <Badge variant="secondary" className="mt-1 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              {currentProduct.category}
            </Badge>
          </div>
        </div>

        {/* Product Title */}
        <h2 className="text-white text-2xl font-bold leading-tight max-w-md">
          {currentProduct.title}
        </h2>

        {/* Market Info */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20">
            <p className="text-white/70 text-xs mb-1">{t.currentPrice}</p>
            <p className="text-white text-xl font-bold">
              {formatPrice(currentProduct.price)}
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20">
            <p className="text-white/70 text-xs mb-1">{t.change24h}</p>
            <div className="flex items-center gap-1">
              {currentProduct.priceChange > 0 ? (
                <>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <p className="text-emerald-400 text-lg font-bold">
                    +{currentProduct.priceChange}%
                  </p>
                </>
              ) : (
                <>
                  <TrendingDown className="w-4 h-4 text-rose-400" />
                  <p className="text-rose-400 text-lg font-bold">
                    {currentProduct.priceChange}%
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg"
          onClick={() => !isAuthenticated && setShowAuthModal(true)}
          className="w-full bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-white font-bold text-lg py-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.02]"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          {t.buyNow}
        </Button>
      </div>

      {/* Interaction Buttons - Right Side */}
      <div className="absolute right-6 bottom-32 z-20 flex flex-col gap-6">
        <button
          onClick={() => setLiked(!liked)}
          className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <Heart
              className={`w-6 h-6 ${liked ? "fill-rose-500 text-rose-500" : "text-white"}`}
            />
          </div>
          <span className="text-white text-xs font-semibold">
            {(currentProduct.likes + (liked ? 1 : 0)).toLocaleString()}
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 transition-transform hover:scale-110">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xs font-semibold">
            {currentProduct.comments.toLocaleString()}
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 transition-transform hover:scale-110">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <Share2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xs font-semibold">
            {currentProduct.shares.toLocaleString()}
          </span>
        </button>

        <button
          onClick={() => setBookmarked(!bookmarked)}
          className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <Bookmark
              className={`w-6 h-6 ${bookmarked ? "fill-amber-400 text-amber-400" : "text-white"}`}
            />
          </div>
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-20 left-6 right-6 z-20 flex gap-2">
        {products.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-amber-400 to-rose-500"
                : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );

  // Marketplace Tab (Amazon Style)
  const MarketplaceTab = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pb-24">
      {/* Search Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 space-y-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              placeholder={t.searchProducts}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-6 rounded-2xl border-slate-200 focus:border-amber-400"
            />
          </div>
          <Button size="icon" variant="outline" className="rounded-2xl h-12 w-12">
            <Filter className="w-5 h-5" />
          </Button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[t.all, t.electronics, t.fashion, t.home, t.sports, t.beauty].map((cat) => (
            <Badge
              key={cat}
              variant="secondary"
              className="px-4 py-2 rounded-full cursor-pointer hover:bg-slate-200 whitespace-nowrap"
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-6 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="relative aspect-square">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-white/90 text-slate-900">
                {product.category}
              </Badge>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-xs text-slate-500">({product.reviews})</span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold text-slate-900">
                  {formatPrice(product.price)}
                </p>
                {product.priceChange > 0 && (
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 text-xs">
                    +{product.priceChange}%
                  </Badge>
                )}
              </div>
              <Button 
                size="sm" 
                onClick={() => !isAuthenticated && setShowAuthModal(true)}
                className="w-full bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-white rounded-xl"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {t.addToCart}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  // Market Tab (Financial Market)
  const MarketTab = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 pb-24">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-md border-b border-slate-700 px-6 py-6">
        <h2 className="text-2xl font-bold text-white mb-2">{t.realTimeMarket}</h2>
        <p className="text-slate-400 text-sm">{t.trackStocks}</p>
      </div>

      {/* Market Overview */}
      <div className="px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700 p-4">
          <p className="text-slate-400 text-xs mb-1">S&P 500</p>
          <p className="text-white text-xl font-bold">4,783.45</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">+1.2%</span>
          </div>
        </Card>
        <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700 p-4">
          <p className="text-slate-400 text-xs mb-1">NASDAQ</p>
          <p className="text-white text-xl font-bold">15,011.35</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">+0.8%</span>
          </div>
        </Card>
        <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700 p-4">
          <p className="text-slate-400 text-xs mb-1">BTC/USD</p>
          <p className="text-white text-xl font-bold">$43,892</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingDown className="w-3 h-3 text-rose-400" />
            <span className="text-rose-400 text-sm font-semibold">-2.3%</span>
          </div>
        </Card>
        <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700 p-4">
          <p className="text-slate-400 text-xs mb-1">ETH/USD</p>
          <p className="text-white text-xl font-bold">$2,287</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">+3.5%</span>
          </div>
        </Card>
      </div>

      {/* Stocks List */}
      <div className="px-6 space-y-3">
        {stocks.map((stock) => (
          <Card key={stock.id} className="bg-slate-800/50 backdrop-blur-md border-slate-700 p-4 hover:bg-slate-800/70 transition-all cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{stock.symbol.slice(0, 2)}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{stock.symbol}</p>
                    <p className="text-slate-400 text-xs">{stock.name}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <p className="text-slate-500">{t.volume}</p>
                    <p className="text-slate-300 font-medium">{stock.volume}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">{t.high24h}</p>
                    <p className="text-slate-300 font-medium">${stock.high24h}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">{t.low24h}</p>
                    <p className="text-slate-300 font-medium">${stock.low24h}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white text-2xl font-bold mb-1">${stock.price}</p>
                <div className="flex items-center gap-1 justify-end">
                  {stock.change > 0 ? (
                    <>
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">
                        +{stock.changePercent}%
                      </span>
                    </>
                  ) : (
                    <>
                      <TrendingDown className="w-4 h-4 text-rose-400" />
                      <span className="text-rose-400 font-semibold">
                        {stock.changePercent}%
                      </span>
                    </>
                  )}
                </div>
                <p className="text-slate-500 text-xs mt-1">Cap: {stock.marketCap}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  // Profile Tab
  const ProfileTab = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pb-24">
      {isAuthenticated ? (
        <div className="px-6 py-8 space-y-6">
          {/* Profile Header */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">John Smith</h2>
                <p className="text-slate-500">@johnsmith</p>
                <Badge className="mt-2 bg-gradient-to-r from-amber-400 to-rose-500 text-white">
                  {t.verifiedSeller}
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-slate-900">127</p>
                <p className="text-slate-500 text-sm">{t.products}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">8.5k</p>
                <p className="text-slate-500 text-sm">{t.followers}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4.9</p>
                <p className="text-slate-500 text-sm">{t.rating}</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 hover:shadow-lg transition-all cursor-pointer">
              <Package className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">{t.myProducts}</h3>
              <p className="text-slate-500 text-sm">{t.manageListings}</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all cursor-pointer">
              <CreditCard className="w-8 h-8 text-rose-500 mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">{t.payments}</h3>
              <p className="text-slate-500 text-sm">{t.methodsHistory}</p>
            </Card>
          </div>

          {/* Add Payment Method */}
          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              {t.paymentMethods}
            </h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">•••• 4532</p>
                    <p className="text-slate-500 text-xs">{t.expires} 12/25</p>
                  </div>
                </div>
                <Badge variant="secondary">{t.primary}</Badge>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-white rounded-xl">
              <Plus className="w-4 h-4 mr-2" />
              {t.addMethod}
            </Button>
          </Card>

          {/* Logout */}
          <Button
            variant="outline"
            onClick={() => setIsAuthenticated(false)}
            className="w-full rounded-xl"
          >
            {t.logout}
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen px-6">
          <Card className="w-full max-w-md p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center mx-auto mb-6">
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.welcome}</h2>
            <p className="text-slate-500 mb-6">
              {t.loginMessage}
            </p>
            <Button
              onClick={() => setShowAuthModal(true)}
              className="w-full bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-white rounded-xl py-6 text-lg font-semibold"
            >
              {t.loginCreate}
            </Button>
          </Card>
        </div>
      )}
    </div>
  );

  // Auth Modal
  const AuthModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.createAccount}</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">{t.fullName}</label>
            <Input placeholder="John Smith" className="rounded-xl" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">{t.email}</label>
            <Input type="email" placeholder="john@example.com" className="rounded-xl" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">{t.password}</label>
            <Input type="password" placeholder="••••••••" className="rounded-xl" />
          </div>
          <Button
            onClick={() => {
              setIsAuthenticated(true);
              setShowAuthModal(false);
            }}
            className="w-full bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-white rounded-xl py-6 text-lg font-semibold"
          >
            {t.createAccount}
          </Button>
          <Button
            variant="outline"
            onClick={() => setShowAuthModal(false)}
            className="w-full rounded-xl"
          >
            {t.cancel}
          </Button>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">{t.appName}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowLanguageModal(true)}
              className="text-slate-700"
            >
              <Globe className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-700">
              <ShoppingCart className="w-5 h-5" />
            </Button>
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
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-md border-t border-slate-200 px-6 py-3">
        <div className="flex items-center justify-around">
          <button
            onClick={() => setActiveTab("feed")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "feed" ? "text-amber-500" : "text-slate-400"
            }`}
          >
            <Video className="w-6 h-6" />
            <span className="text-xs font-medium">{t.feed}</span>
          </button>
          <button
            onClick={() => setActiveTab("marketplace")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "marketplace" ? "text-amber-500" : "text-slate-400"
            }`}
          >
            <Store className="w-6 h-6" />
            <span className="text-xs font-medium">{t.marketplace}</span>
          </button>
          <button
            onClick={() => setActiveTab("market")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "market" ? "text-amber-500" : "text-slate-400"
            }`}
          >
            <LineChart className="w-6 h-6" />
            <span className="text-xs font-medium">{t.market}</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "profile" ? "text-amber-500" : "text-slate-400"
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">{t.profile}</span>
          </button>
        </div>
      </div>

      {/* Modals */}
      {showAuthModal && <AuthModal />}
      {showLanguageModal && <LanguageModal />}
    </div>
  );
}
