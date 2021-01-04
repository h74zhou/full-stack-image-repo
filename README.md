# Full Stack Image Repo

Welcome to my Full Stack Image Repository Project! This is a web app that allows a user to upload, view, delete and update images online! A user can store their favourite photos and caption it on the website for everyone to see!

## Project Outline

This project is currently deployed on Netlify and can be seen on this link: https://full-stack-image-repo.netlify.app/

### Features

When a user first visits the website, they should see a form that prompts the user to upload a photo and caption it:

<img src="/images/begin.png">

#### Creating a post 

Users can begin to create a post by filling out the form's information. This includes entering a name, image, and a message associated with that image. Afterwards they can click submit

![submitPost](/images/submit.gif)

Once they click submit, they should see their new post populated onto the repository. The images are displayed in card form, with the photo title, authour and description underneath it. Users can submit as many photos as they want, and the photos will be placed left to right (column alignment). 

<img src="/images/threeposts.png">

#### Deleting a post

Each card has a delete button associated with it. If the user no longer wants to showcase one of their old photos within their repository, they can click on the delete button and the photo will be gone.

![deletePost](/images/delete.gif)

#### Editing a post

Each card also has an edit button associated with it. If the user wants to change the post they made prior, they can click on the edit button and the form component on the right will automatically populate with the old post's information. The user can then choose to update the image post however they want and press submit. 

![editPost](/images/edit.gif)

### Tech Stack

This project was built using the **MERN** stack. [ReactJS](https://reactjs.org/), [Redux](https://redux.js.org/) and the [Material UI Framework](https://material-ui.com/) was used to build out the front-end. Express and Node were used to construct the back-end functionalities, which include all the basic **CRUD** operations (Create, Read, Update, Delete). [MongoDB](https://www.mongodb.com/) was the database chosen to store all the post information (images, title, authour, etc). 

As mentioned before, the front-end of the application was deployed using [Netlify](https://www.netlify.com/) at: https://full-stack-image-repo.netlify.app/. 

The front-end makes requests to the back-end which was deployed using [Heroku](https://www.heroku.com/) at: https://full-stack-image-repo.herokuapp.com/posts.

