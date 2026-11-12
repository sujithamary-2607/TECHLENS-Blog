# TechLens | Modern Technology Blog Platform

<p align="center">
  <strong>Explore Technology. Discover Ideas. Stay Informed.</strong>
</p>

<p align="center">
  A modern, responsive, and dynamic blogging platform built to explore, publish, and manage technology-related content.
</p>

<p align="center">
  <a href="https://techlens-frontend.onrender.com">Live Website</a> •
  <a href="https://techlens-frontend.onrender.com/admin">Admin Dashboard</a> •
  <a href="https://github.com/sujithamary-2607/TECHLENS-Blog">Source Code</a>
</p>

---

## About the Project

**TechLens** is a full-stack technology blogging platform developed to make technology knowledge more accessible, engaging, and convenient.

In a rapidly evolving digital world, staying informed about emerging technologies, software development, artificial intelligence, cybersecurity, and other innovations is increasingly important. TechLens provides a centralized platform where readers can explore informative articles, discover new ideas, and gain practical knowledge from technology-related content.

The application combines a modern React-based frontend with a Node.js and Express backend, supported by MongoDB for data storage.

TechLens also provides a dedicated administration interface that allows authorized administrators to manage blog content and maintain the platform.

The primary focus of this project is to deliver a smooth reading experience, organized content discovery, and convenient content management through a responsive web application.

## Project Objectives

The main objectives of TechLens are:

- To develop a centralized platform for technology-related articles and knowledge sharing.
- To provide users with an attractive and easy-to-navigate reading experience.
- To organize articles into relevant technology topics and categories.
- To provide an administrative interface for managing blog content.
- To implement secure authentication and backend API communication.
- To develop a responsive application that works across different screen sizes.
- To demonstrate the integration of frontend, backend, and database technologies in a full-stack application.
- To deploy the application using cloud-based hosting services.

## Key Features

### 1. Modern Homepage

- Attractive landing page with a modern visual layout.
- Introduction to the TechLens platform.
- Organized sections for discovering technology content.
- Responsive design for different devices.
- Easy navigation between important sections.

### 2. Explore Articles

- Dedicated article discovery section.
- Browse available technology articles.
- Discover content across different topics.
- Organized article presentation.
- Easy navigation from article listings to individual articles.

### 3. Article Reading Experience

- Dedicated page for individual articles.
- Display complete article information and content.
- Structured reading layout.
- Clear navigation between the article listing and article details.

### 4. Admin Dashboard

- Dedicated administrator sign-in page.
- Authentication-based access to administrative features.
- Centralized content management interface.
- Tools for managing blog articles.
- Administrative control over publishing and maintaining content.

### 5. Content Management

- Create and manage blog articles.
- Organize content for publication.
- Maintain article information.
- Manage published content through the administrative interface.

### 6. Responsive User Interface

- Responsive page layouts.
- Consistent visual presentation.
- User-friendly navigation.
- Adaptation to desktop, tablet, and mobile screens.
- Modern styling and interactive interface elements.

## Technology Stack

TechLens is developed using the MERN technology stack.

| Technology | Purpose |
|---|---|
| MongoDB | Database management and storage |
| Express.js | Backend web framework and API development |
| React.js | Frontend user interface |
| Node.js | Server-side JavaScript runtime |
| JavaScript | Application logic and interactivity |
| HTML5 | Web page structure |
| CSS3 | Styling and responsive layouts |
| npm | Dependency and package management |
| Render | Cloud application deployment |
| MongoDB Atlas | Cloud database hosting |
| Git and GitHub | Version control and source code management |

## System Architecture

TechLens follows a client-server architecture in which the frontend, backend, and database communicate to provide the application's functionality.

```text
              USER
                |
                v
        REACT FRONTEND
                |
                | HTTP Requests
                v
       NODE.JS + EXPRESS API
                |
                | Database Queries
                v
          MONGODB ATLAS
                |
                v
         STORED DATA
                |
                v
       API RESPONSE TO CLIENT
                |
                v
        DISPLAYED CONTENT
```

### Frontend Layer

The frontend is developed using React.js, HTML, CSS, and JavaScript.

It is responsible for:
- Displaying the website interface.
- Rendering article listings and article details.
- Providing navigation between pages.
- Communicating with backend APIs.
- Displaying information received from the server.

### Backend Layer

The backend is developed using Node.js and Express.js.

It is responsible for:
- Handling incoming API requests.
- Managing application routes.
- Processing authentication requests.
- Managing article-related operations.
- Communicating with the database.
- Returning responses to the frontend.

