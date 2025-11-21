"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Check, AlertCircle, Loader2, Mail, Lock, User, Store } from "lucide-react";
import { 
  validateEmail, 
  checkPasswordStrength, 
  validateUsername, 
  validatePasswordMatch,
  sendVerificationEmail 
} from "@/lib/auth-utils";

interface SignupModalProps {
  onClose: () => void;
  onSuccess: () => void;
  onSwitchToLogin: () => void;
  translations: any;
}

export default function SignupModal({ onClose, onSuccess, onSwitchToLogin, translations }: SignupModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [registerAsSeller, setRegisterAsSeller] = useState(false);
  const [storeName, setStoreName] = useState("");
  
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [usernameValid, setUsernameValid] = useState<boolean | null>(null);
  const [usernameChecking, setUsernameChecking] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const passwordStrength = checkPasswordStrength(password);

  // Email validation
  useEffect(() => {
    if (email.length > 0) {
      setEmailValid(validateEmail(email));
    } else {
      setEmailValid(null);
    }
  }, [email]);

  // Username validation
  useEffect(() => {
    if (username.length >= 3) {
      setUsernameChecking(true);
      const timer = setTimeout(async () => {
        const isAvailable = await validateUsername(username);
        setUsernameValid(isAvailable);
        setUsernameChecking(false);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setUsernameValid(null);
    }
  }, [username]);

  // Password match validation
  useEffect(() => {
    if (confirmPassword.length > 0) {
      setPasswordMatch(validatePasswordMatch(password, confirmPassword));
    } else {
      setPasswordMatch(null);
    }
  }, [password, confirmPassword]);

  const isFormValid = 
    fullName.length > 0 &&
    emailValid === true &&
    usernameValid === true &&
    password.length >= 8 &&
    passwordMatch === true &&
    agreeTerms &&
    (!registerAsSeller || storeName.length > 0);

  const handleSubmit = async () => {
    if (!isFormValid) return;
    
    setIsSubmitting(true);
    
    // Simulate account creation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Send verification email
    await sendVerificationEmail(email);
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8 bg-white border-2 border-gray-200 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {translations.accountCreated || "Account Created Successfully!"}
          </h2>
          <p className="text-gray-600 mb-2">
            {translations.verificationEmailSent || "A verification email has been sent to:"}
          </p>
          <p className="text-gray-900 font-semibold mb-6">{email}</p>
          <p className="text-sm text-gray-500 mb-6">
            {translations.checkEmailInbox || "Please check your inbox and click the verification link to activate your account."}
          </p>
          <Button
            onClick={onClose}
            className="w-full bg-black hover:bg-gray-800 text-white rounded-xl py-6"
          >
            {translations.gotIt || "Got it!"}
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
      <Card className="w-full max-w-md p-8 bg-white border-2 border-gray-200 my-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {translations.createAccount || "Create Account"}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              {translations.fullName || "Full Name"}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="John Smith"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="pl-10 rounded-xl border-gray-300"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              {translations.email || "Email"}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`pl-10 pr-10 rounded-xl ${
                  emailValid === false ? "border-red-500" : emailValid === true ? "border-green-500" : "border-gray-300"
                }`}
              />
              {emailValid !== null && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {emailValid ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              )}
            </div>
            {emailValid === false && (
              <p className="text-xs text-red-600 mt-1">
                {translations.invalidEmail || "Please enter a valid email address"}
              </p>
            )}
          </div>

          {/* Username */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              {translations.username || "Username"}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">@</span>
              <Input
                placeholder="johnsmith"
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
                className={`pl-8 pr-10 rounded-xl ${
                  usernameValid === false ? "border-red-500" : usernameValid === true ? "border-green-500" : "border-gray-300"
                }`}
              />
              {usernameChecking && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
                </div>
              )}
              {!usernameChecking && usernameValid !== null && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {usernameValid ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <X className="w-5 h-5 text-red-600" />
                  )}
                </div>
              )}
            </div>
            {usernameValid === false && (
              <p className="text-xs text-red-600 mt-1">
                {translations.usernameExists || "Username already exists"}
              </p>
            )}
            {usernameValid === true && (
              <p className="text-xs text-green-600 mt-1">
                {translations.usernameAvailable || "Username available!"}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              {translations.password || "Password"}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 rounded-xl border-gray-300"
              />
            </div>
            {password.length > 0 && (
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      passwordStrength.score === 0 ? "w-1/4 bg-red-500" :
                      passwordStrength.score === 1 ? "w-1/2 bg-yellow-500" :
                      passwordStrength.score === 2 ? "w-3/4 bg-green-500" :
                      "w-full bg-emerald-500"
                    }`}
                  />
                </div>
                <span className={`text-xs font-medium ${passwordStrength.color}`}>
                  {passwordStrength.label}
                </span>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              {translations.confirmPassword || "Confirm Password"}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`pl-10 pr-10 rounded-xl ${
                  passwordMatch === false ? "border-red-500" : passwordMatch === true ? "border-green-500" : "border-gray-300"
                }`}
              />
              {passwordMatch !== null && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {passwordMatch ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <X className="w-5 h-5 text-red-600" />
                  )}
                </div>
              )}
            </div>
            {passwordMatch === false && (
              <p className="text-xs text-red-600 mt-1">
                {translations.passwordsDontMatch || "Passwords don't match"}
              </p>
            )}
          </div>

          {/* Register as Seller */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={registerAsSeller}
                onChange={(e) => setRegisterAsSeller(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {translations.registerAsSeller || "Register as Seller"}
                </p>
                <p className="text-xs text-gray-500">
                  {translations.startSellingImmediately || "Start selling products immediately"}
                </p>
              </div>
            </label>
            
            {registerAsSeller && (
              <div className="mt-3">
                <div className="relative">
                  <Store className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder={translations.storeNamePlaceholder || "Your Store Name"}
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="pl-10 rounded-xl border-gray-300"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 mt-0.5"
              />
              <p className="text-sm text-gray-700">
                {translations.agreeToTerms || "I agree to the"}{" "}
                <button className="text-black font-semibold underline">
                  {translations.termsOfService || "Terms of Service"}
                </button>{" "}
                {translations.and || "and"}{" "}
                <button className="text-black font-semibold underline">
                  {translations.privacyPolicy || "Privacy Policy"}
                </button>
              </p>
            </label>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-black hover:bg-gray-800 text-white rounded-xl py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {translations.creatingAccount || "Creating Account..."}
              </>
            ) : (
              translations.createAccount || "Create Account"
            )}
          </Button>

          {/* Switch to Login */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {translations.alreadyHaveAccount || "Already have an account?"}{" "}
              <button
                onClick={onSwitchToLogin}
                className="text-black font-semibold underline"
              >
                {translations.login || "Log in"}
              </button>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
