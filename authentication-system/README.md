# Next.js Authentication System

This project is a simple username/password authentication system built with Next.js for the frontend and backend, Redux for state management, and TypeScript. It includes API endpoints with bearer token authentication, and a custom `useAuthSession` hook to manage the user's authentication session on the client side. It also uses `react-toastify` for toast notifications.

## Features

- User login with JWT authentication.
- Protected API routes.
- Custom hook to manage authentication session.
- Redux for state management.
- Toast notifications for errors and successful login/logout actions.
- Styled using CSS.

## Project Structure

my-auth-app/
├── hooks/
│ └── useAuthSession.ts
├── pages/
│ ├── api/
│ │ ├── auth/
│ │ │ ├── login.ts
│ │ │ └── user.ts
│ ├── _app.tsx
│ └── index.tsx
├── slices/
│ └── authSlice.ts
├── store/
│ └── index.ts
├── styles/
│ └── globals.css
├── public/
│ └── favicon.ico
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md


## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:
   git clone https://github.com/your-username/my-auth-app.git
   cd my-auth-app

2. Install dependencies:
   npm install
   # or
   yarn install

3.  Running the Development Server
  Start the development server:
  npm run dev
  # or
  yarn dev

# For successful login, login credentials are :
1. username : user
2. password : password

## Project Details
store/index.ts
This file sets up the Redux store and exports hooks for dispatching actions and selecting state.

slices/authSlice.ts
This file contains the Redux slice for authentication state, including actions to set and clear credentials.

pages/api/auth/login.ts
This API route handles user login, validates credentials, and returns a JWT token if the credentials are valid.

pages/api/auth/user.ts
This API route returns the authenticated user's data if a valid token is provided in the request headers.

hooks/useAuthSession.ts
This custom hook manages the user's authentication session, including login, logout, and checking if the user is authenticated.

pages/_app.tsx
This file customizes the App component to include the Redux Provider and ToastContainer.

pages/index.tsx
This is the main page component that handles user login and displays a welcome message if the user is authenticated.

styles/globals.css
This file contains global styles for the application.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgements
Next.js
Redux Toolkit
TypeScript
React Toastify


