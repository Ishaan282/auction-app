import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react"; // Clerk hook to check authentication
import Home from "./pages/home";
import Dashboard from "./app/Dashboard/dashboard";
import SignInPage from "./auth/sign-in/page";
import SignUpPage from "./auth/sign-up/page";
import Layout from "./app/Dashboard/layout";


// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded } = useAuth(); // Check if the user is signed in and if Clerk is loaded

  if (!isLoaded) {
    // Show a loading state or return null while Clerk is initializing
    return null; // or <LoadingSpinner />;
  }

  if (!isSignedIn) {
    // Redirect to the sign-in page if not logged in
    return <Navigate to="/auth/sign-in" />;
  }

  // Render the protected content if logged in
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/auth/sign-in" element={<SignInPage />} />
        <Route path="/auth/sign-up" element={<SignUpPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>              
                <Dashboard />
               </Layout>
            </ProtectedRoute> 
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;