// Utility functions for authentication validation

export interface PasswordStrength {
  score: 0 | 1 | 2 | 3;
  label: "Weak" | "Medium" | "Strong" | "Very Strong";
  color: string;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const checkPasswordStrength = (password: string): PasswordStrength => {
  let score = 0;
  
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  
  if (score <= 2) {
    return { score: 0, label: "Weak", color: "text-red-600" };
  } else if (score === 3) {
    return { score: 1, label: "Medium", color: "text-yellow-600" };
  } else if (score === 4) {
    return { score: 2, label: "Strong", color: "text-green-600" };
  } else {
    return { score: 3, label: "Very Strong", color: "text-emerald-600" };
  }
};

export const validateUsername = async (username: string): Promise<boolean> => {
  // Simulate API call to check if username exists
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Simulate some usernames being taken
  const takenUsernames = ["admin", "user", "test", "neurox", "john"];
  return !takenUsernames.includes(username.toLowerCase());
};

export const sendVerificationEmail = async (email: string): Promise<boolean> => {
  // Simulate sending verification email
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(`Verification email sent to: ${email}`);
  return true;
};

export const validatePasswordMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword && password.length > 0;
};
