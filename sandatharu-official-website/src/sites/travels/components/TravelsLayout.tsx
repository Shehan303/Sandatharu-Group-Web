import TravelsNav from './TravelsNav';
import TravelsFooter from './TravelsFooter';

export default function TravelsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="travels-scope">
      <TravelsNav />
      <main style={{ paddingTop: 0 }}>{children}</main>
      <TravelsFooter />
    </div>
  );
}