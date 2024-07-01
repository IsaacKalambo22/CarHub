/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:['cdn.imagin.studio']
    },
    typescript: {
      ignoreBuildErrors: true,
    }

    // images:{
    //     remotePatterns:['cdn.imagin.studio']
    // } 

    // images: {
    //     remotePatterns: [
    //       {
    //         hostname: 'cdn.imagin.studio',
    //         pathname: '**',
    //       }
    //     ]}
       
};

export default nextConfig;
