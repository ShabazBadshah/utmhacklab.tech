module.exports = {
    title: 'UTM Hacklab',
    description: "The support wing of UTM MCS Societies.",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
            // { text: 'MCS Clubs', link: '/clubs/' },
            { text: 'Office Hours', link: '/office-hours/' },
            { text: 'Projects', link: '/projects/' },
            { text: 'Resources', link: '/resources/' },
            { text: 'Tools', link: '/tools/' },
            { text: 'Calendar', link: 'https://calendar.google.com/calendar/b/2?cid=dXRtaGFja2xhYm9mZmljaWFsQGdtYWlsLmNvbQ/' },
            { text: 'Community', link: 'https://teams.microsoft.com/l/team/19%3a9a293cfeb0d44967babe95ceaeff8fe2%40thread.skype/conversations?groupId=2dba53aa-e8b2-4a9b-a206-92677860a263&tenantId=78aac226-2f03-4b4d-9037-b46d56c55210/' },
            // { text: 'International Students', link: '/international/' },

        ]
    },
    dest: "./docs",
    thirdPartyComponents: {
        fontAwesomeIcons: {
            regular: ['address-card', 'file-audio'],  // Regular font awesome icon keys here
            solid: ['battery-quarter']               // Solid font awesome icon keys here
        }
    }
}