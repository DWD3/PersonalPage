/** @type {import('next').NextConfig} */


/**
 * Redirections
 */
const redirectingConfig = {
  async redirects(){
    return [
        {
          source : '/',
          destination : '/home',
          permanent: true
        }
    ]
  }
}

/**
 * Overall config
 */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // for building docker image
  ...redirectingConfig
}



module.exports = nextConfig
