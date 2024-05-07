"use client";
import Register from "@/components/auth/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const RegisterPage = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Register />
    </QueryClientProvider>
  );
};

export default RegisterPage;
