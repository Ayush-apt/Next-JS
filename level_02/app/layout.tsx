import "./globals.css";

export default function RootLayout({ children, team, analysis }: LayoutProps<"/">) {
  return (
    <html>
      <body >
        {/* <div className="flex h-screen w-screen">
          <div className="w-[50%] bg-amber-900">{team}</div>
          <div className="flex flex-col w-[50%]">
            <div className="h-[50%] bg-amber-600">{children}</div>
            <div className="h-[50%]">{analysis}</div>
          </div>
        </div> */}

        {children}
      </body>
    </html>
  );
}
