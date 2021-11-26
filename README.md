# Personal Site

A website about me, powered by Gatsby.

Website: https://www.seandodson.com/

# Table of Contents

- [Description](#description)
- [Technology](#technology)
- [How to Run Locally](#how-to-run-locally)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [Contributing](#contributing)

# Description

A personal website featuring information about my hobbies, career, and other passions.

Website: https://www.seandodson.com/

# Technology

- React
- Gatsby
- Tailwind
- SCSS
- Firebase (Hosting)

# How to Run Locally

Follow the following steps to run my personal site locally after cloning. Just don't steal my identity please.

## Prerequisites

- [Spotify API Credentials](https://github.com/leolabs/gatsby-source-spotify#configuration)
- [YouTube API Key](https://developers.google.com/youtube/v3/getting-started)
- [Google Drive Credentials for a Folder w/ 'Strong' Data](https://github.com/richseviora/gatsby-plugin-drive#usage)

## Steps

1. Install packages.

```
npm install
```

2. Create a file named '.env.development' in the root of the project with the following environment variables.

```
SPOTIFY_CLIENT_ID=<VALUE>
SPOTIFY_CLIENT_SECRET=<VALUE>
SPOTIFY_REFRESH_TOKEN=<VALUE>
YOUTUBE_API_KEY=<VALUE>
GOOGLE_DRIVE_FOLDER_ID=<VALUE>
GOOGLE_PRIVATE_KEY=<VALUE>
GOOGLE_CLIENT_EMAIL=<VALUE>
```

_See [prerequisites](#prerequisites) for information on getting these values._

3. Start the application.

```
npm run dev
```

4. View http://localhost:8000/ in your favorite browser.

# Contributing

Please create a new issue or open a pull request if you think my website or personal life is lame :satisfied:.
