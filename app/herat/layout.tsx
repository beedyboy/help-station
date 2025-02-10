import MainLayout from "@/components/layout/MainLayout";
import { HeratProvider } from "@/context/HeratContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeratProvider>
      <MainLayout>{children}</MainLayout>
    </HeratProvider>
  );
}
