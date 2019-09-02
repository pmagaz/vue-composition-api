## Example of use of Vue 3 Composition API

The new Composition API is still a [RFC](https://github.com/vuejs/rfcs/blob/function-apis/active-rfcs/0000-function-api.md). This example is using [@vue/composition-api](https://github.com/vuejs/composition-api) plugin which allows to test the new API in Vue 2.x. 

### Installing

Clone the repository & install dependencies:
```
$ git clone https://github.com/pmagaz/vue-composition-api
$ yarn / npm install
```

### Starting Dev Server

This example uses parcel as build tool / development server. To launch the server use the following command:
```
$ yarn start
```

### Examples

* `ApiCall.vue` Example using value, computeed and watch to make an API call.
* `ApiCallComposition.vue` Improved example isolating logic with composition function.


### Warning

Vue 3 Function API is still an RFC that could have changes. This repository and its examples were made for educational purposes only. DON'T use them in production.