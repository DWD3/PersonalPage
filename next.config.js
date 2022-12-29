/** @type {import('next').NextConfig} */

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

const nextConfig = {
  reactStrictMode: true,
  ...redirectingConfig
}



module.exports = nextConfig
