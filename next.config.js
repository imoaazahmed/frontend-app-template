module.exports = {
  images: {
    domains: ['picsum.photos'],
  },
  eslint: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    // !! WARN !!
    ignoreDuringBuilds: false,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
};
