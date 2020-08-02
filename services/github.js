const fetch = require("node-fetch");

// Gets the hundred most starred repos in the last 30 days in json format

async function getMostStarredRepos() {
  //Set date
  let date = new Date();
  date.setDate(date.getDate() - 30);
  date = date.toISOString().split("T")[0];

  //retrieve the repos
  const response = await fetch(
    `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&per_page=100`
  );
  const json = await response.json();

  return json;
}

module.exports = { getMostStarredRepos };
