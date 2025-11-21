"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { X, Mail, Loader2, Check } from "lucide-react";
import { validateEmail } from "@/lib/auth-utils";

interface ForgotPasswordModalProps {
  onClose: () => void;
  onBackToLogin: () => void;
  translations: any;
}

export default function ForgotPasswordModal({ 
  onClose, 
  onBackToLogin,
  translations 
}: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!email || !validateEmail(email)) {
      setError(translations.invalidEmail || "Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    // Simulate sending reset email
    await new Promise(resolve => setTimeout(resolve, 1500));

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
            {translations.checkYourEmail || "Check Your Email"}
          </h2>
          <p className="text-gray-600 mb-2">
            {translations.resetLinkSent || "We've sent a password reset link to:"}
          </p>
          <p className="text-gray-900 font-semibold mb-6">{email}</p>
          <p className="text-sm text-gray-500 mb-6">
            {translations.resetLinkInstructions || "Click the link in the email to reset your password. The link will expire in 24 hours."}
          </p>
          <div className="space-y-3">
            <Button
              onClick={onBackToLogin}
              className="w-full bg-black hover:bg-gray-800 text-white rounded-xl py-6"
            >
              {translations.backToLogin || "Back to Log In"}
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full rounded-xl py-6 border-2 border-gray-200"
            >
              {translations.close || "Close"}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 bg-white border-2 border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {translations.forgotPassword || "Forgot Password"}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <p className="text-gray-600 mb-6">
          {translations.forgotPasswordInstructions || "Enter your email address and we'll send you a link to reset your password."}
        </p>

        <div className="space-y-4">
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
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                className="pl-10 rounded-xl border-gray-300"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-black hover:bg-gray-800 text-white rounded-xl py-6 text-lg font-semibold disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {translations.sendingLink || "Sending link..."}
              </>
            ) : (
              translations.sendResetLink || "Send Reset Link"
            )}
          </Button>

          {/* Back to Login */}
          <div className="text-center">
            <button
              onClick={onBackToLogin}
              className="text-sm text-black font-semibold hover:underline"
            >
              {translations.backToLogin || "Back to Log In"}
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
