import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../admin/context/AuthContext';
import AdminPortal from '../admin/pages/AdminPortal';
import AdminDashboard from '../admin/pages/AdminDashboard';

/* Main site */
import Home from '../sites/group/pages/Home';
import About from '../sites/group/pages/About';
import BusinessesPage from '../sites/group/pages/BusinessesPage';
import StoryPage from '../sites/group/pages/StoryPage';
import NetworkPage from '../sites/group/pages/NetworkPage';
import SustainabilityPage from '../sites/group/pages/SustainabilityPage';
import NewsPage from '../sites/group/pages/NewsPage';
import ContactPage from '../sites/group/pages/ContactPage';

/* Coco site */
import CocoHome from '../sites/coco/pages/CocoHome';
import CocoAbout from '../sites/coco/pages/CocoAbout';
import CocoProducts from '../sites/coco/pages/CocoProducts';
import CocoProductDetail from '../sites/coco/pages/CocoProductDetail';
import CocoContact from '../sites/coco/pages/CocoContact';
import CocoNews from '../sites/coco/pages/CocoNews';
import CocoProcess from '../sites/coco/pages/CocoProcess';
import CocoSustainability from '../sites/coco/pages/CocoSustainability';
import CocoNetwork from '../sites/coco/pages/CocoNetwork';
import CocoGlobal from '../sites/coco/pages/CocoGlobal';
import TravelsHome from '../sites/travels/pages/TravelsHome';
import TravelsAbout from '../sites/travels/pages/TravelsAbout';
import TravelsDestinations from '../sites/travels/pages/TravelsDestinations';
import TravelsTours from '../sites/travels/pages/TravelsTours';
import TravelsVehicles from '../sites/travels/pages/TravelsVehicles';
import TravelsServices from '../sites/travels/pages/TravelsServices';
import TravelsCustom from '../sites/travels/pages/TravelsCustom';
import TravelsContact from '../sites/travels/pages/TravelsContact';

const Stub = ({ label }: { label: string }) => (
  <section style={{ padding: '180px 32px 100px', minHeight: '60vh' }}>
    <span className="k">Coming Soon</span>
    <h1 className="d d-lg" style={{ marginTop: 16 }}>{label}</h1>
  </section>
);

export default function AppRoutes() {
  return (
    <Routes>
      {/* MAIN */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/businesses" element={<BusinessesPage />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/network" element={<NetworkPage />} />
      <Route path="/sustainability" element={<SustainabilityPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* COCO — full sub-site */}
      <Route path="/coco" element={<CocoHome />} />
      <Route path="/coco/about" element={<CocoAbout />} />
      <Route path="/coco/products" element={<CocoProducts />} />
      <Route path="/coco/products/:id" element={<CocoProductDetail />} />
      <Route path="/coco/process" element={<CocoProcess />} />
      <Route path="/coco/sustainability" element={<CocoSustainability />} />
      <Route path="/coco/network" element={<CocoNetwork />} />
      <Route path="/coco/global" element={<CocoGlobal />} />
      <Route path="/coco/news" element={<CocoNews />} />
      <Route path="/coco/contact" element={<CocoContact />} />


      {/* TRAVELS */}
      <Route path="/travels" element={<TravelsHome />} />
      <Route path="/travels/about" element={<TravelsAbout />} />
      <Route path="/travels/destinations" element={<TravelsDestinations />} />
      <Route path="/travels/tours" element={<TravelsTours />} />
      <Route path="/travels/vehicles" element={<TravelsVehicles />} />
      <Route path="/travels/services" element={<TravelsServices />} />
      <Route path="/travels/custom" element={<TravelsCustom />} />
      <Route path="/travels/contact" element={<TravelsContact />} />

      {/* IT  */}
      <Route path="/it" element={<Stub label="Sandatharu IT" />} />

      {/* ADMIN */}
      <Route
        path="/admin/*"
        element={
          <AuthProvider>
            <Routes>
              <Route index element={<AdminPortal />} />
              <Route path="dashboard" element={<AdminDashboard />} />
            </Routes>
          </AuthProvider>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>

  );
}