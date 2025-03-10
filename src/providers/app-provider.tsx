import { TRPCProvider } from "@/trpc/client";
import { Toaster } from "sonner";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TRPCProvider>
      <Toaster />
      {children}
    </TRPCProvider>
  );
};
