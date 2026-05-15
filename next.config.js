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
  env: {
    // for displaying App version number
    NEXT_PUBLIC_APP_VERSION: version,
  },
  output: "standalone", // for building docker image
  ...redirectingConfig,
};

module.exports = nextConfig;
