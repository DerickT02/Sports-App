Documentation
Getting Started – Cloning the Repository
To get started with the project locally, follow these steps:
1.	Clone the GitHub Repository
Use the following commands in your terminal:
git clone https://github.com/DerickT02/Sports-App.git
cd Sports-App/frontend
2.	Install dependencies
Using npm:
npm install
3.	Run the development server
npm run dev



The project follows a common structure for modern frontend applications using Vite and React. Below is an overview of the frontend directory and its contents:
```
Sports-App/
├── frontend/                # Main frontend application directory
│   ├── public/             # Static assets that are publicly available (e.g., icons, manifest)
│   ├── src/                # Source files for the React application
│   │   ├── assets/        # Images, logos, and other static assets used by the app
│   │   ├── components/    # Reusable React components such as buttons, inputs, etc.
│   │   ├── pages/         # Top-level page components for different routes/views
│   │   ├── firebase.ts    # Firebase configuration and initialization (TypeScript version)
│   │   ├── App.jsx        # Main React component that serves as the app's entry point
│   │   ├── main.jsx       # The actual entry point rendering the React app into the DOM
│   ├── .env               # Environment variables for sensitive and configurable values
│   ├── vite-env.d.ts      # Type definitions for custom environment variables (TypeScript)
│   ├── index.html         # HTML template used by Vite to serve the app
│   ├── vite.config.ts     # Configuration for Vite (now using TypeScript)
│   ├── package.json       # Project dependencies and scripts
```
Firebase Setup – Step 3 & 4
Step 3: Create firebase.ts
This file handles the Firebase configuration and initialization. Using TypeScript improves code reliability, enables better autocompletion, and catches potential errors early.
Create a file at src/firebase.ts and add the following:
```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",            // Retrieved from Firebase Console
  authDomain: "YOUR_AUTH_DOMAIN",    // Retrieved from Firebase Console
  projectId: "YOUR_PROJECT_ID",      // Retrieved from Firebase Console
  appId: "YOUR_APP_ID",              // Retrieved from Firebase Console
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```
Step 4: (Optional but recommended) Use .env for Firebase config
Instead of hardcoding your credentials, store them in environment variables using a .env file. This approach keeps sensitive data out of your codebase and supports different configurations for dev/staging/prod.
Create a .env file at the root of the frontend/ directory with:
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_APP_ID=your-app-id

Then, update firebase.ts to use these environment variables:
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
💡 This ensures your API keys are configurable and secure, and supports different values for different environments.
 
Type-Safe Environment Configuration (vite-env.d.ts)
To ensure TypeScript knows about your custom environment variables (like the ones used above), create a file called vite-env.d.ts in your project root:
interface ImportMetaEnv {
  readonly VITE_YOUR_URL: string;
  readonly VITE_REALM: string;
  readonly VITE_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

✅ Why this matters:
•	Autocompletion: Helps your editor suggest and validate variable names.
•	Type Safety: Ensures your code doesn’t reference undefined or misnamed variables.
•	Clarity: Clearly documents which environment variables are required.
🛑 Don’t forget to add .env to your .gitignore so secrets aren't committed!
 

