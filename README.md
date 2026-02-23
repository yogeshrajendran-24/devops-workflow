🚀 DevOps Workflow – CI/CD with Docker & K3s

📌 Project Overview

This project demonstrates an end-to-end CI/CD pipeline using GitHub Actions, Docker, Docker Hub, Kubernetes (K3s), and AWS EC2.
The application is a simple frontend web app deployed automatically on every push to the main branch.

🛠️ Tech Stack

Git & GitHub | GitHub Actions (CI/CD) | Docker | Docker Hub | Kubernetes (K3s) | AWS EC2 (Ubuntu t3.small) | Linux | Nginx

⚙️ CI/CD Workflow

Developer pushes code to GitHub.

GitHub Actions triggers automatically.

Docker image is built and pushed to Docker Hub.

GitHub Actions connects to AWS EC2 via SSH.

K3s pulls the latest image and performs a rolling restart.

Application is updated and accessible via NodePort.

🐳 Docker

Build locally:

docker build -t devops-workflow .
docker run -p 8080:80 devops-workflow

☁️ Deployment (K3s on AWS EC2)

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

Access the application: http://<EC2-PUBLIC-IP>:30007

📂 Project Structure
devops-workflow/
│
├── index.html
├── script.js
├── style.css
├── Dockerfile
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
└── .github/workflows/deploy.yml


🔐 GitHub Secrets Used

DOCKER_USERNAME
DOCKER_PASSWORD
EC2_HOST
EC2_SSH_KEY

🎯 Key Features

Automated CI/CD pipeline

Dockerized application

Kubernetes deployment (K3s)

Rolling updates

Cloud deployment on AWS
