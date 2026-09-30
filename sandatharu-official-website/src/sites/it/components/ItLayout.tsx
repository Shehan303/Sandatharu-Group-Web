import ITNav from './ItNav';
import ITFooter from './ItFooter';
import ScrollTop from './ScrollTop';
import WhatsAppFloat from './WhatsAppFloat';

export default function ITLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="it-scope">
      <ITNav />
      <main style={{ paddingTop: 0 }}>{children}</main>
      <ITFooter />
      <div className="it-float">
        <ScrollTop />
        <WhatsAppFloat />
      </div>
    </div>
  );
}