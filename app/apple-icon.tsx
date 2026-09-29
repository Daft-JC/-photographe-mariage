import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F8F5F2',
          fontFamily: 'Georgia, serif',
          fontSize: 84,
        }}
      >
        <span style={{ color: '#1A1A1A' }}>L</span>
        <span style={{ color: '#cc0000' }}>M</span>
      </div>
    ),
    { ...size }
  );
}
