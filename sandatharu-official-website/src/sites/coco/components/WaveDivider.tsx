export default function WaveDivider({
  top = '#FAF6EE',
  bottom = '#0E2E22',
  flip = false
}: { top?: string; bottom?: string; flip?: boolean }) {
  return (
    <div className="c-wave" style={{ background: bottom, transform: flip ? 'scaleY(-1)' : undefined }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ height: '70px' }}>
        <path
          d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,40 L1440,0 L0,0 Z"
          fill={top}
        />
      </svg>
    </div>
  );
}