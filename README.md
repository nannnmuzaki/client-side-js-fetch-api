# Giphy API Fetcher

A vanilla JavaScript application that interacts with the Giphy API to fetch and display GIFs based on user search queries. Built as part of The Odin Project's Full Stack JavaScript curriculum (Working with APIs).

## Overview

This project demonstrates the core mechanics of asynchronous JavaScript, specifically focusing on the `fetch` API, Promise chaining, and JSON serialization. It transitions away from simulated delays to handling real-world network requests and API responses.

## Core Concepts Demonstrated

- **Asynchronous Network Requests:** Utilizing the `fetch` API to retrieve data from an external server without blocking the main execution thread.
- **Promise Resolution & Chaining:** Unpacking the HTTP `Response` object and using the `.json()` method to parse the raw data stream into a functional JavaScript Object.
- **Defensive Error Handling:** Manually checking `!response.ok` and API-specific meta statuses to catch and throw failed requests (e.g., 404s) that the `fetch` API otherwise considers successful network transactions.
- **Data Extraction & DOM Manipulation:** Traversing deeply nested JSON objects (`response.data.images.original.url`) to extract specific image URLs and dynamically updating the DOM.
- **Robust Form Handling:** Utilizing the `FormData` API and `Object.fromEntries()` for clean, scalable user input extraction, alongside `encodeURIComponent()` to sanitize search parameters.

## Technologies Used

- Vanilla JavaScript (ES6+)
- HTML5 / CSS3
- Giphy Translate API
- Webpack (CSS bundling)

## Setup and Execution

1. Clone the repository down to your local machine.
2. Run `npm install` to install dependencies.
3. Run `npm run start` (or your specific Webpack dev server command) to launch the application.
4. Note: The Giphy API key is currently hardcoded for educational purposes per curriculum constraints.
