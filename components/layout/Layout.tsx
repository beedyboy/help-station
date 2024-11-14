'use client';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import Image from 'next/image';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <div className='inline-flex justify-center bg-secondary h-60px] text-white gap-2 p-2'>
      <Image src="/icons/ic_outline-emergency.svg" alt="Emergency" width={20} height={20} />
      <span>How prepared are you for an emergency</span>
      <Link href="/" className="text-primary-4 space-x-3">
       Find Out 
      </Link>
    </div>
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;
