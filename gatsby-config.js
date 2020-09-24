const {
NODE_ENV,
URL: NETLIFY_SITE_URL = 'https://www.example.com',
DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
module.exports = 
{
    siteMetadata: {
        siteURL: "https://andenacitelli.com",
    },
    plugins: [

        "gatsby-plugin-preload-fonts",
        `gatsby-plugin-react-helmet`, 

        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/`],
            }
        },     

        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                resolveEnv: () => NETLIFY_ENV,
                env: {
                    production: {
                        policy: [{ userAgent: '*' }],
                    },
                    'branch-deploy': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                    'deploy-preview': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                },
            },
        },
    ],
}
