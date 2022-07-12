import { Router, Request, Response } from 'express';
const axios = require('axios').default;

export const repos = Router();

repos.get('/', async (req, res) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);
  const repoArray = []

  axios.get("https://api.github.com/users/silverorange/repos")
    .then(res => console.log(res))

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json(repoArray);
});
