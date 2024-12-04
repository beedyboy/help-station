import Header from "@/components/layout/Header";

export const metadata = {
  title: "Subscriptions Page",
  description: "Manage subscriptions independently.",
  layout: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
