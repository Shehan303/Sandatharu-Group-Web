import { useLocation } from 'react-router-dom';
import TopBar from './shared/components/TopBar';
import Navbar from './shared/components/Navbar';
import Footer from './shared/components/Footer';
import ScrollToTop from './shared/components/ScrollToTop';
import AppRoutes from './routes/AppRoutes';
import useDynamicFavicon from './shared/hooks/useDynamicFavicon';

export default function App() {
  const { pathname } = useLocation();
  const isStandalone =
    pathname.startsWith('/admin') ||
    pathname.startsWith('/coco') ||
    pathname.startsWith('/travels') ||
    pathname.startsWith('/it');

  useDynamicFavicon();   // ⭐ Swaps the favicon on every route change

  return (
    <>
      <ScrollToTop />
      {!isStandalone && <TopBar />}
      {!isStandalone && <Navbar />}
      <main style={{ paddingTop: isStandalone ? 0 : undefined }}>
        <AppRoutes />
      </main>
      {!isStandalone && <Footer />}
    </>
  );
}