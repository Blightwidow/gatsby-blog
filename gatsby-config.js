module.exports = {
  siteMetadata: {
    title: 'Theo Dammaretz',
    author: {
      fullName: 'Theo Dammaretz',
      email: 'theo@dammaretz.fr',
      introduction:
        'I am a profesionnal Software and Front End Enginner. Loves the Web and its capabilities. Build keyboards for fun. Dream about mountains.',
      skills: ['React', 'SEO', 'Front End', ' Functionnal Programming', 'Progressive Web Apps', 'Conferences / Articles'],
      experiences: [
        { period: 'Sep 2018 - Today', company: 'TheFork', title: 'Front End Engineer' },
        { period: 'Sep 2017 - Sep 2018', company: 'Boston Consulting Group', title: 'Software Engineer' },
      ],
      socialLinks: [
        { to: 'https://github.com/Blightwidow', label: 'Github' },
        { to: 'https://www.linkedin.com/in/theodammaretz/', label: 'Linkedin' },
        { to: 'https://stackoverflow.com/users/story/8725059', label: 'Stack Overflow' },
      ],
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-workbox',
      options: {},
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@theo.dammaretz`,
      },
    },
  ],
}
