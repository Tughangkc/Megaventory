Project Overview
This project is a React-based application designed to display purchase order details from a JSON file. The application uses react-bootstrap for styling and layout, and react-router-dom for navigation between different parts of the application.

Features Implemented
Navigation with Breadcrumbs:

Added breadcrumb navigation to enhance user experience by providing clear navigation paths.
Breadcrumbs are dynamically updated based on the current page.
Order Details Display:

Displaying detailed information about a specific order, including address, contact person, and status, in a well-structured table format.
Order items are listed in a responsive, striped, and bordered table for clarity and ease of reading.
Hover Effects:

Implemented hover effects on list items for better interactivity, indicating clickable elements.
Files Modified
global.css:

Added CSS styles for container, list items, hover effects, and table formatting.
Order.jsx:

Fetches and displays a list of orders from a JSON file.
Implements navigation using react-router-dom to show order details upon clicking an item.
Uses react-bootstrap for layout and styling.
Copy.jsx:

Fetches a specific order's details based on the URL parameter.
Displays the details in a structured table format.
Includes breadcrumb navigation to enhance user experience.
How to Run
Install Dependencies:

Ensure you have Node.js installed.
Run npm install to install all required dependencies.
Start the Application:

Run npm start to start the development server.
Open http://localhost:3000 in your web browser to view the application.
Project Relation to CV
This project is closely related to the web development projects listed on my CV. Specifically, it demonstrates:

React Proficiency: Building single-page applications (SPAs) using React, managing state, and using hooks like useParams and useNavigate from react-router-dom.
Frontend Development: Using react-bootstrap for responsive design and consistent styling, and implementing CSS for custom styles and hover effects.
JSON Data Handling: Fetching and displaying data from JSON files, a common requirement in many web applications.
Navigation and Routing: Implementing navigation and routing using react-router-dom, ensuring a seamless user experience.
This project showcases my ability to develop interactive, user-friendly web applications with a focus on clean code and responsive design.

Conclusion
This application provides a practical demonstration of my skills in React, react-bootstrap, and frontend development in general. It highlights my ability to implement complex UI components, handle dynamic data, and enhance user experience through intuitive navigation and design.