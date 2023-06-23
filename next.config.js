/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "xsgames.co",
                port: "",
                pathname: "/randomusers/assets/avatars/*/*"
            },
            {
                protocol: "https",
                hostname: "picsum.photos",
                port: "",
                pathname: "/seed/*/*/*"
            }
        ]
    },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig;
