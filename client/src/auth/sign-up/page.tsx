import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <SignUp
        path="/auth/sign-up"
        routing="path"
        signInUrl="/auth/sign-in"
        afterSignUpUrl="/dashboard"
        afterSignInUrl="/dashboard"
        appearance={{
          elements: {
            footer: {
              "& > div:last-child": { display: "none" }, // Hides only the Clerk branding
            },
          },
        }}
      />
    </div>
  );
};

export default SignUpPage;