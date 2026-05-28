const db = require("../config/db");
const { fetchGitHubUser } = require("../services/github.service");

// Analyze & store user
const analyzeUser = async (req, res) => {
  try {
    const username = req.params.username;

    const user = await fetchGitHubUser(username);

    const data = {
      username: user.login,
      name: user.name,
      followers: user.followers,
      following: user.following,
      public_repos: user.public_repos,
      avatar_url: user.avatar_url,
      github_url: user.html_url,
    };

    const sql = `
      INSERT INTO github_profiles 
      (username, name, followers, following, public_repos, avatar_url, github_url)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE 
      followers=VALUES(followers),
      following=VALUES(following),
      public_repos=VALUES(public_repos)
    `;

    db.query(sql, Object.values(data), (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "User analyzed successfully",
        data,
      });
    });

  } catch (error) {
    res.status(500).json({ error: "GitHub user not found" });
  }
};

// Get all stored profiles
const getAllProfiles = (req, res) => {
  db.query("SELECT * FROM github_profiles", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// Get single profile
const getProfile = (req, res) => {
  const username = req.params.username;

  db.query(
    "SELECT * FROM github_profiles WHERE username = ?",
    [username],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result[0] || {});
    }
  );
};

module.exports = {
  analyzeUser,
  getAllProfiles,
  getProfile,
};