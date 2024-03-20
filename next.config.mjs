import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */
const nextConfig = {};
const nextIntlConfig = createNextIntlPlugin();
export default nextIntlConfig(nextConfig);
