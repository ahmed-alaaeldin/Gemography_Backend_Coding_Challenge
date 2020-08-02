class language {
  constructor(name, repo) {
    this._name = name;
    this._repos = [repo];
    this._numberOfRepos = 1;
  }

  addRepo(repo) {
    this._repos.push(repo);
    this._numberOfRepos += 1;
  }

  getName() {
    return this._name;
  }

  getRepos() {
    return this._repos;
  }
  getNumberOfRepos() {
    return this._repos.length;
  }
}

module.exports = language;
