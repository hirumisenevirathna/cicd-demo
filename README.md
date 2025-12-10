# CI/CD Demo Project

This repository contains a simple **Node.js application** created to demonstrate a full **CI/CD (Continuous Integration and Continuous Deployment) pipeline** using **GitHub Actions**, **Docker**, and **Railway**.

---

## 🚀 Project Overview

The goal of this project is to show how code changes can be automatically:
- Tested
- Built
- Deployed

with **no manual intervention**, using modern DevOps tools.

---

## 🛠 Tools & Technologies

- **Node.js** – Backend application
- **Docker** – Containerization
- **GitHub Actions** – Continuous Integration (CI)
- **Railway** – Continuous Deployment (CD)

---

## 📁 Project Structure

<img width="365" height="249" alt="image" src="https://github.com/user-attachments/assets/3ebed871-3bb5-459a-9183-5fd829115bd0" />


---

## 🐳 Dockerfile Explanation

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]

```

### Explanation:

- Uses a lightweight Node.js 18 Alpine image
- Creates /app directory inside the container
- Installs dependencies using npm ci
- Copies application code
- Exposes port 3000
- Starts the app using Node.js

### ⚙️ CI Pipeline (GitHub Actions)

The CI pipeline is triggered automatically when code is pushed to the main branch.

CI Steps:
- Checkout source code
- Setup Node.js (v18)
- Install dependencies
- Build Docker image

✅ If all steps pass, the pipeline shows a green check mark.
<img width="1905" height="864" alt="image" src="https://github.com/user-attachments/assets/e3719bcc-be4d-4dc1-b716-705bce49fa24" />


### 🚢 Deployment with Railway (CD)

1. GitHub repository is connected to Railway
2. Railway detects the Dockerfile
3. Docker image is built in the cloud
4. Application runs inside a container
5. Railway provides a Generated Domain (live URL)

▶️ Running the Application
- This project uses cloud-based deployment.
- Docker was not run locally
- The Docker build happens inside GitHub Actions
- Deployment is managed by Railway
- You can access the application using the Railway Generated Domain.

<img width="1914" height="844" alt="image" src="https://github.com/user-attachments/assets/d3ee62bb-6119-4f8c-8613-f6037ac2111e" />

✅ CI/CD Flow (Simple Explanation)

Code Push → GitHub Actions (CI) → Docker Build → Railway Deploy → Live URL
