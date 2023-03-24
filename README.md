# Spotify Dashboard

This is a Next.js application that utilizes the public Spotify API to show statistics and details from your Spotify profile in a friendly UI dashboard. The application allows users to login to their Spotify account and see detailed information about their top artists, top tracks, and more.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/rileygrotenhuis/spotify-dashboard.git
    ```

2. Install dependencies:

    ```bash
    cd spotify-dashboard
    npm install
    ```

3. Create a Spotify application on [Spotify's Developer](https://developer.spotify.com) platform and obtain a Client ID, Client Secret and Redirect URI.

4. Create a `.env.local` file and add the following variables:

    ```.env
    SPOTIFY_CLIENT_ID=your_client_id
    SPOTIFY_CLIENT_SECRET=your_client_secret
    SPOTIFY_REDIRECT_URL=your_redirect_uri
    ```

5. Start the developer server:

    ```bash
    npm run dev
    ```

6. Your application will now begin running at http://localhost:3000
