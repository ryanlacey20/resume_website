# resume_website
A resume website to showcase brief details about the author, Ryan Lacey.  
Available [here](https://ryanlacey.ie/): https://ryanlacey.ie/

### Tools:
  JavaScript  
  Vue.js  
### Overview:
Connects to an endpoint from the [personal_project_backends](https://github.com/ryanlacey20/personal_project_backends) repository.  
  This endpoint is hosted at https://resume-website-backend-193de0e3770e.herokuapp.com/api/verify-recaptcha.  
  The endpoint processes a recaptcha request made from this front-end, passes it to Google Cloud Tools to verify the request is human, protecting sensitive contact information.  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
