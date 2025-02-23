## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running the app](#-running-the-app)
- [🛣 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

## 📍 Overview



## 📂 Repository Structure
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
│   │   ├── assests/            # Contains Image files
│   │
│   ├── src/                        # React source files
│   │   ├── assets/                 # Dont Consider
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
│   │   │
│   │   ├── App.jsx                    # Root component
│   │   ├── App.css
│   │   ├── main.jsx                    # Entry point
│   │   ├── index.css                   # Global styles
│   │
│   ├── .env                            # Frontend environment variables
│   ├── .gitignore                       # Ignore unnecessary files
│   ├── vite.config.js                   # Vite configuration
│   ├── package.json                     # Project metadata
│   ├── package-lock.json                 # Dependencies lockfile
│   ├── index.html
│   ├── enlist.config.js
|
├── node_modules
├── package.json                     # Project metadata
├── package-lock.json  
├── README.md                            # Project documentation
└── LICENSE                               # License file


## ⚙️ Modules

### Backend



### Frontend

- **React-based UI** with routes and components.
- **Uses Vite for development.**
- **Styled using TailwindCSS.**

## 🚀 Getting Started

### 🔧 Installation

1. Clone the repository:

```sh
git clone https://github.com/Vasanth2310/Personalized-AI-Gym-Trainer
```

2. Navigate to the project directory:

```sh
cd Personalized-AI-Gym-Trainer
```

3. Install backend dependencies:

```sh
cd backend
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

---

## 🛣 Project Roadmap

> - [X] `ℹ️  Task 1: `
> - [X] `ℹ️  Task 2: `
> - [X] `ℹ️  Task 3: `
> - [X] `ℹ️  Task 4: `

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👏 Acknowledgments

Special thanks to the contributors and open-source projects that made this possible!