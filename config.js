module.exports = {
    app: {
        px: '-',
        token: 'OTM5NjY1OTgyMDQ0MTEwODU4.G_j8xw.ogQIqwdOKIjz8j_UvDAGvXlUfYAfo16cFWPb9s',
        playing: 'your music selection ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
