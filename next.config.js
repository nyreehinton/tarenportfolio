/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable Next.js handling of the root route
    rewrites: async() => {
        return []
    }
}

module.exports = nextConfig