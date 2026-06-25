/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        disableStaticImages: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|webp|avif|ico|bmp|svg)$/i,
            type: "asset/resource",
            generator: {
                filename: "static/media/[name].[hash][ext]",
            },
        })

        return config
    },
}

module.exports = nextConfig
