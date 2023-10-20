const { redirect } = require('next/navigation')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images:{
        domains:["www.google.com","picsum.photos","fastly.picsum.photos"]
    },
    //For exporting static html page generation
    //output : "export",
    redirects:async()=>{
        return[
            {
                source:'/users',
                destination:'/',
                permanent:false
            }
        ]

    }
}

module.exports = nextConfig
