# Products App

This is a simple Products App built with Angular, and it integrates with Firebase for authentication and Firestore for storing product data. The app allows users to register, log in, add products, edit products directly in the product list, and delete products.

## Table of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Firebase Configuration](#firebase-configuration)

---

## Requirements

- Node.js (v14 or later)
- Angular CLI (v12 or later)
- Firebase Account

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-repo/products-app.git
    cd products-app
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up your Firebase project:**
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project.
    - Enable Authentication (Email/Password).
    - Create a Firestore database.
    - Add your project configuration to `src/environments/environment.ts`.

## Firebase Configuration

Create or update the `src/environments/environment.ts`
