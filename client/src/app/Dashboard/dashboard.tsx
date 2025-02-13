import React from "react";
import { useAuth } from "@clerk/clerk-react"; // Import useAuth hook
import { Button } from "@/components/ui/button"; // Import shadcn Button

const Dashboard = () => {
  const { signOut } = useAuth(); // Get the signOut method

  const handleSignOut = () => {
    signOut(); // Call the signOut method
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard!</h1>
      <Button onClick={handleSignOut} variant="destructive">
        Sign Out
      </Button>
    </div>
  );
};

export default Dashboard;