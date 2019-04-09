##Libraries

In this project use such libraries:
  -redux-saga     ( middleware for async requests)
  -react-redux    ( middleware for state managment)
  -redux-actions  ( for easier usage actions with redux )
  -redux-persist  ( for easier usage localstorage )
  -react-router   ( for routing into the project )

##.env variables

We have 3 different enviroment variables (.env / .env.development / .env.production). Default 
[.env] and [.env.development] using for localhost. The params will be the same. But if you need you custom
properties you should overwrite it in the [.env.development]. When you build all params will heve taken from the [.env.production]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**