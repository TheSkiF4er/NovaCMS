import type { ReactNode } from 'react';
import './styles.css';

export const metadata = {
  title: 'NovaCMS Admin',
  description: 'NovaCMS Administration'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="topbar">
            <div className="brand">NovaCMS</div>
            <nav className="nav">
              <a href="/">Dashboard</a>
              <a href="/content">Content</a>
              <a href="/settings">Settings</a>
            </nav>
          </header>
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
