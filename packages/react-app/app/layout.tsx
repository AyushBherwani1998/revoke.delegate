import '@/styles/globals.css';

import { AppProvider } from '@/providers/AppProvider';
import { loadEnvConfig } from '@next/env'
 
const projectDir = process.cwd()
loadEnvConfig(projectDir)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-b from-gray-950 from-80% to-green-900'>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
