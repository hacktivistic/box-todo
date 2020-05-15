# Box with Express Tutorial : A Sample Todo List

This project shows how [Box](https://github.com/halukajs/box) can be used with [Express](https://github.com/expressjs/express) to ease up the development process. Just bind some dependencies, expose box into middleware if you want, then you're good to go.

## Pre-requisite

To go through this project, you need to have knowledge of Javascript, Node.js and some idea of writing Web apps with [Express](https://github.com/expressjs/express).

It would be best if you have gone through the [Box Documentation](https://haluka.dev/box/docs/getting-started).

## What is covered?

All the core concepts of `Box` has been covered in this project. In this project, we register `express` into the Box and use it to resolve it when required. A sample In-memory Database has also been implemented to show how Dependencies are injected. Dependency Injection has been clearly demonstrated through Todo Service Provider which dependes on Database.Database gets automatically injected when the user resolves the Todo service.

Another added advantage of using Box is displayed by the ability to change the Database dependency, without greatly affecting our application logic. We just need to register Database with another Database library that you wish to use, with some slight alterations on Todo service if any.

## Running this project

Clone the repo, run `npm install` to install the dependencies.
Run `npm start` to start the server.

## Author

 Robin Panta - [@hacktivistic](https://github.com/hacktivistic)