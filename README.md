# KillTech-Blog
This is a CMS-style blog site where developers can publish their blog posts and comment on other developers posts as well. 

- Table of contents 
-Description 
-Installation 
-Usage 
-What I learned 
-Contributing
-Credits
-License 

# User Story 
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

# Acceptance Criteria
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts


# Decsription 
This is a back end and front end application that allwows a user to create, read, update, and delete posts. This applicatiom also allows users to comment on others. 


# Installation 
This app is installed by visiting my GitHub page and cloning my repository "Trackployee" 
This app was built with:
Node.js 16.18.1
Javascript
Express.js
Sequilize
heroku
Insomnia
Dotenv
Inquirer 8.2.4
mysql2 3.2.3

* Open the repo using vscode 

# Usage
1) Clone git hub repository, run npm install
2) run your local server and log new accounts with blog posts


# What I learned 
What I learned while creating this application was how to bring front-end all the way around to back-end and connect the two of them together. We created a login application that allowed users inputs to be saved into the created database.
# Credits 
This app can be credited to Jack Killeen with some help from the TAs and one tutoring session, I unfortunately had very little time to work on this the past week, I had finals and had to move out of my apartment plus starting project 2 made this ver hard. I did recieve a lot of help from a TA. 

GitHub - killeen31 


# License 
This application uses an MIT license 

