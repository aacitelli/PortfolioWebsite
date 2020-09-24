module.exports = 
{
    siteMetadata: {
        title: `Anden Acitelli - Software Engineer, Full-Stack Web Developer`,
        description: `Hi! I'm Anden Acitelli, a student at The Ohio State University currently studying Computer Science and Engineering. I have skills in a wide variety of computer science disciplines, including software engineering and full-stack web development, and am currently looking for a Summer 2021 internship.`,
        author: `Anden Acitelli (@aacitelli on GitHub)`,
        siteUrl: "https://andenacitelli.com",
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
              host: 'https://andenacitelli.com',
              policy: [{ userAgent: '*', allow: '/' }]
            }
        }
    ],
}
