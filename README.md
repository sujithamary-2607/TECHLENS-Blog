# ◈ TECHLENS
### The Technology Blog & Knowledge Hub

<p align="center">
  <strong>Discover. Explore. Understand.</strong>
</p>

<p align="center">
  A modern full-stack blogging platform bringing technology stories, ideas, and knowledge together.
</p>

<p align="center">
  <a href="https://techlens-frontend.onrender.com">🌐 LIVE WEBSITE</a> &nbsp; | &nbsp;
  <a href="https://techlens-frontend.onrender.com/admin">⚙️ ADMIN PANEL</a> &nbsp; | &nbsp;
  <a href="https://github.com/sujithamary-2607/TECHLENS-Blog">💻 SOURCE CODE</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
</p>

---

## ✦ 01 — Welcome to TechLens

Technology never stands still. New innovations, tools, discoveries, and ideas continue to shape the digital world.

**TechLens** is designed to bring these developments closer to readers through a modern and interactive technology blogging experience.

From software development and artificial intelligence to cybersecurity and emerging technologies, TechLens provides a platform to explore informative content and discover new perspectives.

The application combines a responsive React frontend, a Node.js and Express backend, and MongoDB database integration to deliver a complete full-stack web experience.

---

## ✦ 02 — Experience the Platform

<table>
<tr>
<td width="50%" valign="top">

### 🌐 Explore the Website

Discover technology content through a modern reading experience.

- Browse available articles.
- Explore technology topics.
- Read complete article details.
- Navigate through an intuitive interface.

<a href="https://techlens-frontend.onrender.com">Visit TechLens →</a>

</td>
<td width="50%" valign="top">

### ⚙️ Administration

A dedicated interface for authorized administrators.

- Administrator sign-in.
- Article management.
- Content publishing.
- Centralized administration.

<a href="https://techlens-frontend.onrender.com/admin">Open Admin Panel →</a>

</td>
</tr>
</table>

---

## ✦ 03 — Core Features

| Feature | Description |
|---|---|
| Modern Homepage | An engaging landing page introducing the platform. |
| Explore Articles | Browse available technology-related content. |
| Article Details | Read complete articles through dedicated pages. |
| Admin Authentication | Dedicated sign-in for administrators. |
| Content Management | Manage and publish blog content. |
| Responsive Interface | Designed for desktop, tablet, and mobile screens. |
| Backend API | Connects the frontend with application data. |
| Cloud Database | Stores application data using MongoDB Atlas. |

---

## ✦ 04 — Technology Behind the Platform

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,js,html,css,nodejs,express,mongodb,git,github,vscode" />
</p>

### Frontend

**React.js · JavaScript · HTML5 · CSS3**

Responsible for the visual interface, navigation, article presentation, and user interactions.

### Backend

**Node.js · Express.js**

Handles API requests, application logic, authentication, and communication with the database.

### Database

**MongoDB · MongoDB Atlas**

Provides data storage and cloud database connectivity.

### Deployment & Development

**Git · GitHub · Render · npm**

Supports source code management, package installation, and cloud deployment.

---

## ✦ 05 — How TechLens Works

```text
                 ┌──────────────────┐
                 │       USER       │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │  REACT FRONTEND  │
                 │   User Interface │
                 └────────┬─────────┘
                          │
                     API Requests
                          │
                          ▼
                 ┌──────────────────┐
                 │  EXPRESS + NODE  │
                 │   Backend API    │
                 └────────┬─────────┘
                          │
                     Database
                    Operations
                          │
                          ▼
                 ┌──────────────────┐
                 │     MONGODB      │
                 │   Data Storage   │
                 └──────────────────┘
```

The frontend communicates with the backend through API requests. The backend processes the requests and interacts with MongoDB to retrieve or update the necessary information.

---

## ✦ 06 — Project Architecture

```text
TECHLENS-Blog/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   ├── package.json
│   └── .env.example
│
├── server/
│   ├── src/
│   │   └── seed.js
│   ├── package.json
│   └── .env.example
│
├── render.yaml
├── .gitignore
└── README.md
```

*The directory overview highlights the major project areas; individual implementation files may vary.*

---

## ✦ 07 — Get Started

Want to explore the project locally? Follow these steps.

### Requirements

- Node.js and npm
- Git
- MongoDB Atlas account or a local MongoDB database
- Visual Studio Code or another code editor

### Step 1 — Clone the repository

```bash
git clone https://github.com/sujithamary-2607/TECHLENS-Blog.git

cd TECHLENS-Blog
```

### Step 2 — Install backend dependencies

```bash
cd server
npm install
```

### Step 3 — Configure environment variables

Create a `.env` file inside the `server` folder.

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_NAME=Blog Administrator
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

### Step 4 — Initialize the database

```bash
npm run seed
```

### Step 5 — Install frontend dependencies

Open another terminal:

```bash
cd client
npm install
```

Create a `.env` file inside the `client` folder:

```env
VITE_API_URL=http://localhost:5000/api
```

### Step 6 — Run the application

Start the backend:

```bash
cd server
npm start
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

Open the local development address displayed in the frontend terminal.

---

## ✦ 08 — Live Deployment

TechLens is deployed using Render, with MongoDB Atlas providing cloud database storage.

<p align="center">
  <strong>Explore the live application</strong>
</p>

| Service | Live URL |
|---|---|
| Main Application | [Open Website](https://techlens-frontend.onrender.com) |
| Admin Interface | [Open Admin Panel](https://techlens-frontend.onrender.com/admin) |
| GitHub Repository | [View Source Code](https://github.com/sujithamary-2607/TECHLENS-Blog) |

---

## ✦ 09 — Security & Best Practices

Security is an important consideration in full-stack application development.

TechLens uses environment-based configuration to separate sensitive values from application source code.

- Keep database credentials private.
- Never upload `.env` files to GitHub.
- Use `.env.example` to document configuration requirements.
- Protect authentication secrets.
- Restrict administrative operations to authorized users.
- Use secure and appropriate production configuration.

---

## ✦ 10 — Future Roadmap

The platform can be extended with additional features to improve content discovery and reader engagement.

- [ ] Advanced article search and filtering.
- [ ] Reader registration and personal accounts.
- [ ] Bookmark and save articles.
- [ ] Comments and discussion functionality.
- [ ] Personalized article recommendations.
- [ ] Newsletter subscription.
- [ ] Social media sharing.
- [ ] Advanced administrative analytics.
- [ ] More content categories and reading features.

---

## ✦ 11 — What This Project Demonstrates

TechLens brings together several practical full-stack development concepts:

- Component-based frontend development.
- REST API integration.
- Server-side application development.
- Database connectivity and data management.
- Authentication and access control.
- Environment variable configuration.
- Cloud deployment.
- GitHub version control and collaboration.

---

## ✦ 12 — Final Words

Technology is more than information — it is a continuous journey of learning, discovery, and innovation.

**TechLens** aims to make that journey easier by creating a space where readers can explore ideas, discover technology, and stay connected with the digital world.

<p align="center">
  <strong>TECHLENS</strong>
  <br/>
  <em>A clearer lens into the world of technology.</em>
  <br/><br/>
  <a href="https://techlens-frontend.onrender.com">EXPLORE TECHLENS →</a>
</p>
