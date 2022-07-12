import { Router, Request, Response } from 'express';
const axios = require('axios').default;
const fs = require('fs');

export const repos = Router();

repos.get('/', async (req, res) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  async function getRepos() {

    try {
      // get github repos
      const urlResponse = await axios.get(
        'https://api.github.com/users/silverorange/repos'
      );
      const repoArray = [];
      const resArray = urlResponse.data;

      for (let i = 0; i < resArray.length; i++) {
        if (resArray[i].fork === false) {
          repoArray.push(resArray[i]);
        }
      }

      //get local repos
      const localReposInfo = fs.readFileSync('./data/repos.json', 'utf8');
      const localRepos = JSON.parse(localReposInfo);

      for (let i = 0; i < localRepos.length; i++) {
        if (localRepos[i].fork === false) {
          repoArray.push(localRepos[i]);
        }
      }

      return repoArray;
    } catch (err) {
      throw err;
    }
  }

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json(await getRepos());
});
