This project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app) and [json-server-api](https://github.com/typicode/json-server).

1. node v8.10.0

2. npm 6.1.0
3. create-react-app 2.1.8
4. json-server-api 

## MyRetail

To start and view the project in the browser, please CLI **npm install** on the **MyRetail/server/** directory *and* the root directory (**MyRetail/**). This will install the **node_modules** folder in the respective directories. 

Then CLI **npm start** in both the **MyRetail/server/** directory *and* the root directory (**MyRetail/**). 

The npm **json-server-api** (**MyRetail/server/server.js**) runs on [http://localhost:9000](http://localhost:9000) and the npm **create-react-app** (**MyRetail/index.js**) runs on [http://localhost:3000](http://localhost:3000).
 
### npm install *and* npm start server.js in directory: MyRetail/server/

From the root directory (**MyRetail/**), change directory to **MyRetail/server** directory. Install the node modules and start the server.

```
MyRetail$ cd server
server$ npm install
server$ npm start
```

Runs npm **json-server-api** using *item-data.json* file in the **MyRetail/server/** directory.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser. *It's over 9000!*

*note: you will need to restart server if you make changes to item-data.json file or any other server configs. Need to implement nodemon or other npm.*

### npm install *and* npm start index.js in directory: MyRetail/

Change directory back to root (**MyRetail/**) and run **npm install** again, then **npm start**. This will run the **MyRetail/index.js** and start the **MyRetail** app.

```
server$ cd ../
MyRetail$ npm install
MyRetail$ npm start
```

Runs **MyRetail/index.js** for the react/redux npm **create-react-app**.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

*note: you will need to reload app if you make changes to the server and item-data.json. You must restart the server and reload app.*

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

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.