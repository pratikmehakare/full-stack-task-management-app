# Full-Stack Task Management App

A **MERN stack** application designed to simplify and enhance task management. This app provides a robust platform for users to create, track, and manage their tasks efficiently, with support for deployment on Vercel and Render.

---

## Features

- **User Authentication**: Secure sign-up, log-in, and session management.
- **Task Management**: Create, update, delete, and organize tasks.
- **Responsive Design**: Optimized for mobile, tablet, and desktop users.

---

## Tech Stack

### Frontend:
- **React.js**: Component-based library for building the user interface.
- **Redux**: State management for efficient data flow.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### Backend:
- **Node.js**: JavaScript runtime for server-side scripting.
- **Express.js**: Web framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for storing application data.

### Deployment:
- **Render**: Hosting for the backend and database.
- **Vercel**: Hosting for the frontend.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pratikmehakare/full-stack-task-management-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd full-stack-task-management-app
   ```
3. Install dependencies for the frontend:
   ```bash
   npm install
   ```
4. Install dependencies for the backend:
   ```bash
   cd ../server
   npm install
   ```

---

## Usage

### Run the Backend:
1. Create a `.env` file in the `server` directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   ```
2. Start the backend server:
   ```bash
   node server.js
   ```

### Run the Frontend:
1. Create a `.env` file in the root directory with the following variables:
   ```env
   REACT_APP_API_BASE_URL = your_backend_url
   ```
2. Navigate to the `full-stack-task-management-app` directory:
   ```bash
   cd full-stack-task-management-app
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

---

## Folder Structure

```
full-stack-task-management-app/
├── src/           # Frontend code
├── server/           # Backend code
├── .gitignore        # Ignored files for Git
├── README.md         # Project documentation
```

---

## API Endpoints

### Authentication:
- **POST** `/api/v1/register`: Register a new user.
- **POST** `/api/v1/login`: Log in a user.

### Tasks:
- **GET** `/api/v1/getItem`: Get a list of all Item.
- **POST** `/api/v1/addItem`: Create a new item.

---

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## Contact

For questions or suggestions, reach out to:

- **Name**: Pratik Mehakare
- **GitHub**: [https://github.com/pratikmehakare](https://github.com/pratikmehakare)



