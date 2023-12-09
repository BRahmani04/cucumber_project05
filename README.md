# Project 05| Project - Pagination Function

On this project I am  testing the Login form and make sure that it LOG IN when we give the right username and password,
while if we give a wrong information we get an message error that it tells us of what we are missing.

## How to set up the project
Before we running the project we need to make sure we have downloaded **Node.js**
For setting up the project  we need to creat a folder on our desktop which we need to open the **Terminal** in our desktop.
Then we creat the folder by running **mkdir** and our folder name.
After that we will need to install **Cypress** by using **npm install** and our dependecies get installed as well.
Then we go on our Visual Code and we open the folder that we have created, after we open the Terminal and we run **npx cypress open** this will open Cypress. And also we need to download **Cucumber** because we are using it for this project.

## TOOLS

The tools we are using in this project are **JAVASCRIPT**, **CYPRESS**, **CUCUMBER** and **TEST CASES**.

## Running the Test Cases

First I created a folder called Pages that is where my POM - **PaginationPage.js** is and it defines all the main Locators that we will be using on our testing file.
After I creat a folder for our test which is called **step-definiton** and our file which I have 2 files that are called **commonSteps.js** which there I have a code that will be repedeatly which I use to visit the webside, and then I have another file called **paginationSteps** which are the steps that I am implementing for my test cases.
I also created another folder called **feature** in there I have all mt test cases.

My project defines 3 Test Cases which are:

**Test Case 01 - Validate the main content**


**Test Case 02 - Validate the Pagination Next/Previous buttons**


**Test Case 03 - Validate the Pagination Cities content**