# DevOps PoC – Local CI/CD with Docker & Terraform

This is a local proof-of-concept DevOps project showcasing:

- A Dockerized Node.js app
- Infrastructure provisioning simulated via Terraform
- Build automation with GitHub Actions (to be added)

## 📁 Project Structure

```
devops-poc/
├── app/                # Node.js app with Dockerfile
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
├── terraform/          # Terraform config to trigger Docker build
│   └── main.tf
├── ci-cd/              # GitHub Actions workflows (coming in Day 2)
├── .gitignore
├── README.md
```

## 🚀 Getting Started

### 1. Run the App Locally

```bash
cd app
docker build -t devops-poc .
docker run -p 3000:3000 devops-poc
```

Visit [http://localhost:3000](http://localhost:3000)

### 2. Trigger Docker Build via Terraform

```bash
cd terraform
terraform init
terraform apply
```

This simulates infrastructure provisioning by triggering a Docker build via local script.

## 🧪 Coming Next

- GitHub Actions CI/CD
- Local logging integration
- Secrets management simulation
