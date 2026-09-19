import "./globals.css";

export default function RootLayout({ children, team }: LayoutProps<"/">) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        {team}
        {children}
      </body>
    </html>
  );
}
