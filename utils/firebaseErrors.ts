export function getFriendlyErrorMessage(error: any): string {
  // Log the original error in development mode
  if (process.env.NODE_ENV === "development") {
    console.error("Firebase Auth Error:", error);
  }

  const code = error?.code || "";

  switch (code) {
    case "auth/email-already-in-use":
      return "This email address is already registered. Please log in instead.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "Password is too weak. Please use at least 6 characters.";
    case "auth/wrong-password":
    case "auth/user-not-found":
    case "auth/invalid-credential":
      return "Invalid email address or password. Please try again.";
    case "auth/user-disabled":
      return "This user account has been disabled. Contact support for help.";
    case "auth/too-many-requests":
      return "Too many unsuccessful attempts. Access has been temporarily locked. Please try again later.";
    case "auth/popup-closed-by-user":
      return "Google sign-in popup was closed before completion. Please try again.";
    case "auth/network-request-failed":
      return "A network error occurred. Please check your connection and try again.";
    default:
      return error?.message || "An unexpected authentication error occurred. Please try again.";
  }
}
