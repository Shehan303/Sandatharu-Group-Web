import './marquee.css';

interface Props {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({ children, speed = 40, reverse = false, className = '' }: Props) {
  return (
    <div className={`marquee ${className}`}>
      <div className={`marquee__track ${reverse ? 'is-rev' : ''}`} style={{ animationDuration: `${speed}s` }}>
        {children}{children}
      </div>
    </div>
  );
}