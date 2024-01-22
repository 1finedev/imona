import { Loading } from '@/components';
import useUser from '@/hooks/useUser';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const { users } = useUser();
  return (
    <>
      {users.length > 0 ? (
        <main
          className={`flex min-h-screen flex-col items-center justify-center p-6 ${inter.className} bg-gradient`}
        >
          <Component {...pageProps} />;
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
