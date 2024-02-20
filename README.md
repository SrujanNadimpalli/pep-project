# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# code structure 

The project is structured into several React components, each responsible for a specific part of the application:

App Component: This is the root component of the application. It sets up the router and defines the routes for the application. It also manages the state for the user details.
Navbar Component: This component contains the navigation links for the application. It uses the Link component from react-router-dom to create the navigation links.
Home Component: This component is responsible for displaying the user details. It receives the user details as props from the App component.
FormAction Component: This component contains a form to collect user input. It updates the user details in the App component when the form is submitted.

# challenges faced 
State Management: One of the main challenges in this project is managing the state of the user details. The state needs to be lifted up to the App component so that it can be shared between the Home and FormAction components.
Routing: Setting up routing can be a bit tricky, especially for beginners. It’s important to correctly set up the routes and links to ensure that the application navigates correctly between the different components.
Form Handling: Handling form submission and updating the state based on the user input can also be challenging. It’s important to correctly set up the form and the event handler for the form submission.
Understanding React Concepts: If you’re new to React, understanding concepts like components, props, and state can be challenging. It’s important to have a good understanding of these concepts to successfully implement this project.

# Output

![pep1](https://github.com/SrujanNadimpalli/pep-project/assets/127650135/96aec0b9-9b6b-421e-835b-5c56e672c14f)

![pep2](https://github.com/SrujanNadimpalli/pep-project/assets/127650135/4559bcb2-18be-473f-94d6-b2690be79481)

![pep3](https://github.com/SrujanNadimpalli/pep-project/assets/127650135/0bc1b458-7e6b-4057-945a-2eb6f8dff9c5)







