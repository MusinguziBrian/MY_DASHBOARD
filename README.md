# Student Course Dashboard

## Project Description
This project is a React-based Student Course Dashboard developed as part of a practical lab. It displays course information using reusable components.

## Work Completed
- Created a React application using the provided starter project.
- Created a reusable `CourseCard` component to display course details.
- Stored course data separately in `src/data/courses.js`.
- Displayed course titles, lecturers, progress percentages, and completion statuses.
- Used `map()` to render course cards and unique IDs as React keys.
- Added conditional rendering for completed and in-progress courses.
- Implemented an empty-state message when no courses are available.
- Added CSS styling to improve the dashboard's appearance.
- Tested the empty state by temporarily removing the course data and then restoring both original courses.

## Technologies Used
- React
- JavaScript
- CSS
- Vite
- Node.js and npm

## How to Run the Project
1. Open the project folder in Visual Studio Code.
2. Open the terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL displayed in the terminal.

## Test Results
The empty-state message appeared when the courses array was empty. Both original course cards appeared again after restoring the data.

