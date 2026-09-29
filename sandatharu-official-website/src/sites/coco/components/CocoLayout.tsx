import CocoNav from './CocoNav';
import CocoFooter from './CocoFooter';

export default function CocoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="coco-scope">
      <CocoNav />
      <main style={{ paddingTop: 0 }}>{children}</main>
      <CocoFooter />
    </div>
  );
}