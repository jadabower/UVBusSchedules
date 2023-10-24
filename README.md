# Overview

As a student living at the University View, Rexburg apartment complex, I noticed that the setup UV had for knowing where the shuttles are at what times was incredibly difficult to use. This sparked an idea: a website to easily find specific routes of where the shuttles will be and when. I created a database using Google Firebase's Realtime Database feature to hold all the information from the pamphlet hanging in the UV office, and connected it to a web app made in Vue. I then created components for the specific bus routes (to hold all the information in a readable manner), then added filters to filter down the list into specific routes being shown. 

This project was an excellent challenge for me as a developer because I had never worked with Google Firebase or any kind of web app framework like Vue. Firebase is very easy to use to create a database, and it is quite simple to use in the app once the app and database are properly linked. I found Vue to be challenging but very well documented. I also had a good bit of help from some other developers to learn the system. It was a very good challenge to have to create something from the ground up, and added to my skills as a programmer significantly.

{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages

The Home page is where the user will be the majority of the time. It contains all the information about the bus routes and the filters the get the list of routes down to only the ones the user decides.

The About page contains some simple information about the site and why I created it.

The two web pages are linked by Vue's "router" capability.

# Development Environment

* Google Firebase (Realtime Database)
* Visual Studio Code
* Vue 3 (Composition API)
* NPM (module: firebase)
* JavaScript
* HTML
* CSS and SCSS

# Useful Websites

* [this site on Netlify](https://uvshuttles.netlify.app/)
* [firebase](https://console.firebase.google.com/)
* [info on v-for (Vue docs)](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#ref)
* [import with alias's (mozilla)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* [info on map in JS (w3schools)](https://www.w3schools.com/jsref/jsref_map.asp)
* [connecting firebase to Vue (stackoverflow)](https://stackoverflow.com/questions/73028403/read-data-using-vue-3-firebase-realtime-database)
* [lifecycle hooks (Vue docs)](https://vuejs.org/guide/essentials/lifecycle.html#registering-lifecycle-hooks)
* [props declaration (Vue docs)](https://vuejs.org/guide/components/props.html#props-declaration)
* [Vue debugger (Vue.js devtools - Chrome extension)](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd/related?hl=en)
* [parsing strings in JS (stackoverflow)](https://stackoverflow.com/questions/1216505/how-to-parse-a-string-in-javascript)
* [Vue tutorial (Vuejs.org)](https://vuejs.org/tutorial/#step-4)
* [JS parseInt (mozilla)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
* [reactivity in Vue (Vue docs)](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#ref)
* [sorting a list of objects in JS (scaler/topics)](https://www.scaler.com/topics/javascript-sort-an-array-of-objects/)
* [some CSS styling (chatGPT)](https://chat.openai.com/c/afc64376-a726-4315-bfe9-e8cc7dc0b3b4)
* [how to use emit (Vue docs)](https://vuejs.org/guide/components/events.html#event-arguments)
* [how to emit inside of the script (LearnVue)](https://learnvue.co/articles/vue-emit-guide)
* [how to use computed (Vue docs)](https://vuejs.org/guide/essentials/computed.html#basic-example)
* [toggle (w3schools)](https://www.w3schools.com/howto/howto_css_switch.asp)

# Future Work

* Make filter styles better
* Add a filter for days (so that shuttles that run during devotional won't show up on Tuesday, etc.)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
