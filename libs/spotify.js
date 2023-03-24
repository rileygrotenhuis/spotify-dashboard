module.exports.getMeData = async (spotifyAccessToken) => {
    const res = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${spotifyAccessToken}`,
        },
    });

    if (res.ok) {
        const me = await res.json();

        return me;
    }

    if (res.status === 401) {
        return 401;
    }

    return null;
};

module.exports.getPlaylistData = async (spotifyAccessToken) => {
    const res = await fetch('https://api.spotify.com/v1/me/playlists?limit=5', {
        headers: {
            Authorization: `Bearer ${spotifyAccessToken}`,
        },
    });

    if (res.ok) {
        const playlists = await res.json();

        return playlists;
    }

    return null;
};

module.exports.getTopItems = async (spotifyAccessToken, item) => {
    const res = await fetch(
        `https://api.spotify.com/v1/me/top/${item}?limit=5&time_range=long_term`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${spotifyAccessToken}`,
            },
        }
    );

    if (res.ok) {
        const top = await res.json();

        return top;
    }

    return null;
};

module.exports.getSpotifyTokens = async (code) => {
    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(
                `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
            )}`,
        },
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}`,
    });

    const tokens = await res.json();

    return tokens;
};

module.exports.logout = async (spotifyAccessToken) => {
    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${spotifyAccessToken}`,
        },
    });

    if (res.ok) {
        const response = await res.json();

        return response;
    }

    return null;
};
