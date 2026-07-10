import "./globals.css";

const BASE_URL = "https://aryanbansal.dev";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Aryan Bansal",
  description:
    "AI/ML engineer building retrieval-grounded systems and full-stack products. FAISS, RAG pipelines, Spring Boot, Kafka, MERN. B.Tech CSE @ Thapar Institute.",
  keywords: [
    "Aryan Bansal",
    "AI Engineer",
    "ML Engineer",
    "RAG",
    "FAISS",
    "Telecom RAG",
    "Software Engineer Portfolio",
    "Thapar Institute"
  ],
  openGraph: {
    title: "Aryan Bansal",
    description:
      "AI/ML engineer building retrieval-grounded systems. RAG pipelines · Spring Boot · MERN. Open to AI/ML roles.",
    url: BASE_URL,
    siteName: "Aryan Bansal",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Bansal",
    description:
      "AI/ML engineer building retrieval-grounded systems. RAG pipelines · Spring Boot · MERN. Open to AI/ML roles."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-ink text-text antialiased">{children}</body>
    </html>
  );
}
