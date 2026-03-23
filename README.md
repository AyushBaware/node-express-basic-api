# 🚀 Node Express Basic API

A simple backend application built using **Node.js** and **Express.js**, demonstrating basic routing, environment variable usage, and deployment-ready configuration.

---

## 📌 Features

* REST API using Express
* Multiple routes:

  * `/` → Home
  * `/login` → Login message
  * `/whatsapp` → Welcome message
* Environment variable support using `.env`
* Ready for deployment on Render

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **dotenv**

---

## 📂 Project Structure

```
├── index.js
├── package.json
├── .env
├── .gitignore
```

---
## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
PORT=4000
```

> ⚠️ Do not push `.env` file to GitHub

---

## ▶️ Run Locally

```bash
npm start
```

Server will run on:

```
http://localhost:4000
```

---

## 🌐 API Endpoints

| Method | Route       | Description     |
| ------ | ----------- | --------------- |
| GET    | `/`         | Home route      |
| GET    | `/login`    | Login message   |
| GET    | `/whatsapp` | Welcome message |

---

🚀 Deployment

This project is deployed using Render (Free Hosting).

Live URL
https://node-express-basic-api.onrender.com

## ⚠️ Important Notes

* Always use `process.env.PORT` for deployment
* Add `.env` to `.gitignore`
* Ensure `start` script is present in `package.json`

---

## 📧 Author

**Ayush Baware**
