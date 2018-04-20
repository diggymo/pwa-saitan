# pwa-saitan

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

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Deploy Setup

```bash

docker pull nginx

# build an image as "your-image".
docker build -t your-image ./

# run an container as "your-container" in "8989" port.
docker run --name your-container -d -p 8989:80 your-image
```




For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
