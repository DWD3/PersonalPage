/** @type {import('next').NextConfig} */
const { version } = require("./package.json");

/**
 * Redirections
 */
const redirectingConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

/**
 * Overall config
 */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // for displaying App version number
    version,
  },
  output: "standalone", // for building docker image
  ...redirectingConfig,
};

module.exports = nextConfig;
