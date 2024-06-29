/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains:['cdn.imagin.studio']
    // }
    // images:{
    //     remotePatterns:['cdn.imagin.studio']
    // } 

    images: {
        remotePatterns: [
          {
            hostname: 'cdn.imagin.studio',
            pathname: '**',
          }
        ]}








    
};

export default nextConfig;
