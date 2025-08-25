/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/tiktok_verification',
            destination: '/tiktokwYWNaTk2gMq0ZTsVRcTmU3sAxBqufInS.txt',
          },
        ]
      },
};

export default nextConfig;
