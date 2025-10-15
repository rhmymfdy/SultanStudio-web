import "./globals.css";



export const metadata = {
  title: "Sultan Studio",
  description: "Website Sultan Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`catarman antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
