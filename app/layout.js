import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { profile } from "@/data/content";
import "./globals.css";

export const metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.shortBio,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