### Database Layer

MongoDB is used to store and manage application data.

MongoDB Atlas provides cloud-hosted database services, allowing the deployed backend to access stored information remotely.

## Application Structure

The repository is organized into separate frontend and backend directories.

```text
TECHLENS-Blog/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── .env.example
│
├── server/
│   ├── src/
│   │   └── seed.js
│   │
│   ├── package.json
│   └── .env.example
│
├── render.yaml
├── .gitignore
└── README.md
```

*Note: The structure above illustrates the main application organization. Individual files and folders may vary depending on the implementation.*

## Installation and Setup

Follow the instructions below to run TechLens locally.

### Prerequisites

Install the following before starting:

- Node.js
- npm
- Git
- MongoDB Atlas account or a local MongoDB installation
- A code editor such as Visual Studio Code

### Step 1: Clone the Repository

```bash
git clone https://github.com/sujithamary-2607/TECHLENS-Blog.git
```

Navigate into the project:

```bash
cd TECHLENS-Blog
```

### Step 2: Configure the Backend

Navigate to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the server directory.

Add the following configuration:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_NAME=Blog Administrator
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

Replace the placeholder values with your own configuration.

### Step 3: Initialize the Database

Run the seed command:

```bash
npm run seed
```

This initializes the database using the project's seed script.

### Step 4: Configure the Frontend

Open a new terminal and navigate to the client directory:

```bash
cd client
```

Install the frontend dependencies:

```bash
npm install
```

Create a `.env` file inside the client directory:

```env
VITE_API_URL=http://localhost:5000/api
```

### Step 5: Start the Backend Server

From the server directory, execute:

```bash
npm start
```

The backend will start using the configured server port.

### Step 6: Start the Frontend Application

From the client directory, execute:

```bash
npm run dev
```

Open the local development URL displayed in the terminal.

## Live Deployment

TechLens is deployed using Render and uses MongoDB Atlas for cloud database management.

| Component | Deployment |
|---|---|
| Frontend | Render Static Site |
| Backend | Render Web Service |
| Database | MongoDB Atlas |
| Source Code | GitHub |

### Live Application Links

**Main Website:**  
https://techlens-frontend.onrender.com

**Admin Dashboard:**  
https://techlens-frontend.onrender.com/admin

**GitHub Repository:**  
https://github.com/sujithamary-2607/TECHLENS-Blog

## Security and Configuration

Security and configuration management are important parts of the application.

The project uses environment variables to keep sensitive configuration separate from source code.

Important practices include:

- Store database connection strings in environment variables.
- Keep authentication secrets private.
- Never commit `.env` files to GitHub.
- Use `.env.example` to document required configuration.
- Restrict administrative access through authentication.
- Avoid exposing database credentials in public repositories.

## Benefits of TechLens

- **Centralized Knowledge:** Provides a single platform for accessing technology-related articles.
- **Easy Content Discovery:** Helps readers explore different technology topics.
- **Efficient Management:** Provides administrators with a dedicated content management interface.
- **Responsive Experience:** Supports access from different screen sizes.
- **Full-Stack Implementation:** Demonstrates practical integration of frontend, backend, and database technologies.
- **Cloud Accessibility:** Makes the application accessible through a deployed web interface.

## Future Enhancements

The following improvements could be introduced in future versions:

- Advanced article search and filtering.
- Reader registration and personalized accounts.
- Article bookmarking and reading history.
- Comments and user engagement features.
- Article recommendation functionality.
- Newsletter subscription.
- Enhanced analytics for administrators.
- Improved content categorization.
- Social media sharing integration.
- Additional accessibility improvements.

## Learning Outcomes

Developing TechLens provides practical experience in:

- Full-stack web application development.
- React component-based architecture.
- REST API development using Express.js.
- Backend programming with Node.js.
- Database integration using MongoDB.
- Authentication and environment configuration.
- Frontend and backend integration.
- GitHub repository management.
- Cloud deployment using Render.
- Debugging and application testing.

## Conclusion

TechLens demonstrates how modern web technologies can be integrated to create a functional, responsive, and content-driven blogging platform.

By combining an engaging frontend, structured backend services, and cloud-based database storage, the project provides a foundation for publishing and exploring technology knowledge.

The platform aims to make technology content easier to discover while providing administrators with convenient tools to maintain and manage articles.

---

<p align="center">
  <strong>TECHLENS</strong>
  <br/>
  Explore Technology. Discover Ideas. Stay Informed.
  <br/><br/>
  Built with passion for technology and knowledge sharing.
</p>
