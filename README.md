# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules using Node.js 20.

## Prerequisites

- Node.js 20.x.x

## Project Setup

1. **Create a new Vite project:**

    ```bash
    npm create vite@latest my-react-app -- --template react-ts
    cd my-react-app
    ```

2. **Install the necessary dependencies:**

    ```bash
    npm install
    ```

3. **Install ESLint and related plugins:**

    ```bash
    npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react --save-dev
    ```

4. **Initialize ESLint configuration:**

    ```bash
    npx eslint --init
    ```

    Choose the following options during the initialization process:
    - How would you like to use ESLint? **To check syntax, find problems, and enforce code style**
    - What type of modules does your project use? **JavaScript modules (import/export)**
    - Which framework does your project use? **React**
    - Does your project use TypeScript? **Yes**
    - Where does your code run? **Browser**
    - How would you like to define a style for your project? **Use a popular style guide**
    - Which style guide do you want to follow? **Airbnb**
    - What format do you want your config file to be in? **JSON**

    After the configuration is complete, you may need to install additional dependencies. Follow the on-screen instructions to do so.

5. **Configure ESLint for TypeScript and React:**

    Replace the contents of your `.eslintrc.json` with the following configuration:

    ```json
    {
      "env": {
        "browser": true,
        "es2021": true
      },
      "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:react/jsx-runtime",
        "airbnb",
        "airbnb/hooks"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json", "./tsconfig.node.json"],
        "tsconfigRootDir": "__dirname"
      },
      "plugins": [
        "react",
        "@typescript-eslint"
      ],
      "rules": {
        // add or modify rules here
      }
    }
    ```

6. **Configure TypeScript:**

    Ensure your `tsconfig.json` and `tsconfig.node.json` are properly set up. Here’s an example `tsconfig.json`:

    ```json
    {
      "compilerOptions": {
        "target": "esnext",
        "useDefineForClassFields": true,
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": false,
        "skipLibCheck": true,
        "esModuleInterop": false,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noFallthroughCasesInSwitch": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
      },
      "include": ["src"]
    }
    ```

7. **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the Vite development server with HMR enabled.

## Additional Notes

- **Expanding ESLint Rules:**

    If you are developing a production application, it is recommended to use stricter linting rules. Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`. You can also add `plugin:@typescript-eslint/stylistic-type-checked` for stylistic rules.

- **Using SWC for Fast Refresh:**

    If you prefer to use SWC instead of Babel for fast refresh, install the SWC plugin:

    ```bash
    npm install @vitejs/plugin-react-swc --save-dev
    ```

    Update your `vite.config.ts`:

    ```ts
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react-swc'

    export default defineConfig({
      plugins: [react()]
    })
    ```

This setup should provide a robust foundation for developing a React application with TypeScript using Vite.
