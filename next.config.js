/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mysql2"]
  },
  env: {
    host: 'lt80glfe2gj8p5n2.chr7pe7iynqr.eu-west-1.rds.amazonaws.com', //'58.84.143.251', 
    port: '3306', 
    user: 'ku85xect3m0k5u0y',
    password: 't90wk9oum7v6tcg2', 
    database: 'xi8lbnhzcfrnp573', 
    host_dev: 'localhost', // '192.168.1.12', //'58.84.143.251', 
    port_dev: '3306', 
    user_dev: 'root',
    password_dev: 'Malmak-101', 
    database_dev: 'badihbarakat',
    DEV_HOST_URL:  'http://localhost:3000', //'http://192.168.1.12:3000',   
    PROD_HOST_URL: 'https://app-badihbarakat-info.herokuapp.com'
  }
}

module.exports = nextConfig
