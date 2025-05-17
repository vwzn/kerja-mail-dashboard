
# <img src="https://img.icons8.com/color/48/000000/react-js.png" width="30"/> Kerja Mail Dashboard

A modern, full-stack email administration dashboard with authentication and domain management.


---
## 🛠 Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge\&logo=react-router\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge\&logo=JSON%20web%20tokens\&logoColor=white)

### Database

![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge\&logo=mysql\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge\&logo=Prisma\&logoColor=white)

---

## ✨ Features

* **Secure Authentication**
  JWT-based login/register with protected routes
* **Dashboard Overview**
  Beautiful metrics and statistics visualization
* **Domain Management**
  Full CRUD operations for email domains
* **Responsive Design**
  Works flawlessly on desktop and mobile
* **Modern Stack**
  Built with cutting-edge technologies

---

## 🚀 Quick Start

### Prerequisites

* Node.js v16+
* MySQL 8.0+
* Yarn (recommended)

---

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vwzn/kerja-mail-dashboard.git
   cd kerja-mail-dashboard
   ```

2. **Set up environment variables**

   ```bash
   # Backend
   cp server/.env.example server/.env

   # Frontend
   cp client/.env.example client/.env
   ```

3. **Install dependencies**

   ```bash
   # Backend
   cd server && yarn install

   # Frontend
   cd ../client && yarn install
   ```

4. **Database setup**

   ```bash
   cd ../server
   npx prisma migrate dev
   ```

5. **Running the app**

   ```bash
   # Start backend (from /server directory)
   yarn start

   # Start frontend (from /client directory)
   yarn dev
   ```

📍 Access the app:

* **Frontend:** [http://localhost:3000](http://localhost:3000)
* **Backend API:** [http://localhost:5000](http://localhost:5000)

---


## 📚 Documentation

* **API Reference** – Complete API endpoints documentation
* **Database Schema** – Database structure and relations
* **Frontend Architecture** – Component hierarchy and state management

---

## 🤝 Contributing

We welcome contributions!
To get started:

1. Fork the project
2. Create your feature branch

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License.
See [`LICENSE`](./LICENSE) for more information.

---


## 🎨 Customization Tips

* 🔁 Replace **placeholder images** with real screenshots of your app
* 🛠 Update **tech badges** if your stack differs
* 🎞 Add **demo GIF** (e.g., using [ScreenToGif](https://www.screentogif.com/))
* 🚀 Include **deployment instructions** if hosted (e.g., Vercel, Heroku)
* 💬 Add **testimonials** or user feedback if available

---


