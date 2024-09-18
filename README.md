# Star Wars Films App

This is a React application that displays information about Star Wars films using GraphQL. It allows users to view a list of all Star Wars films, sort them by title, release date, or episode number, and view detailed information about a specific film, including characters and the opening crawl.

## Features
- List all Star Wars films with title, release date, director, and episode number.
- Sort films by title, release date, or episode number.
- View detailed information about a specific film, including characters and the opening crawl.
- Responsive design for various devices and screen sizes.

## Technologies Used
- **React:** JavaScript library for building user interfaces.
- **GraphQL:** Query language for APIs, used for fetching data.
- **Apollo Client:** GraphQL client for interacting with the API.
- **Material-UI:** React component library for UI design.
- **Jest & React Testing Library:** Testing framework and utilities for unit and integration tests.

## Project Structure
- `src/`: Contains the main source code.
   - `apollo/`: GraphQL client and queries.
   - `components/`: Reusable UI components.
   - `pages/`: Page components for different routes.
   - `styles/`: Styled components and CSS.
   - `ErrorBoundary.js`: Component for error handling.
   - `App.js`: Main application component.
   - `index.js`: Entry point of the application.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `README.md`: Project documentation.

## Setup Instructions
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/pratikmaniya/star-wars-films.git
   cd star-wars-films
   ```
2. **Install Dependencies:** Run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables:** Create a `.env` file in the root directory with the following content:
   ```plaintext
   REACT_APP_API_URL=https://swapi-graphql.netlify.app/.netlify/functions/index
4. **Run the Application:** Start the Development Server: Use the following command to start the development server:
    ```bash
    npm start
    ```
   Access the app at http://localhost:3000/.
5. **Running Tests:** To run the test suite, use:
    ```bash
    npm test
    ```