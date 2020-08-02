const githubService = require("../services/github");
const Language = require("../utils/language");
// handler for getting languages used by the 100 most
// starred repos in the last 30 days
async function getLanguages(req, res) {
  try {
    let repos = (await githubService.getMostStarredRepos()).items;

    let languages = {};

    repos.forEach((repo) => {
      if (repo.language in languages) {
        languages[repo.language].addRepo(repo.name);
      } else {
        languages[repo.language] = new Language(repo.language, repo.name);
      }
    });

    return res.status(200).json(languages);
  } catch (error) {
    res.status(500).json({ err: "Something went wrong" });
  }
}

module.exports = { getLanguages: getLanguages };
