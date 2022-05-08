
<h1 align="center">
    <a href="https://feedget-ashy.vercel.app"> FEEDGET </a>
</h1>

<p align="center">
 <a href="#about">About</a> •
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#license">License</a> 
</p>


## About

FEEDGET is a widget that is in the lower right corner of the application, it allows the user to send feedback to developers in a practical and simple way, in it you can send 3 types of feedback: bug, idea and others. these feedbacks are sent to the backend where they are stored and emailed to the devs. Project developed during ** NLW - Next Level Week ** offered by [Rocketseat](https://blog.rocketseat.com.br/)

---


## How it works

This project is divided into three parts:
1. Backend (server folder)
2. Frontend (web folder)
3. Mobile (mobile folder)

Both Frontend and Mobile need the Backend to be running to work.

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

#### Rodando o Backend (servidor)

```bash

# Clone this repository
$ git clone git@github.com:LeonardoSL13/feedget.git

# Access the project folder in your terminal
$ cd feedget

# go to the server folder
$ cd server

# install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# The server will start at port: 3333 - go to http://localhost:3333

```


#### Running the web application (Frontend)

```bash

# Clone this repository
$ git clone git@github.com:LeonardoSL13/feedget.git

# Access the project folder in your terminal
$ cd feedget

# Go to the Front End application folder
$ cd web

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# The application will open on the port: 3000 - go to http://localhost:3000

```

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Axios](https://github.com/axios/axios)**
-   **[Vite](https://vitejs.dev)**
-   **[Jest](https://jestjs.io)**
-   **[Tailwind](https://tailwindcss.com)**

> See the file  [package.json](https://github.com/LeonardoSL13/feedget/blob/master/web/package.json)

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Prisma](https://www.prisma.io)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**

> See the file  [package.json](https://github.com/LeonardoSL13/feedget/blob/master/server/package.json)

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[Axios](https://github.com/axios/axios)**

> See the file  [package.json](https://github.com/LeonardoSL13/feedget/blob/master/mobile/package.json)


---


## License

This project is under the license [MIT](./LICENSE).
