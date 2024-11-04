import { Header } from './Header';
import { ReactNode } from 'react';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  
  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      <Footer />
      
    </div>
  );
};

export default Layout;