# Dermacare Frontend

&#x20;

**Dermacare** is a dermatology hospital management system that enables patients to have virtual skincare analysis, book appointments, view prescriptions, and communicate with doctors while providing staff with an efficient way to manage clinical operations.

This repository contains the **frontend** built with **Vite + React**, featuring a clean UI, real-time messaging, and PDF prescription downloads.

## 🚀 Features

- **Patient Portal:** Book appointments, view medical history, and prescriptions.
- **Doctor Dashboard:** Manage patients, prescribe medications, and send messages.
- **Real-time Messaging:** Secure chat system between patients and hospital staff.
- **PDF Export:** Download prescriptions with doctor signatures.
- **Authentication & Authorization:** Role-based access for patients and staff.

## 🛠️ Tech Stack

- **Frontend:** React (Vite), Joy UI, MUI, Axios
- **Backend:** Django (REST Framework) [Hosted on Railway](https://railway.app)
- **Database:** PostgreSQL
- **Real-time Messaging:** WebSockets

## 💂️ Project Structure

```
dermacare-frontend/
│── public/            # Static assets
│── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom hooks
│   ├── services/      # API calls
│   ├── context/       # Global state management
│   ├── assets/        # Images and icons
│   ├── App.jsx        # Main entry point
│   ├── main.jsx       # React DOM rendering
│── .env.example       # Environment variables sample
│── vite.config.js     # Vite configuration
│── package.json       # Dependencies
│── README.md          # Project documentation
```

## 🛠️ Setup & Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/sdabbey/dermacare-frontend.git
   cd dermacare-frontend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:** Create a `.env` file in the root directory and configure it based on `.env.example`.

4. **Run the development server:**

   ```sh
   npm run dev
   ```

5. **Build for production:**

   ```sh
   npm run build
   ```

## 🌍 Deployment

DermaCare Frontend is optimized for deployment on platforms like **Vercel**, **Netlify**, or **Railway**.

To deploy manually:

```sh
npm run build
npm install -g serve
serve -s dist
```

## 📌 API Integration

The frontend communicates with the **Django REST API**, hosted at:

```
https://dermacare-backend.up.railway.app/
```

All API requests are handled using **Axios** via `src/services/api.js`.

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork the repository**
2. **Create a new branch** (`feature/my-feature`)
3. **Commit your changes** (`git commit -m "Added new feature"`)
4. **Push to the branch** (`git push origin feature/my-feature`)
5. **Create a Pull Request**

## 🛡️ License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for more details.

---

**Note:** For backend integration and API endpoints, refer to the [**Dermacare Backend Repository**](https://github.com/sdabbey/dermacare-backend)

