# Kennet Hiring Challenge
A Social Media App that allows users to post text posts and comment on them.

# Workflow of The App.
This UML Diagram would help you understand the relationship between all the entities used here. 
![sm_app_uml_diagram](https://github.com/shazm12/kennet_hiring_challenge/assets/64892076/4ad3aaa3-de27-438c-be8f-c7fb904ea601).

The following diagram represents the basic workflow of the app.
![sm_app_kennet_app_architecture](https://github.com/shazm12/kennet_hiring_challenge/assets/64892076/4ba58734-1ad8-4392-b32f-453a7df1e255)

# What did I use to make this project?

I used React as my frontend framework with Vite for faster builds for dev as well as for production. 
Vite provided me with a minimal React app which allowed me to get started very quickly. I used react-router for routing my pages.

For the backend, I created a microservice using Node.js and Express with DB as MongoDB with middleware for security and for connecting to my MongoDB database. 
I have followed an MVC architecture for my microservice and will deploy my service as a lambda function on AWS ( because the free tier allows 1 million free requests 😅).

# For Using Client In Dev.
1. Go to `/client` Install all libraries.
   ```
   npm i
   ```
2. Run the Client on the Dev Server.
  ```
  npm run dev
  ```

# For Using Server in Dev.
1. Go to Server `/server` and Install all libraries.
   ```
   npm i
   ```
2. Run the Server on the Dev Server.
   ```
   node index.js
   ```

# Don't wanna waste time in setting up the dev env for usage? Use Docker Compose!
1. Go to the root of the project.
2. You'll see a docker-compose.yml file.
3. Just run this:
   ```
   docker-compose up
   ```
4. Now if you do not get any errors in your terminal, try out the app by going to `http://localhost:5173/`.

# Completed

- A Login Page.
- A Feed page to show and create posts.
- A create post component.
- A Comment box component to add comments to posts.
- A Comment list component to show a list of components.
- Search Bar Component to search for posts and comments.
- Deployed Client on AWS and Server as a Lambda Function.
- Setup Docker-Compose to use the app in the dev environment.

## Issues and Bugs

- A new Comment does not show up after adding. (Need to go back to login and then come to feed after logging in to see changes).
- After searching for some posts or comments,  we aren’t able to search for any other post or comment other than the recently searched post.

# Contact Me 
For any queries or if you want to react with me to discuss this project, drop me an email at [berashamik115@gmail.com](mailto:berashamik115@gmail.com).
