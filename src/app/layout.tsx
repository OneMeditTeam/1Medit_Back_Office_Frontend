import type { Metadata } from 'next';
import { Nanum_Gothic } from 'next/font/google';
import './globals.css';
import LeftNavigationBar from '@/components/common/LeftNavigationBar';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const nanumGothic = Nanum_Gothic({
  weight: ['400', '700'],
  variable: '--font-nanum-gothic',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${nanumGothic.variable} antialiased font-nanum`}>
        <div className="flex h-screen">
          <LeftNavigationBar />
          {/* 오른쪽 컨텐츠 영역 */}
          <div className="flex flex-col flex-1">
            <Header />
            <div className="flex-1 overflow-auto">
              <div className="min-h-full flex flex-col">
                <main className="flex-grow flex-shrink-0 shadow-lg px-[140px]">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
