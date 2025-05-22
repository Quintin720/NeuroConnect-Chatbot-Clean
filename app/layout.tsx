// app/layout.tsx
import '../styles/globals.css'; // Adjust if you use a different path
import NavBar from '../components/NavBar'; // ✅ Adjust path if needed

export const metadata = {
  title: 'NeuroConnect',
  description: 'Breaking Barriers to Unlock Unique Autistic Potential',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />  {/* ✅ This renders your navigation bar */}
        {children}
      </body>
    </html>
  );
}
