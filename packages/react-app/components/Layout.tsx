import { FC, ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="bg-gypsum overflow-hidden flex flex-col min-h-screen">
        <Header />
        <div className="py-8 max-w-7xl mx-4 space-y-8 sm:px-6 lg:px-8">
          {children}
        </div>

      </div>
    </>
  );
};

export default Layout;
