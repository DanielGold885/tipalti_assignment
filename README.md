# Playwright Automation Project

## 📌 Overview
This project automates the testing of a web application using **Playwright** and **TypeScript**, following the **Page Object Model (POM)** for maintainability. The tests run inside a **Docker container** and generate an **HTML report** for easy debugging.

---

## 📂 Project Structure
```
automation-project/
│── src/
│   │── core/            # Browser handling
│   │   ├── BrowserHandler.ts
│   │── pages/           # Page Object Model (POM) classes
│   │   ├── HomePage.ts
│   │── tests/           # Test files
│   │   ├── menuTest.spec.ts
│   │── utils/           # Config and helper functions
│── playwright-report/   # HTML test reports (mapped from Docker)
│── Dockerfile           # Docker setup
│── package.json         # Dependencies
│── README.md            # Project documentation
│── .gitignore           # Ignore files that should not be commited
```

---

## 🚀 Installation & Setup
### **1️⃣ Install Dependencies**
```sh
npm install
```

### **2️⃣ Run Tests Locally**
```sh
npx playwright test --reporter=html
npx playwright show-report
```

---

## 🐳 Running with Docker
### **1️⃣ Build the Docker Image**
```sh
docker build --no-cache -t playwright-tests .
```

### **2️⃣ Run Tests in Docker**
```sh
docker run --rm -v $(pwd)/playwright-report:/app/report playwright-tests
```

---
