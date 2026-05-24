import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Rate Limit Usage Tracker",
  description: "Monitor API rate limit consumption across multiple providers. Get alerts before you hit limits."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6896f968-a048-4850-a034-e88d980f5064"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
