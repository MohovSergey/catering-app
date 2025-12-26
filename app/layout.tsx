// app/layout.tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-hidden bg-stone-50">
        <div className="h-full w-full overflow-auto">
          {children}
        </div>
      </body>
    </html>
  );
}

