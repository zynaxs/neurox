"use client";

import { useState } from "react";
import { Play, Pause, Heart, ShoppingCart, TrendingUp, TrendingDown, Share2, MessageCircle, Bookmark, ChevronUp, ChevronDown, DollarSign, Search, Filter, Star, Package, CreditCard, User, Home, Video, Store, LineChart, Plus, Globe, X, Check, Truck, Calendar, MapPin, Clock, BarChart3, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import SignupModal from "@/components/auth/SignupModal";
import LoginModal from "@/components/auth/LoginModal";
import ForgotPasswordModal from "@/components/auth/ForgotPasswordModal";

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
    searchFeed: "Buscar en feed...",
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
    delivery: "Entrega",
    estimatedDelivery: "Entrega Estimada",
    freeShipping: "Envío Gratis",
    commission: "Tu Comisión",
    paymentMethod: "Método de Pago",
    creditCard: "Tarjeta de Crédito",
    paypal: "PayPal",
    applePay: "Apple Pay",
    googlePay: "Google Pay",
    viewChart: "Ver Gráfico",
    closeChart: "Cerrar Gráfico",
    todayOffers: "Ofertas de Hoy",
    flashSale: "Oferta Flash",
    limitedTime: "Tiempo Limitado",
    inStock: "En Stock",
    outOfStock: "Sin Stock",
    businessDays: "días hábiles",
    username: "Nombre de Usuario",
    confirmPassword: "Confirmar Contraseña",
    invalidEmail: "Por favor, ingrese un correo válido",
    usernameExists: "El nombre de usuario ya existe",
    usernameAvailable: "¡Nombre de usuario disponible!",
    passwordsDontMatch: "Las contraseñas no coinciden",
    registerAsSeller: "Registrarse como Vendedor",
    startSellingImmediately: "Comienza a vender productos inmediatamente",
    storeNamePlaceholder: "Nombre de Tu Tienda",
    agreeToTerms: "Acepto los",
    termsOfService: "Términos de Servicio",
    and: "y",
    privacyPolicy: "Política de Privacidad",
    creatingAccount: "Creando Cuenta...",
    alreadyHaveAccount: "¿Ya tienes una cuenta?",
    login: "Iniciar sesión",
    accountCreated: "¡Cuenta Creada con Éxito!",
    verificationEmailSent: "Se ha enviado un correo de verificación a:",
    checkEmailInbox: "Por favor, revisa tu bandeja de entrada y haz clic en el enlace de verificación para activar tu cuenta.",
    gotIt: "¡Entendido!",
    continueWithGoogle: "Continuar con Google",
    continueWithApple: "Continuar con Apple",
    orContinueWith: "O continuar con correo",
    forgotPassword: "¿Olvidaste tu contraseña?",
    loggingIn: "Iniciando sesión...",
    dontHaveAccount: "¿No tienes una cuenta?",
    signUp: "Regístrate",
    fillAllFields: "Por favor, completa todos los campos",
    checkYourEmail: "Revisa Tu Correo",
    resetLinkSent: "Hemos enviado un enlace de restablecimiento de contraseña a:",
    resetLinkInstructions: "Haz clic en el enlace del correo para restablecer tu contraseña. El enlace expirará en 24 horas.",
    backToLogin: "Volver al Inicio de Sesión",
    close: "Cerrar",
    forgotPasswordInstructions: "Ingresa tu dirección de correo y te enviaremos un enlace para restablecer tu contraseña.",
    sendResetLink: "Enviar Enlace de Restablecimiento",
    sendingLink: "Enviando enlace...",
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
    searchFeed: "Rechercher dans le flux...",
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
    delivery: "Livraison",
    estimatedDelivery: "Livraison Estimée",
    freeShipping: "Livraison Gratuite",
    commission: "Votre Commission",
    paymentMethod: "Méthode de Paiement",
    creditCard: "Carte de Crédit",
    paypal: "PayPal",
    applePay: "Apple Pay",
    googlePay: "Google Pay",
    viewChart: "Voir le Graphique",
    closeChart: "Fermer le Graphique",
    todayOffers: "Offres du Jour",
    flashSale: "Vente Flash",
    limitedTime: "Temps Limité",
    inStock: "En Stock",
    outOfStock: "Rupture de Stock",
    businessDays: "jours ouvrables",
    username: "Nom d'utilisateur",
    confirmPassword: "Confirmer le Mot de Passe",
    invalidEmail: "Veuillez entrer une adresse email valide",
    usernameExists: "Le nom d'utilisateur existe déjà",
    usernameAvailable: "Nom d'utilisateur disponible!",
    passwordsDontMatch: "Les mots de passe ne correspondent pas",
    registerAsSeller: "S'inscrire en tant que Vendeur",
    startSellingImmediately: "Commencez à vendre des produits immédiatement",
    storeNamePlaceholder: "Nom de Votre Boutique",
    agreeToTerms: "J'accepte les",
    termsOfService: "Conditions de Service",
    and: "et",
    privacyPolicy: "Politique de Confidentialité",
    creatingAccount: "Création du Compte...",
    alreadyHaveAccount: "Vous avez déjà un compte?",
    login: "Se connecter",
    accountCreated: "Compte Créé avec Succès!",
    verificationEmailSent: "Un email de vérification a été envoyé à:",
    checkEmailInbox: "Veuillez vérifier votre boîte de réception et cliquer sur le lien de vérification pour activer votre compte.",
    gotIt: "Compris!",
    continueWithGoogle: "Continuer avec Google",
    continueWithApple: "Continuer avec Apple",
    orContinueWith: "Ou continuer avec email",
    forgotPassword: "Mot de passe oublié?",
    loggingIn: "Connexion...",
    dontHaveAccount: "Vous n'avez pas de compte?",
    signUp: "S'inscrire",
    fillAllFields: "Veuillez remplir tous les champs",
    checkYourEmail: "Vérifiez Votre Email",
    resetLinkSent: "Nous avons envoyé un lien de réinitialisation du mot de passe à:",
    resetLinkInstructions: "Cliquez sur le lien dans l'email pour réinitialiser votre mot de passe. Le lien expirera dans 24 heures.",
    backToLogin: "Retour à la Connexion",
    close: "Fermer",
    forgotPasswordInstructions: "Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
    sendResetLink: "Envoyer le Lien de Réinitialisation",
    sendingLink: "Envoi du lien...",
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
    searchFeed: "Im Feed suchen...",
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
    delivery: "Lieferung",
    estimatedDelivery: "Geschätzte Lieferung",
    freeShipping: "Kostenloser Versand",
    commission: "Ihre Provision",
    paymentMethod: "Zahlungsmethode",
    creditCard: "Kreditkarte",
    paypal: "PayPal",
    applePay: "Apple Pay",
    googlePay: "Google Pay",
    viewChart: "Diagramm Anzeigen",
    closeChart: "Diagramm Schließen",
    todayOffers: "Heutige Angebote",
    flashSale: "Blitzverkauf",
    limitedTime: "Begrenzte Zeit",
    inStock: "Auf Lager",
    outOfStock: "Nicht Auf Lager",
    businessDays: "Werktage",
    username: "Benutzername",
    confirmPassword: "Passwort Bestätigen",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
    usernameExists: "Benutzername existiert bereits",
    usernameAvailable: "Benutzername verfügbar!",
    passwordsDontMatch: "Passwörter stimmen nicht überein",
    registerAsSeller: "Als Verkäufer Registrieren",
    startSellingImmediately: "Beginnen Sie sofort mit dem Verkauf von Produkten",
    storeNamePlaceholder: "Name Ihres Shops",
    agreeToTerms: "Ich stimme den",
    termsOfService: "Nutzungsbedingungen",
    and: "und",
    privacyPolicy: "Datenschutzrichtlinie",
    creatingAccount: "Konto Wird Erstellt...",
    alreadyHaveAccount: "Haben Sie bereits ein Konto?",
    login: "Anmelden",
    accountCreated: "Konto Erfolgreich Erstellt!",
    verificationEmailSent: "Eine Bestätigungs-E-Mail wurde gesendet an:",
    checkEmailInbox: "Bitte überprüfen Sie Ihren Posteingang und klicken Sie auf den Bestätigungslink, um Ihr Konto zu aktivieren.",
    gotIt: "Verstanden!",
    continueWithGoogle: "Mit Google Fortfahren",
    continueWithApple: "Mit Apple Fortfahren",
    orContinueWith: "Oder mit E-Mail fortfahren",
    forgotPassword: "Passwort vergessen?",
    loggingIn: "Anmeldung...",
    dontHaveAccount: "Haben Sie noch kein Konto?",
    signUp: "Registrieren",
    fillAllFields: "Bitte füllen Sie alle Felder aus",
    checkYourEmail: "Überprüfen Sie Ihre E-Mail",
    resetLinkSent: "Wir haben einen Link zum Zurücksetzen des Passworts gesendet an:",
    resetLinkInstructions: "Klicken Sie auf den Link in der E-Mail, um Ihr Passwort zurückzusetzen. Der Link läuft in 24 Stunden ab.",
    backToLogin: "Zurück zur Anmeldung",
    close: "Schließen",
    forgotPasswordInstructions: "Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts.",
    sendResetLink: "Zurücksetzungslink Senden",
    sendingLink: "Link wird gesendet...",
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
    searchFeed: "在动态中搜索...",
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
    delivery: "配送",
    estimatedDelivery: "预计送达",
    freeShipping: "免费送货",
    commission: "您的佣金",
    paymentMethod: "付款方式",
    creditCard: "信用卡",
    paypal: "PayPal",
    applePay: "Apple Pay",
    googlePay: "Google Pay",
    viewChart: "查看图表",
    closeChart: "关闭图表",
    todayOffers: "今日优惠",
    flashSale: "限时抢购",
    limitedTime: "限时",
    inStock: "有货",
    outOfStock: "缺货",
    businessDays: "工作日",
    username: "用户名",
    confirmPassword: "确认密码",
    invalidEmail: "请输入有效的电子邮件地址",
    usernameExists: "用户名已存在",
    usernameAvailable: "用户名可用！",
    passwordsDontMatch: "密码不匹配",
    registerAsSeller: "注册为卖家",
    startSellingImmediately: "立即开始销售产品",
    storeNamePlaceholder: "您的商店名称",
    agreeToTerms: "我同意",
    termsOfService: "服务条款",
    and: "和",
    privacyPolicy: "隐私政策",
    creatingAccount: "正在创建帐户...",
    alreadyHaveAccount: "已有帐户？",
    login: "登录",
    accountCreated: "帐户创建成功！",
    verificationEmailSent: "验证电子邮件已发送至：",
    checkEmailInbox: "请检查您的收件箱并点击验证链接以激活您的帐户。",
    gotIt: "知道了！",
    continueWithGoogle: "使用Google继续",
    continueWithApple: "使用Apple继续",
    orContinueWith: "或使用电子邮件继续",
    forgotPassword: "忘记密码？",
    loggingIn: "正在登录...",
    dontHaveAccount: "没有帐户？",
    signUp: "注册",
    fillAllFields: "请填写所有字段",
    checkYourEmail: "检查您的电子邮件",
    resetLinkSent: "我们已向以下地址发送了密码重置链接：",
    resetLinkInstructions: "点击电子邮件中的链接以重置您的密码。该链接将在24小时后过期。",
    backToLogin: "返回登录",
    close: "关闭",
    forgotPasswordInstructions: "输入您的电子邮件地址，我们将向您发送重置密码的链接。",
    sendResetLink: "发送重置链接",
    sendingLink: "正在发送链接...",
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
    searchFeed: "フィードで検索...",
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
    delivery: "配送",
    estimatedDelivery: "配送予定",
    freeShipping: "送料無料",
    commission: "あなたの手数料",
    paymentMethod: "支払い方法",
    creditCard: "クレジットカード",
    paypal: "PayPal",
    applePay: "Apple Pay",
    googlePay: "Google Pay",
    viewChart: "チャートを表示",
    closeChart: "チャートを閉じる",
    todayOffers: "本日のオファー",
    flashSale: "フラッシュセール",
    limitedTime: "期間限定",
    inStock: "在庫あり",
    outOfStock: "在庫切れ",
    businessDays: "営業日",
    username: "ユーザー名",
    confirmPassword: "パスワードを確認",
    invalidEmail: "有効なメールアドレスを入力してください",
    usernameExists: "ユーザー名は既に存在します",
    usernameAvailable: "ユーザー名は利用可能です！",
    passwordsDontMatch: "パスワードが一致しません",
    registerAsSeller: "販売者として登録",
    startSellingImmediately: "すぐに商品の販売を開始",
    storeNamePlaceholder: "あなたのストア名",
    agreeToTerms: "私は同意します",
    termsOfService: "利用規約",
    and: "と",
    privacyPolicy: "プライバシーポリシー",
    creatingAccount: "アカウントを作成中...",
    alreadyHaveAccount: "既にアカウントをお持ちですか？",
    login: "ログイン",
    accountCreated: "アカウントが正常に作成されました！",
    verificationEmailSent: "確認メールが送信されました：",
    checkEmailInbox: "受信トレイを確認し、確認リンクをクリックしてアカウントをアクティブ化してください。",
    gotIt: "了解しました！",
    continueWithGoogle: "Googleで続行",
    continueWithApple: "Appleで続行",
    orContinueWith: "またはメールで続行",
    forgotPassword: "パスワードをお忘れですか？",
    loggingIn: "ログイン中...",
    dontHaveAccount: "アカウントをお持ちでないですか？",
    signUp: "サインアップ",
    fillAllFields: "すべてのフィールドを入力してください",
    checkYourEmail: "メールを確認してください",
    resetLinkSent: "パスワードリセットリンクを送信しました：",
    resetLinkInstructions: "メール内のリンクをクリックしてパスワードをリセットしてください。リンクは24時間後に期限切れになります。",
    backToLogin: "ログインに戻る",
    close: "閉じる",
    forgotPasswordInstructions: "メールアドレスを入力すると、パスワードをリセットするためのリンクを送信します。",
    sendResetLink: "リセットリンクを送信",
    sendingLink: "リンクを送信中...",
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
    searchFeed: "البحث في التغذية...",
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
    delivery: "التوصيل",
    estimatedDelivery: "التوصيل المقدر",
    freeShipping: "شحن مجاني",
    commission: "عمولتك",
    paymentMethod: "طريقة الدفع",
    creditCard: "بطاقة الائتمان",
    paypal: "PayPal",
    applePay: "Apple Pay",
    googlePay: "Google Pay",
    viewChart: "عرض الرسم البياني",
    closeChart: "إغلاق الرسم البياني",
    todayOffers: "عروض اليوم",
    flashSale: "تخفيضات سريعة",
    limitedTime: "وقت محدود",
    inStock: "متوفر",
    outOfStock: "غير متوفر",
    businessDays: "أيام عمل",
    username: "اسم المستخدم",
    confirmPassword: "تأكيد كلمة المرور",
    invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صالح",
    usernameExists: "اسم المستخدم موجود بالفعل",
    usernameAvailable: "اسم المستخدم متاح!",
    passwordsDontMatch: "كلمات المرور غير متطابقة",
    registerAsSeller: "التسجيل كبائع",
    startSellingImmediately: "ابدأ في بيع المنتجات على الفور",
    storeNamePlaceholder: "اسم متجرك",
    agreeToTerms: "أوافق على",
    termsOfService: "شروط الخدمة",
    and: "و",
    privacyPolicy: "سياسة الخصوصية",
    creatingAccount: "جاري إنشاء الحساب...",
    alreadyHaveAccount: "هل لديك حساب بالفعل؟",
    login: "تسجيل الدخول",
    accountCreated: "تم إنشاء الحساب بنجاح!",
    verificationEmailSent: "تم إرسال بريد إلكتروني للتحقق إلى:",
    checkEmailInbox: "يرجى التحقق من صندوق الوارد الخاص بك والنقر على رابط التحقق لتفعيل حسابك.",
    gotIt: "فهمت!",
    continueWithGoogle: "المتابعة مع Google",
    continueWithApple: "المتابعة مع Apple",
    orContinueWith: "أو المتابعة بالبريد الإلكتروني",
    forgotPassword: "نسيت كلمة المرور؟",
    loggingIn: "جاري تسجيل الدخول...",
    dontHaveAccount: "ليس لديك حساب؟",
    signUp: "سجل",
    fillAllFields: "يرجى ملء جميع الحقول",
    checkYourEmail: "تحقق من بريدك الإلكتروني",
    resetLinkSent: "لقد أرسلنا رابط إعادة تعيين كلمة المرور إلى:",
    resetLinkInstructions: "انقر على الرابط في البريد الإلكتروني لإعادة تعيين كلمة المرور الخاصة بك. سينتهي الرابط خلال 24 ساعة.",
    backToLogin: "العودة إلى تسجيل الدخول",
    close: "إغلاق",
    forgotPasswordInstructions: "أدخل عنوان بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور الخاصة بك.",
    sendResetLink: "إرسال رابط إعادة التعيين",
    sendingLink: "جاري إرسال الرابط...",
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
    searchFeed: "Поиск в ленте...",
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
    delivery: "Доставка",
    estimatedDelivery: "Ожидаемая Доставка",
    freeShipping: "Бесплатная Доставка",
    commission: "Ваша Комиссия",
    paymentMethod: "Способ Оплаты",
    creditCard: "Кредитная Карта",
    paypal: "PayPal",
    applePay: "Apple Pay",
    googlePay: "Google Pay",
    viewChart: "Посмотреть График",
    closeChart: "Закрыть График",
    todayOffers: "Предложения Дня",
    flashSale: "Молниеносная Распродажа",
    limitedTime: "Ограниченное Время",
    inStock: "В Наличии",
    outOfStock: "Нет в Наличии",
    businessDays: "рабочих дней",
    username: "Имя пользователя",
    confirmPassword: "Подтвердите Пароль",
    invalidEmail: "Пожалуйста, введите действительный адрес электронной почты",
    usernameExists: "Имя пользователя уже существует",
    usernameAvailable: "Имя пользователя доступно!",
    passwordsDontMatch: "Пароли не совпадают",
    registerAsSeller: "Зарегистрироваться как Продавец",
    startSellingImmediately: "Начните продавать товары немедленно",
    storeNamePlaceholder: "Название Вашего Магазина",
    agreeToTerms: "Я согласен с",
    termsOfService: "Условиями Обслуживания",
    and: "и",
    privacyPolicy: "Политикой Конфиденциальности",
    creatingAccount: "Создание Аккаунта...",
    alreadyHaveAccount: "Уже есть аккаунт?",
    login: "Войти",
    accountCreated: "Аккаунт Успешно Создан!",
    verificationEmailSent: "Письмо с подтверждением отправлено на:",
    checkEmailInbox: "Пожалуйста, проверьте свой почтовый ящик и нажмите на ссылку подтверждения, чтобы активировать свою учетную запись.",
    gotIt: "Понятно!",
    continueWithGoogle: "Продолжить с Google",
    continueWithApple: "Продолжить с Apple",
    orContinueWith: "Или продолжить с электронной почтой",
    forgotPassword: "Забыли пароль?",
    loggingIn: "Вход...",
    dontHaveAccount: "Нет аккаунта?",
    signUp: "Зарегистрироваться",
    fillAllFields: "Пожалуйста, заполните все поля",
    checkYourEmail: "Проверьте Вашу Электронную Почту",
    resetLinkSent: "Мы отправили ссылку для сброса пароля на:",
    resetLinkInstructions: "Нажмите на ссылку в письме, чтобы сбросить пароль. Ссылка истечет через 24 часа.",
    backToLogin: "Вернуться к Входу",
    close: "Закрыть",
    forgotPasswordInstructions: "Введите свой адрес электронной почты, и мы отправим вам ссылку для сброса пароля.",
    sendResetLink: "Отправить Ссылку для Сброса",
    sendingLink: "Отправка ссылки...",
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
    searchFeed: "फ़ीड में खोजें...",
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
    delivery: "डिलीवरी",
    estimatedDelivery: "अनुमानित डिलीवरी",
    freeShipping: "मुफ़्त शिपिंग",
    commission: "आपका कमीशन",
    paymentMethod: "भुगतान विधि",
    creditCard: "क्रेडिट कार्ड",
    paypal: "PayPal",
    applePay: "Apple Pay",
    googlePay: "Google Pay",
    viewChart: "चार्ट देखें",
    closeChart: "चार्ट बंद करें",
    todayOffers: "आज के ऑफर",
    flashSale: "फ्लैश सेल",
    limitedTime: "सीमित समय",
    inStock: "स्टॉक में",
    outOfStock: "स्टॉक में नहीं",
    businessDays: "कार्य दिवस",
    username: "उपयोगकर्ता नाम",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    invalidEmail: "कृपया एक मान्य ईमेल पता दर्ज करें",
    usernameExists: "उपयोगकर्ता नाम पहले से मौजूद है",
    usernameAvailable: "उपयोगकर्ता नाम उपलब्ध है!",
    passwordsDontMatch: "पासवर्ड मेल नहीं खाते",
    registerAsSeller: "विक्रेता के रूप में पंजीकरण करें",
    startSellingImmediately: "तुरंत उत्पाद बेचना शुरू करें",
    storeNamePlaceholder: "आपके स्टोर का नाम",
    agreeToTerms: "मैं सहमत हूं",
    termsOfService: "सेवा की शर्तें",
    and: "और",
    privacyPolicy: "गोपनीयता नीति",
    creatingAccount: "खाता बनाया जा रहा है...",
    alreadyHaveAccount: "पहले से खाता है?",
    login: "लॉग इन करें",
    accountCreated: "खाता सफलतापूर्वक बनाया गया!",
    verificationEmailSent: "एक सत्यापन ईमेल भेजा गया है:",
    checkEmailInbox: "कृपया अपने इनबॉक्स की जांच करें और अपने खाते को सक्रिय करने के लिए सत्यापन लिंक पर क्लिक करें।",
    gotIt: "समझ गया!",
    continueWithGoogle: "Google के साथ जारी रखें",
    continueWithApple: "Apple के साथ जारी रखें",
    orContinueWith: "या ईमेल के साथ जारी रखें",
    forgotPassword: "पासवर्ड भूल गए?",
    loggingIn: "लॉग इन हो रहा है...",
    dontHaveAccount: "खाता नहीं है?",
    signUp: "साइन अप करें",
    fillAllFields: "कृपया सभी फ़ील्ड भरें",
    checkYourEmail: "अपना ईमेल जांचें",
    resetLinkSent: "हमने पासवर्ड रीसेट लिंक भेजा है:",
    resetLinkInstructions: "अपना पासवर्ड रीसेट करने के लिए ईमेल में लिंक पर क्लिक करें। लिंक 24 घंटे में समाप्त हो जाएगा।",
    backToLogin: "लॉगिन पर वापस जाएं",
    close: "बंद करें",
    forgotPasswordInstructions: "अपना ईमेल पता दर्ज करें और हम आपको अपना पासवर्ड रीसेट करने के लिए एक लिंक भेजेंगे।",
    sendResetLink: "रीसेट लिंक भेजें",
    sendingLink: "लिंक भेजा जा रहा है...",
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
  chartData: number[];
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
  {
    id: 4,
    title: "Designer Leather Bag",
    seller: "@fashionista",
    sellerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    price: 3499.90,
    priceChange: 5.3,
    marketCap: "1.8M",
    likes: 19800,
    comments: 723,
    shares: 1120,
    videoUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=700&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=700&fit=crop",
    category: "Fashion",
    inStock: true,
    rating: 4.9,
    reviews: 445,
    deliveryDays: 4,
  },
  {
    id: 5,
    title: "Smart Fitness Tracker",
    seller: "@techfit",
    sellerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    price: 599.90,
    originalPrice: 799.90,
    priceChange: 15.2,
    marketCap: "950K",
    likes: 27300,
    comments: 891,
    shares: 1450,
    videoUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=700&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=700&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.6,
    reviews: 678,
    deliveryDays: 3,
    isFlashSale: true,
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
    chartData: [176.5, 177.2, 176.8, 178.1, 177.5, 178.9, 178.45],
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
    chartData: [248.2, 246.5, 244.8, 243.2, 245.1, 243.8, 242.84],
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
    chartData: [153.8, 154.5, 155.2, 156.1, 155.8, 157.2, 156.78],
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
    chartData: [139.5, 140.2, 140.8, 141.5, 140.9, 141.8, 141.23],
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
    chartData: [374.8, 376.2, 377.5, 379.1, 377.8, 380.0, 378.91],
  },
  {
    id: 6,
    symbol: "BTC",
    name: "Bitcoin",
    price: 43892.45,
    change: -1234.56,
    changePercent: -2.73,
    volume: "28.4B",
    marketCap: "858B",
    high24h: 45127.00,
    low24h: 43650.00,
    chartData: [45000, 44500, 44200, 43900, 44100, 43700, 43892],
  },
  {
    id: 7,
    symbol: "ETH",
    name: "Ethereum",
    price: 2287.34,
    change: 78.23,
    changePercent: 3.54,
    volume: "15.2B",
    marketCap: "275B",
    high24h: 2310.50,
    low24h: 2209.10,
    chartData: [2210, 2245, 2268, 2290, 2275, 2305, 2287],
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
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"card" | "paypal" | "apple" | "google">("card");

  const t = translations[language];
  const currentProduct = products[currentIndex];
  const selectedCountry = countries.find(c => c.code === country) || countries[0];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === "pt" ? "pt-BR" : language === "en" ? "en-US" : language, {
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
    return date.toLocaleDateString(language === "pt" ? "pt-BR" : language === "en" ? "en-US" : language, {
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

  // Language/Country Modal
  const LanguageModal = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-6 max-h-[80vh] overflow-y-auto bg-white border-2 border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{t.language} & {t.country}</h2>
          <Button variant="ghost" size="icon" onClick={() => setShowLanguageModal(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">{t.language}</h3>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as Language)}
                  className={`p-3 rounded-xl border-2 transition-all text-left ${
                    language === lang.code
                      ? "border-black bg-gray-100"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <span className="text-2xl mr-2">{lang.flag}</span>
                  <span className="font-medium text-sm text-gray-900">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">{t.country}</h3>
            <div className="grid grid-cols-2 gap-2">
              {countries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCountry(c.code)}
                  className={`p-3 rounded-xl border-2 transition-all text-left ${
                    country === c.code
                      ? "border-black bg-gray-100"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <span className="text-2xl mr-2">{c.flag}</span>
                  <div>
                    <p className="font-medium text-sm text-gray-900">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.currency}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <Button
          onClick={() => setShowLanguageModal(false)}
          className="w-full mt-6 bg-black hover:bg-gray-800 text-white rounded-xl"
        >
          {t.cancel}
        </Button>
      </Card>
    </div>
  );

  // Stock Chart Modal
  const StockChartModal = ({ stock }: { stock: Stock }) => {
    const maxPrice = Math.max(...stock.chartData);
    const minPrice = Math.min(...stock.chartData);
    const priceRange = maxPrice - minPrice;

    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6">
        <Card className="w-full max-w-2xl p-6 bg-white border-2 border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{stock.symbol}</h2>
              <p className="text-gray-500 text-sm">{stock.name}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setSelectedStock(null)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-3 mb-2">
              <p className="text-4xl font-bold text-gray-900">${stock.price.toFixed(2)}</p>
              <div className={`flex items-center gap-1 ${stock.change > 0 ? "text-green-600" : "text-red-600"}`}>
                {stock.change > 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                <span className="font-semibold text-lg">
                  {stock.change > 0 ? "+" : ""}{stock.changePercent}%
                </span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="relative h-64">
              <svg className="w-full h-full" viewBox="0 0 700 256">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 64}
                    x2="700"
                    y2={i * 64}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                ))}

                {/* Chart line */}
                <polyline
                  points={stock.chartData
                    .map((price, i) => {
                      const x = (i / (stock.chartData.length - 1)) * 700;
                      const y = 256 - ((price - minPrice) / priceRange) * 256;
                      return `${x},${y}`;
                    })
                    .join(" ")}
                  fill="none"
                  stroke={stock.change > 0 ? "#16a34a" : "#dc2626"}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data points */}
                {stock.chartData.map((price, i) => {
                  const x = (i / (stock.chartData.length - 1)) * 700;
                  const y = 256 - ((price - minPrice) / priceRange) * 256;
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill={stock.change > 0 ? "#16a34a" : "#dc2626"}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 text-xs mb-1">{t.volume}</p>
              <p className="text-gray-900 font-bold">{stock.volume}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 text-xs mb-1">{t.high24h}</p>
              <p className="text-gray-900 font-bold">${stock.high24h}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 text-xs mb-1">{t.low24h}</p>
              <p className="text-gray-900 font-bold">${stock.low24h}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 text-xs mb-1">Market Cap</p>
              <p className="text-gray-900 font-bold">{stock.marketCap}</p>
            </div>
          </div>

          <Button
            onClick={() => setSelectedStock(null)}
            className="w-full mt-6 bg-black hover:bg-gray-800 text-white rounded-xl"
          >
            {t.closeChart}
          </Button>
        </Card>
      </div>
    );
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

        {/* Product Info - Left Side */}
        <div className="absolute bottom-24 left-0 right-0 z-10 px-6 pb-8 space-y-4">
          {/* Seller Info */}
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

          {/* Product Title */}
          <h2 className="text-white text-2xl font-bold leading-tight max-w-md">
            {displayProduct.title}
          </h2>

          {/* Market Info */}
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

          {/* CTA Button */}
          <Button 
            size="lg"
            onClick={() => !isAuthenticated && setAuthModalType("signup")}
            className="w-full bg-white hover:bg-gray-100 text-black font-bold text-lg py-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.02]"
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

        {/* Progress Indicator */}
        <div className="absolute top-32 left-6 right-6 z-20 flex gap-2">
          {displayProducts.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                index === currentIndex % displayProducts.length
                  ? "bg-white"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  // Marketplace Tab (Amazon Style)
  const MarketplaceTab = () => (
    <div className="min-h-screen bg-white pb-24">
      {/* Flash Sale Banner */}
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

      {/* Search Header */}
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

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[t.all, t.electronics, t.fashion, t.home, t.sports, t.beauty].map((cat) => (
            <Badge
              key={cat}
              variant="secondary"
              className="px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 whitespace-nowrap bg-gray-100 text-gray-900"
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Today's Offers */}
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
                <Badge className="absolute top-2 right-2 bg-white text-gray-900 border border-gray-200">
                  {product.category}
                </Badge>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-sm line-clamp-2 text-gray-900">{product.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-black text-black" />
                  <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                <div className="space-y-1">
                  {product.originalPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </p>
                  )}
                  <div className="flex items-baseline gap-2">
                    <p className="text-xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </p>
                    {product.originalPrice && (
                      <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Truck className="w-4 h-4" />
                  <span>{t.estimatedDelivery}: {getDeliveryDate(product.deliveryDays)}</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-xs text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>{t.commission}:</span>
                    <span className="font-bold text-green-600">
                      {formatPrice(calculateCommission(product.price))}
                    </span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  onClick={() => !isAuthenticated && setAuthModalType("signup")}
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

  // Market Tab (Financial Market)
  const MarketTab = () => (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="bg-black text-white px-6 py-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold mb-2">{t.realTimeMarket}</h2>
        <p className="text-gray-400 text-sm">{t.trackStocks}</p>
      </div>

      {/* Market Overview */}
      <div className="px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50">
        <Card className="bg-white border-2 border-gray-200 p-4">
          <p className="text-gray-500 text-xs mb-1">S&P 500</p>
          <p className="text-gray-900 text-xl font-bold">4,783.45</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-green-600" />
            <span className="text-green-600 text-sm font-semibold">+1.2%</span>
          </div>
        </Card>
        <Card className="bg-white border-2 border-gray-200 p-4">
          <p className="text-gray-500 text-xs mb-1">NASDAQ</p>
          <p className="text-gray-900 text-xl font-bold">15,011.35</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-green-600" />
            <span className="text-green-600 text-sm font-semibold">+0.8%</span>
          </div>
        </Card>
        <Card className="bg-white border-2 border-gray-200 p-4">
          <p className="text-gray-500 text-xs mb-1">BTC/USD</p>
          <p className="text-gray-900 text-xl font-bold">$43,892</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingDown className="w-3 h-3 text-red-600" />
            <span className="text-red-600 text-sm font-semibold">-2.3%</span>
          </div>
        </Card>
        <Card className="bg-white border-2 border-gray-200 p-4">
          <p className="text-gray-500 text-xs mb-1">ETH/USD</p>
          <p className="text-gray-900 text-xl font-bold">$2,287</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-green-600" />
            <span className="text-green-600 text-sm font-semibold">+3.5%</span>
          </div>
        </Card>
      </div>

      {/* Stocks List */}
      <div className="px-6 py-6 space-y-3">
        {stocks.map((stock) => (
          <Card 
            key={stock.id} 
            className="bg-white border-2 border-gray-200 p-4 hover:border-gray-400 transition-all cursor-pointer"
            onClick={() => setSelectedStock(stock)}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{stock.symbol.slice(0, 2)}</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">{stock.symbol}</p>
                    <p className="text-gray-500 text-xs">{stock.name}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <p className="text-gray-500">{t.volume}</p>
                    <p className="text-gray-900 font-medium">{stock.volume}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">{t.high24h}</p>
                    <p className="text-gray-900 font-medium">${stock.high24h}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">{t.low24h}</p>
                    <p className="text-gray-900 font-medium">${stock.low24h}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-900 text-2xl font-bold mb-1">${stock.price}</p>
                <div className="flex items-center gap-1 justify-end mb-2">
                  {stock.change > 0 ? (
                    <>
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 font-semibold">
                        +{stock.changePercent}%
                      </span>
                    </>
                  ) : (
                    <>
                      <TrendingDown className="w-4 h-4 text-red-600" />
                      <span className="text-red-600 font-semibold">
                        {stock.changePercent}%
                      </span>
                    </>
                  )}
                </div>
                <Button size="sm" variant="outline" className="rounded-lg border-gray-300">
                  <BarChart3 className="w-4 h-4 mr-1" />
                  {t.viewChart}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  // Profile Tab
  const ProfileTab = () => (
    <div className="min-h-screen bg-white pb-24">
      {isAuthenticated ? (
        <div className="px-6 py-8 space-y-6">
          {/* Profile Header */}
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

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 hover:shadow-lg transition-all cursor-pointer border-2 border-gray-200">
              <Package className="w-8 h-8 text-black mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">{t.myProducts}</h3>
              <p className="text-gray-500 text-sm">{t.manageListings}</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all cursor-pointer border-2 border-gray-200">
              <CreditCard className="w-8 h-8 text-black mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">{t.payments}</h3>
              <p className="text-gray-500 text-sm">{t.methodsHistory}</p>
            </Card>
          </div>

          {/* Payment Methods */}
          <Card className="p-6 border-2 border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              {t.paymentMethods}
            </h3>
            
            {/* Payment Method Selection */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                onClick={() => setSelectedPaymentMethod("card")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedPaymentMethod === "card"
                    ? "border-black bg-gray-100"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <CreditCard className="w-6 h-6 mb-2 mx-auto" />
                <p className="text-sm font-medium text-gray-900">{t.creditCard}</p>
              </button>
              <button
                onClick={() => setSelectedPaymentMethod("paypal")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedPaymentMethod === "paypal"
                    ? "border-black bg-gray-100"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <DollarSign className="w-6 h-6 mb-2 mx-auto" />
                <p className="text-sm font-medium text-gray-900">{t.paypal}</p>
              </button>
              <button
                onClick={() => setSelectedPaymentMethod("apple")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedPaymentMethod === "apple"
                    ? "border-black bg-gray-100"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <Package className="w-6 h-6 mb-2 mx-auto" />
                <p className="text-sm font-medium text-gray-900">{t.applePay}</p>
              </button>
              <button
                onClick={() => setSelectedPaymentMethod("google")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedPaymentMethod === "google"
                    ? "border-black bg-gray-100"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <Globe className="w-6 h-6 mb-2 mx-auto" />
                <p className="text-sm font-medium text-gray-900">{t.googlePay}</p>
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-black rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">•••• 4532</p>
                    <p className="text-gray-500 text-xs">{t.expires} 12/25</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-gray-200 text-gray-900">{t.primary}</Badge>
              </div>
            </div>
            <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-xl">
              <Plus className="w-4 h-4 mr-2" />
              {t.addMethod}
            </Button>
          </Card>

          {/* Logout */}
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
            <Button variant="ghost" size="sm" className="text-gray-700">
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
      
      {showLanguageModal && <LanguageModal />}
      {selectedStock && <StockChartModal stock={selectedStock} />}
    </div>
  );
}
