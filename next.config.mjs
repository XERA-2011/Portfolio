// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出，构建后会在项目根生成 out/ 目录
  output: 'export',

  // 可选：开启严格模式、SWC 压缩等
  reactStrictMode: true,
  swcMinify: true,

  trailingSlash: true,
};

export default nextConfig;
