/** @type {import('next').NextConfig} */
const { version } = require("./package.json");

/**
 * Redirections
 */
const redirectingConfig = {
  async redirects() {
    return [
      // currently no redirection
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
