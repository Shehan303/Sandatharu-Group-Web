import './marquee.css';

interface Props {
  children: React.ReactNode;
  speed?: number;   // seconds
  reverse?: boolean;
}

export default function Marquee({ children, speed = 34, reverse = false }: Props) {
  return (
    <div className="marquee" aria-hidden>
      <div className={`marquee__track ${reverse ? 'is-reverse' : ''}`} style={{ animationDuration: `${speed}s` }}>
        {children}
        {children}
      </div>
    </div>
  );
}