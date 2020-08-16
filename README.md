# AirCnC
Project developed using nodejs, reactjs and react-native. The idea of this project was inspired by the app airbnb, however, in this one the user can offer an office of a company and other user can rent that space to work. 
This application was developed for educational purposes during the 9th Omnistack week.

## Requirements
To open and run this project you will need:
* [git](https://git-scm.com/download/win) *this link is for windows*
* [nodejs](https://nodejs.org/)
* [yarn](https://classic.yarnpkg.com/)
* [Expo-CLI](https://reactnative.dev/docs/0.61/getting-started)

In this project the mobile app was developed using expo CLI, 
you can check the details in how to install and start a react-native project using expo in the following link:
* [getting started with react-native](https://reactnative.dev/docs/0.61/getting-started)

## Getting Started

* Create or choose a folder where you gonna clone the project.


#### Backend
To run the backend, go to the backend folder and run the command `yarn dev`. It will run on port 3333.
In this project we used mongoDB to store our data. We created a server and a database on [mongoDB atlas](https://account.mongodb.com/account/login). 
I recomend that you create and configure your own database. After you create your database you should change the following code inserting the connection link to your database:
```
mongoose.connect(
  "mongodb+srv://djanlm:djanlm@cluster0-rrumj.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
```

#### Web
To run the frontend part, developed for web using reactJS, go to the frontend folder and run `yarn start`

#### App 
To be able to run the app for cellphone, you'll need to have expo CLI installed. As mentioned before you might have to follow the react-native [getting started tutorial](https://reactnative.dev/docs/0.61/getting-started).

After installing expo, go to mobile folder and run the command `expo start`. 

To be able to open the app on your cellphone you have to install the expo app. After its instalation open it and read the QRcode. 

You'll also need to switch the code in the api.js file and insert your own ip address:

```
const api = axios.create({
  baseURL: 'http://put-your-ip-address-here:3333'
})
```
** If you receive an error message when running the expo start command, Try the following step to fix it: **

edit file the project  node_modules\metro-config\src\defaults\blacklist.js

Replace : 

```
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

with : 
```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```
## Preview and Usage

#### Web

Login Page:

You only need to insert an email in order to signin and a new session will be created.
![login](https://github.com/djanlm/SemanaOmniStack9_AirCnC/blob/master/login_webpng.png?raw=true)

In the main page you can see the list of places that you have registered.
![main](https://github.com/djanlm/SemanaOmniStack9_AirCnC/blob/master/Lista_de_locais.png?raw=true)

In the register page you are able to save a new spot with a picture of the place, its name, technologies the company uses and the price of the rent per day.
![register](https://github.com/djanlm/SemanaOmniStack9_AirCnC/blob/master/cadastro_de_empresa.png?raw=true)


#### Mobile App

![login mobile]https://github.com/djanlm/SemanaOmniStack9_AirCnC/blob/master/login_mobile.jpg?raw=true)

![main page mobile](https://github.com/djanlm/SemanaOmniStack8_TINDEV/blob/master/tidev_mobile_page.png?raw=true)


Hope you enjoy it. :heart_eyes:
