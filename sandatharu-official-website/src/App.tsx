import TopBar from './shared/components/TopBar';
import Navbar from './shared/components/Navbar';
import Footer from './shared/components/Footer';
import ScrollToTop from './shared/components/ScrollToTop';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}