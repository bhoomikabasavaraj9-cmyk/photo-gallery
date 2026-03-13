# React Photo Gallery App

## Overview

This project is a **Photo Gallery Web Application** built using **React + Vite + Tailwind CSS**.
The application fetches photos from the Picsum Photos API, displays them in a responsive grid layout, allows users to search photos by author name, and mark photos as favourites.

This project was developed as part of a **Frontend React Internship Pre-Screening Assignment**.

## Features

### 1. Fetch Photos from API
* Photos are fetched from the Picsum Photos API.
* Endpoint used:
  https://picsum.photos/v2/list?limit=30
* The app displays a loading message while fetching data.
* If the API request fails, an error message is displayed.

### 2. Responsive Photo Grid
Photos are displayed in a responsive grid layout:

* Desktop → 4 columns
* Tablet → 2 columns
* Mobile → 1 column

Each photo card displays:

* Image
* Author name
* Favourite (heart) toggle button

### 3. Search Filter
A search bar allows users to filter photos **by author name in real time**.
* No additional API calls are made.
* Filtering is done using the already fetched data.

### 4. Favourites Feature
Users can mark photos as favourites using the heart icon.
* State management is implemented using **useReducer**
* Favourite photos persist using **localStorage**
* Favourites remain saved even after page refresh.

### 5. Custom Hook
The API fetching logic is implemented inside a **custom hook**:
useFetchPhotos
The hook returns:
* photos
* loading
* error
This keeps data logic separate from UI components.

### 6. Performance Optimization
Two React performance hooks are used:
1.useMemo
  * Used to memoize the filtered photo list
  * Prevents unnecessary recalculations on every render
2.useCallback
  * Used for the search input handler
  * Prevents unnecessary re-creation of the function on every render

## Technologies Used
* React
* Vite
* Tailwind CSS
* JavaScript 
* Picsum Photos API

## Project Structure
photo-gallery
│
├── src
│   ├── components
│   │   └── Gallery.jsx
│   │
│   ├── hooks
│   │   └── useFetchPhotos.js
│   │
│   ├── reducer
│   │   └── favouritesReducer.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public
├── package.json
└── README.md

## Installation & Setup
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/photo-gallery.git

2. Navigate to project folder

3. Install dependencies

4. Run the development server
npm run dev

Then open:
http://localhost:5173

## Author
Bhoomika.H.B

Frontend React Internship Assignment
