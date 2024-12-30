# MongoDB Regex Query Bug

This repository demonstrates a common error when using regular expressions in MongoDB queries. The issue arises from a lack of proper escaping of special characters within the regex pattern. This can lead to incorrect or unexpected results when retrieving data from the database. 

## Problem
The `bug.js` file contains a query that uses a regular expression to search for a pattern within a database field. However, if the pattern string contains special regex characters (e.g., '.', '*', '+', '?', '[', ']', '(', ')', '{', '}', '^', '$', '|', '\'), these characters may not be interpreted as intended and may lead to incorrect matches. 

## Solution
The `bugSolution.js` file shows how to solve this problem by using the `escapeRegExp` function which correctly escapes special characters before creating the regular expression. 

## Setup and Running
1. Clone this repository. 
2. Install Node.js and npm (or yarn).
3. Run `npm install` (or `yarn install`) to install dependencies (MongoDB Driver) 
4. Ensure MongoDB is running locally. 
5. Run `node bug.js` to see the unintended behavior. 
6. Run `node bugSolution.js` to see the correct behavior.