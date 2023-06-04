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
    }
}

module.exports = nextConfig;
