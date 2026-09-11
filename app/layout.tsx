import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdelrahmanmahmoud.vercel.app"),
  title: "Abdelrahman Mahmoud | Full Stack Developer",
  description:
    "Portfolio of Abdelrahman Mahmoud, a Full Stack Developer building scalable web applications, RESTful APIs, and cloud-ready products.",
  authors: [{ name: "Abdelrahman Mahmoud" }],
  keywords: [
    "Abdelrahman Mahmoud",
    "Full Stack Developer",
    "Web Developer",
    "Node.js",
    "Express",
    "React",
    "Angular",
    "ASP.NET Core",
    "C#",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Terraform",
    "AWS",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Next.js",
    "Full Stack Developer Egypt",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  openGraph: {
    title: "Abdelrahman Mahmoud | Full Stack Developer",
    description:
      "Discover the portfolio of Abdelrahman Mahmoud, a Full Stack Developer specializing in scalable applications, RESTful APIs, and modern web technologies.",
    url: "https://abdelrahmanmahmoud.vercel.app/",
    siteName: "Abdelrahman Mahmoud Portfolio",
    images: [
      {
        url: "/me.png",
        width: 1200,
        height: 630,
        alt: "Abdelrahman Mahmoud Portrait",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Mahmoud | Full Stack Developer",
    description:
      "Explore the portfolio of Abdelrahman Mahmoud, a Full Stack Developer building scalable products, APIs, and cloud infrastructure.",
    images: ["/me.png"],
    creator: "@abdoakl18",
  },
  other: {
    "google-site-verification": "Sfgnw7gsxkiwTSMbE9wkDZcrl4lWYqx2F1DEkeWsiII",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d1f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdelrahman Mahmoud",
              jobTitle: "Full Stack Developer",
              description: "Full Stack Developer specializing in scalable applications, RESTful APIs, and cloud-ready products.",
              url: "https://abdelrahmanmahmoud.vercel.app/",
              image: "https://abdelrahmanmahmoud.vercel.app/me.png",
              sameAs: [
                "https://www.linkedin.com/in/abdelrahman-mahmoud-akl/", 
                "https://github.com/Abdelrahman-Mahmoud-Elsaeed",
                "https://twitter.com/abdoakl18"
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Mansoura University" 
              },
              knowsAbout: [
                "Node.js",
                "Express",
                "React",
                "Angular",
                "ASP.NET Core",
                "C#",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Docker",
                "Terraform",
                "AWS",
                "TypeScript",
                "JavaScript",
                "Next.js"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased subpixel-antialiased`}>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
