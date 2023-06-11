/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "xsgames.co",
                port: "",
                pathname: "/randomusers/assets/avatars/*/*"
            }
        ]
    },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig;
