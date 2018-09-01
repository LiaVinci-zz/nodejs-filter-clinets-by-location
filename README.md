# :tada:   NodeJS Intercom Job Assignment By LiaVinci   :tada:

## Running & Testing

### First please make sure to install the app dependencies, to do so please follow the next steps:

- Install [npm](https://www.npmjs.com/) to make sure it's installed you can run `npm -v`
- Install [NodeJS](https://nodejs.org/en/download/package-manager/) to make sure it's installed you can run `node -v`
- Clone the repository
- Install dependencies: `npm install`

### To run the app :rocket:

* `npm run start`

### To test the app :clipboard:

* `npm run test`

## :pencil2:   A bit about the project composition   :straight_ruler:

**app.js -** the app starting point.

**The data folder -** contains the different ways to load our data, right now as we only reading a file you will be able to find there the file module.

**The logic folder -** contains our logic you can find there the customers module which contains method to manipulate our customers data as well as validators folder that contains different validators that we need for now we only dealing with customers so you can find there customer validator.

**The utils folder -** contains different utilities / helper functions that are generic and can be used in different modules in our app, although right now we're only dealing with customers, I still wanted to emphasis that we can use it in other places and this is why I created a different module for those functions.

**The resources folder -** contains different resources e.g. the file that was provided by intercom.

**The mocks folder -** contains different mock objects that help us test the application and doesn't not have a space in the module folders, for example different file variations, I don't want to pollute the data/file folder with unrelated files that might confuse fresh eyes.

**config.js -** contains different default values used in our app.
