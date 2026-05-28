# 🚀 GitHub Profile Analyzer API

<div align="center">

### Analyze GitHub Profiles using Node.js, Express.js, TiDB & GitHub API

Interactive REST API that fetches GitHub user insights, stores analysis results in TiDB/MySQL, and provides clean API endpoints with Swagger documentation.

---

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express.js](https://img.shields.io/badge/Express.js-Framework-black)
![TiDB](https://img.shields.io/badge/TiDB-MySQL_Compatible-orange)
![Swagger](https://img.shields.io/badge/API-Swagger-green)
![Render](https://img.shields.io/badge/Deployed-Render-blue)

</div>

---

# 🌐 Live Demo

| Service      | URL                                                            |
| ------------ | -------------------------------------------------------------- |
| Live API     | https://github-profile-analyzer-api-qp01.onrender.com/api/test          |
| Swagger Docs | https://github-profile-analyzer-api-qp01.onrender.com/api-docs |

---

# ✨ Features

✅ Fetch GitHub profile data using username
✅ Store analyzed profile insights in TiDB/MySQL
✅ RESTful API architecture
✅ Swagger API Documentation
✅ Fetch all analyzed profiles
✅ Fetch single analyzed profile
✅ MVC folder structure
✅ Error handling & validation

---

# 🛠 Tech Stack

| Technology        | Usage             |
| ----------------- | ----------------- |
| Node.js           | Backend Runtime   |
| Express.js        | API Framework     |
| TiDB / MySQL      | Database          |
| GitHub Public API | Third-party API   |
| Swagger UI        | API Documentation |
| Render            | Deployment        |

---

# 📂 Project Structure

```bash
src/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── github.controller.js
│
├── routes/
│   └── github.routes.js
│
├── services/
│   └── github.service.js
│
├── swagger.js
├── app.js
└── server.js
```

---

# ⚙️ Environment Variables

Create a `.env` file in root directory:

```env
PORT=3000

DB_HOST=your_tidb_host
DB_USER=your_tidb_user
DB_PASSWORD=your_tidb_password
DB_NAME=github_analyzer
DB_PORT=4000
```

---

# 🚀 Installation & Setup

Clone repository:

```bash
git clone YOUR_GITHUB_REPO_LINK
```

Move into project directory:

```bash
cd github-profile-analyzer-api
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# 🗄 Database Setup

Create Database:

```sql
CREATE DATABASE github_analyzer;
```

Use Database:

```sql
USE github_analyzer;
```

Create Table:

```sql
CREATE TABLE github_profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  name VARCHAR(255),
  followers INT,
  following INT,
  public_repos INT,
  avatar_url TEXT,
  github_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# 📮 API Endpoints

## 🔍 Analyze GitHub User

```http
POST /api/analyze/:username
```

Example:

```http
POST /api/analyze/octocat
```

---

## 📄 Get All Profiles

```http
GET /api/profiles
```

---

## 👤 Get Single Profile

```http
GET /api/profiles/:username
```

Example:

```http
GET /api/profiles/octocat
```

---

# 📘 Swagger Documentation

Live Swagger Docs:

https://github-profile-analyzer-api-qp01.onrender.com/api-docs

---

# 💡 Future Improvements

* GitHub repository analytics
* Repository language statistics
* Search & filtering support
* Rate limiting

---

# 👨‍💻 Author

Built as part of a Node.js Backend Internship Assessment.

---

<div align="center">

### ⭐ If you liked this project, consider giving it a star!

</div>
