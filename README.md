Sustainability Metrics Visualization Dashboard

This project is a simple, mobile-responsive React-based dashboard to visualize sustainability metrics using various chart types like bar charts, pie charts, line charts, and doughnut charts. The project utilizes React, Chart.js, and Tailwind CSS for a sleek, user-friendly interface.


Features

Dynamic Charts: Visualize data with bar charts, pie charts, line charts, and doughnut charts.
Responsive Design: Optimized for all screen sizes using Tailwind CSS.
Component-Based Architecture: Modular React components for scalability and maintainability.


React: JavaScript library for building user interfaces.

Chart.js: Library for creating charts.

Tailwind CSS: Utility-first CSS framework for styling.


React Installation and Setup

Step 1: Install Node.js

Download and install the latest LTS version of Node.js from the official website.

Confirm installation:
node -v
npm -v

Step 2: Create a React Application
Run the following command to create a new React app:
(npx create-react-app foldername)
This will create a directory named foldername with the basic structure of a React application.

Step 3: Move into the Application Directory
cd foldername

Step 4: Start the Application
npm start

This starts the development server, and you can view the app at http://localhost:3000.


Chart.js Installation and Setup
Chart.js is a popular library for creating charts.

Step 1: Install Chart.js
npm install chart.js


Step 2: Install React Wrapper for Chart.js (Optional)
For better integration with React, install react-chartjs-2:
(npm install react-chartjs-2)
(https://www.chartjs.org/docs/latest/charts/bar.html)



Tailwind CSS Installation and Setup
Tailwind CSS is a utility-first CSS framework.

Step 1: Install Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

Step 2: Configure tailwind.config.js

Update the content property in tailwind.config.js to include all files where Tailwind will be used:

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};


Step 3: Include Tailwind in Your CSS
Create a src/index.css file (or update the existing one) with the following content:

@tailwind base;
@tailwind components;
@tailwind utilities;


Step 4: Import Tailwind CSS
Ensure index.css is imported in src/index.js:
import './index.css';

Step 5: Run the Application

npm start
Now, you can use Tailwind classes directly in your JSX code.


4. Folder Structure

foldername/
│
├── src/
│   ├── components/
│   │   ├── Dashboard.js       # Main dashboard containing all charts
│   │   ├── Navbar.js          # Top navigation bar
│   │   ├── Sidebar.js         # Side menu for navigation
│   │   └── ...                # Additional components if any
│   ├── App.js                 # Root application file
│   └── index.js               # Entry point for React
│
├── public/
│   ├── index.html             # HTML template
│   └── ...
│
├── tailwind.config.js         # Tailwind CSS configuration
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation


5. Chart Details
Bar Chart: Displays the total volume of waste collected by category.

Horizontal Bar Chart: Visualizes energy conserved for each service type.

Pie Chart: Showcases recycling distribution percentages.

Line Chart: Highlights the reduction in greenhouse gas and carbon emissions.

Doughnut Chart: Displays the percentage of waste categories.

Stacked Bar Chart: Represents waste collected by category across weeks.


6. Customization
Modify Dashboard.js to update data or chart configurations.
Tailwind CSS classes can be adjusted in tailwind.config.js for styling.
