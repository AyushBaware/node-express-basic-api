require('dotenv').config()
const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

const githubData = {
  "login": "2026-ayushbaware",
  "id": 260346442,
  "node_id": "U_kgDOD4SSSg",
  "avatar_url": "https://avatars.githubusercontent.com/u/260346442?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/2026-ayushbaware",
  "html_url": "https://github.com/2026-ayushbaware",
  "followers_url": "https://api.github.com/users/2026-ayushbaware/followers",
  "following_url": "https://api.github.com/users/2026-ayushbaware/following{/other_user}",
  "gists_url": "https://api.github.com/users/2026-ayushbaware/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/2026-ayushbaware/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/2026-ayushbaware/subscriptions",
  "organizations_url": "https://api.github.com/users/2026-ayushbaware/orgs",
  "repos_url": "https://api.github.com/users/2026-ayushbaware/repos",
  "events_url": "https://api.github.com/users/2026-ayushbaware/events{/privacy}",
  "received_events_url": "https://api.github.com/users/2026-ayushbaware/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-02-09T05:00:15Z",
  "updated_at": "2026-02-09T05:00:15Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login First!!!</h1>')
})

app.get('/whatsapp', (req, res) => {
    res.send('Welcome Back')
})

app.get('/githubData', (req, res) => {
    res.json(githubData)
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});