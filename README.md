# Full Stack Image Repo

Welcome to my Full Stack Image Repository Project! This is a web app that allows a user to upload, view, delete and update images online! A user can store their favourite photos and caption it on the website for everyone to see! The app is also fully authenticated, so users will need to first create an account to post photos. A user can only edit and delete their own images, but every user can see every post on the homepage (similar to how Imgur works).

## Project Outline

This project is currently deployed on Netlify and can be seen on this link: https://image-repo-full-stack.netlify.app/

### Features

When a user first visits the website, they should see a homepage that displays all the photos uploaded by all users. There should be a login button in the header, which indicates to the user that they need to login before they can actually upload photos. 

<img src="/images/begin.png">

### Logging In

Once the user clicks on the login button, they will be brought to the login page. If the user already has an account, they can enter their email and password in order to sign in. 

<img src="/images/login.png">

However, if they don't have an account, they can click the "I don't have an account" prompt to be brought to the sign up page. There, they can provide their first and last name, along with their email and passwords for their new account. 

<img src="/images/signup.png">

#### Creating a post 

Once a user has logged in, they can begin to create a post by pressing the submit button on the header. A pop-up modal should appear allowing the user to make a submission. All the user needs to do is upload their image, give the image a title and a message, and then press submit!

![submitPost](/images/submit.gif)

Once they click submit, they should see their new post populated onto the repository. The images are displayed in card form, with the photo title, authour and description underneath it. 

<img src="/images/threeposts.png">

#### Deleting a post

Each card has a delete button associated with it. If the user no longer wants to showcase one of their old photos within their repository, they can click on the delete button and the photo will be gone. 

![deletePost](/images/delete.gif)

#### Editing a post

Each card also has an edit button associated with it. If the user wants to change the post they made prior, they can click on the edit button and the form modal component will pop up again. The user can then choose to update the image post however they want and press submit. 

![editPost](/images/edit.gif)

Note that the Delete and Edit buttons will only appear for posts that the user has created. These buttons will not be present for posts created by another user! As such, a user needs to be logged in (authenticated) before they can create/edit/delete any images!

## Tech Stack

This project was built using the **MERN** stack. [ReactJS](https://reactjs.org/), [Redux](https://redux.js.org/) and the [Material UI Framework](https://material-ui.com/) was used to build out the front-end. Express and Node were used to construct the back-end functionalities, which include all the basic **CRUD** operations (Create, Read, Update, Delete). [MongoDB](https://www.mongodb.com/) was the database chosen to store all the post information (images, title, authour, etc). The app is also fully authenticated using [JSON Web Token](https://jwt.io/). The passwords were encrypted using the npm package [bcrypt](https://www.npmjs.com/package/bcrypt). 

As mentioned before, the front-end of the application was deployed using [Netlify](https://www.netlify.com/) at: https://image-repo-full-stack.netlify.app/. 

The front-end makes requests to the back-end which was deployed using [Heroku](https://www.heroku.com/) at: https://full-stack-image-repo.herokuapp.com/posts.

