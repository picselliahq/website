import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Picsellia - MLOps Platform for Computer Vision';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          padding: '60px',
        }}
      >
        {/* Logo mark */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 216 216"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 86.2272C0 15.2191 15.2191 0 86.2272 0H129.773C200.781 0 216 15.2191 216 86.2272V129.773C216 200.781 200.781 216 129.773 216H86.2272C15.2191 216 0 200.781 0 129.773V86.2272ZM154.2 59.8658C137.822 31.5315 108.275 32.8614 108.275 32.8614C108.275 32.8614 78.6742 31.5315 62.3223 59.8658C45.8895 88.2545 39.6293 124.541 48.1561 145.249C55.8193 163.867 71.7664 175.347 89.7913 180.314C101.853 183.652 114.67 183.652 126.704 180.314C144.729 175.347 160.676 163.867 168.34 145.249C176.866 124.541 170.606 88.2545 154.2 59.8658ZM108.248 131.733C89.3326 131.733 74.033 116.317 74.033 97.2922C74.033 78.2669 89.3596 62.8513 108.248 62.8513C127.136 62.8513 142.49 78.2669 142.49 97.2922C142.49 116.317 127.163 131.733 108.248 131.733ZM108.248 121.5C121.551 121.5 132.317 110.671 132.317 97.2913C132.317 83.9112 121.551 73.0822 108.248 73.0822C94.9452 73.0822 84.1789 83.9112 84.1789 97.2913C84.1789 110.671 94.9452 121.5 108.248 121.5Z"
            fill="#33AB68"
          />
        </svg>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '40px',
          }}
        >
          <div
            style={{
              fontSize: '52px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              textAlign: 'center',
            }}
          >
            Picsellia
          </div>
          <div
            style={{
              fontSize: '24px',
              color: 'rgba(235, 235, 245, 0.6)',
              marginTop: '16px',
              textAlign: 'center',
              maxWidth: '700px',
              lineHeight: 1.4,
            }}
          >
            The MLOps Platform for Computer Vision
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
