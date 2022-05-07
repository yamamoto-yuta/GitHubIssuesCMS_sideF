/** @type {import('next').NextConfig} */
//module.exports = {
//  reactStrictMode: true,
//}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  reactStrictMode: true,
  basePath: '/GitHubIssuesCMS_sideF',
}

module.exports = withBundleAnalyzer(config)
