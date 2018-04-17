# Coding Challenge - IntegrationsTeam
A coding challenge to test candidates for the knowbly integrations team.

# Purpose
Aim of this test is three fold,

- evaluate your coding abilities 
- judge your technical experience
- understand how you design a solution

# How you will be judged
You will be scored on,

- coding standard, comments and style
- unit testing strategy
- overall solution design
- appropriate use of source control

# Intructions

- Please use JavaScript, NodeJS, and ExpressJS for the following challenge.  You are also free to use a framework of your choosing (i.e., Angular, Vue, React)
- Candidate should put their test results on a public code repository hosted on Github or BitBucket or similar
- Once test is completed please share the repository URL as well as access to a hosted version (hosted wherever you wish -- i.e., EC2, Heroku, Digital Ocean, etc.) of the running app to the hiring team so they can review your work

# Challenge - Flickr feed viewer and search

Write a simple web application that reads data from Flickr's public feeds and displays the images on the page to the user.
Please check the Flickr API documentation from the following URL:

- [Flickr]( http://www.flickr.com/services/feeds/)
- [Public feed](https://api.flickr.com/services/feeds/photos_public.gne)


## Details

- Write a web application - backend built using JavaScript/NodeJS/ExpressJS and frontend developed using vanilla HTML5 or the framework of your choosing. 
- On page load the applications should load the public feed images in either a list or grid view.  
- The user should be able to enter a keyword in a search box and click on a search button and the app should return images with the relevant tags.
- Use of third-party libraries is encouraged.  We are especially interested in seeing how you leverage existing technologies to build a solution.

You can use the [Twitter Bootstrap](http://getbootstrap.com/) (or similar) to make your application look good.

Bonus points for implementing a "reactive" or "real-time" solution where results are updated as the user types (instead of requiring a search button as described in the basic challenge above).

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
