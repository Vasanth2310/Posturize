# 📖 Posturize

## 📖 Table of Contents

- [📍 Overview](#-overview)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running the app](#-running-the-app)
- [🛣 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

## 📍 Overview

**Posturize** is an AI-powered fitness web application that utilizes computer vision to analyze body posture, evaluate form, count repetitions, and provide real-time feedback during workouts. The app helps users improve their exercise technique, reduce the risk of injuries, and enhance workout efficiency using AI-driven posture correction.

### **Key Features:**
✅ AI-based posture detection and correction  
✅ Real-time feedback on form and movement  
✅ Automated rep counting and error detection  
✅ Exercise recommendations based on performance  
✅ Secure authentication for personalized experiences  
✅ Responsive and interactive React-based UI  

## 📂 Repository Structure

```
posturize/
│── backend/
│   ├── Models/
│   │   ├── Excercise_Model.pth
│   │
│   ├── main.py                   # Backend entry point
│   ├── exercise_analysis.py       # Core logic for posture analysis
│   ├── requirements.txt           # Dependencies
│   ├── .env                       # Environment variables
│
├── frontend/                     # Frontend (React/Vite)
│   ├── public/                    # Public assets
│   │   ├── assets/                 # Contains image files
│   │
│   ├── src/                        # React source files
│   │   ├── components/             # Reusable UI components
│   │   │   ├── HomeScreen.jsx
│   │   │   ├── LoginScreen.jsx
│   │   │   ├── CreateAccountScreen.jsx
│   │   │   ├── PricingScreen.jsx
│   │   │   ├── TrainerScreen.jsx
│   │   │   ├── HomeScreen.css
│   │   │   ├── LoginScreen.css
│   │   │   ├── PricingScreen.css
│   │   │   ├── Trainer.css
│   │
│   │   ├── App.jsx                 # Root component
│   │   ├── App.css
│   │   ├── main.jsx                 # Entry point
│   │   ├── index.css                # Global styles
│   │
│   ├── .env                         # Frontend environment variables
│   ├── .gitignore                    # Ignore unnecessary files
│   ├── vite.config.js                # Vite configuration
│   ├── package.json                  # Project metadata
│   ├── package-lock.json              # Dependencies lockfile
│   ├── index.html
│
├── node_modules
├── package.json                      # Project metadata
├── package-lock.json  
├── README.md                          # Project documentation
└── LICENSE                             # License file
```

## ⚙️ Modules

### **Backend (FastAPI + Python)**
- **FastAPI** – Backend framework for handling API requests.
- **Mediapipe** – Used for real-time pose estimation.
- **OpenCV** – Processes video frames and detects keypoints.
- **NumPy** – Handles angle computations for posture analysis.
- **YOLO** – To identify the person and draw keypoints for pose detection.
- **JWT (JSON Web Tokens)** – Secure user authentication.

### **Frontend (React + Vite)**
- **React.js** – For building an interactive and responsive UI.
- **Vite** – Optimized development and production builds.
- **TailwindCSS** – For modern, flexible styling.
- **Fetch API** – Connects frontend with backend for real-time analysis.

## 🚀 Getting Started

### 🔧 Installation

1. Clone the repository:

```sh
git clone https://github.com/Vasanth2310/Posturize.git
```

2. Navigate to the project directory:

```sh
cd Posturize
```

3. Install backend dependencies:

```sh
cd backend
pip install -r requirements.txt
```

4. Install frontend dependencies:

```sh
cd frontend
npm install
```

### 🤖 Running the app

1. Start the backend server:

```sh
cd backend
uvicorn main:app --reload
```

2. Start the frontend application:

```sh
cd frontend
npm run dev
```

## 🛣 Project Roadmap

- [X] Implement AI-based posture detection
- [X] Build React-based interactive frontend
- [X] Add real-time feedback and error tracking
- [X] Deploy backend and frontend on Vercel
- [ ] Integrate personalized workout plans

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👏 Acknowledgments

Special thanks to the contributors and open-source projects that made this possible!

🚀 **Posturize – Perfect Your Form, Elevate Your Fitness!**