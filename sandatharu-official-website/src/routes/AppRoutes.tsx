import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../sites/group/pages/Home';

/* Placeholders — replace with real pages later */
const Placeholder = ({ label }: { label: string }) => (
  <section className="section container" style={{ minHeight: '60vh', paddingTop: 180 }}>
    <span className="kicker">Coming Soon</span>
    <h1 className="display display-lg">{label}</h1>
  </section>
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"         element={<Home />} />
      <Route path="/coco"     element={<Placeholder label="Sandatharu Coco" />} />
      <Route path="/travels"  element={<Placeholder label="Sandatharu Travels & Tours" />} />
      <Route path="/it"       element={<Placeholder label="Sandatharu IT Solutions" />} />
      <Route path="/admin"    element={<Placeholder label="Admin Portal" />} />
      <Route path="*"         element={<Navigate to="/" replace />} />
    </Routes>
  );
}