export default function returnSignInMessage(errorMessage) {
  switch (errorMessage) {
    case "Firebase: Error (auth/user-not-found).":
    case "Firebase: Error (auth/wrong-password).":
      return "Invalid email or password";

    case "Email isn't verified":
      return "Your email is not verified. Please follow the link that was sent to your email.";

    default:
      return "Internal server error. Please try again later.";
  }
}
