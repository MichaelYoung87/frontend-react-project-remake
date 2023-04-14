## `Rekommenderar att ni installerar backend projektet först på https://github.com/MichaelYoung87/backend-go-project-remake`

## `Ni behöver både backend och frontend för att kunna köra mini-projektet.`

## `Vad som behövs för att kunna köra react:`
Det finns olika sätt att installera react beroende på vilket operativsystem (t ex. Windows/Ubuntu) du har, eller så kan du använda Ubuntu LTS ifrån Windows Store.

Du kan göra detta genom att följa den här guiden för att sätta igång Windows Subsystem for Linux: https://www.makeuseof.com/enable-windows-subsystem-for-linux/

Efter att du startat om datorn så navigera in till Microsoft Store - Sök på 'Ubuntu LTS' - Välj Ubuntu 22.04.2 LTS och installera.

När Ubuntu LTS är installerad är det dags att installera Node.js och npm.

När du använder order 'sudo' i ett kommando för att installera något så brukar den be om lösenord, detta är ditt vanliga lösenord när du loggar in på din dator

Det du behöver installera är:
Node.js och npm
Följ denna guiden tills du får ut versionerna av Node.js och npm i Ubuntu LTS terminalen. https://www.knowledgehut.com/blog/web-development/install-nodejs-on-ubuntu

När du installerat Node.js och npm och kan använda 'npm' kommandon i vald terminal så kan du fortsätta med instruktionerna nedan.

## `Hur Ubuntu LTS skiljer sig från Windows CMD:`\
OBS! Filsystemet i Ubuntu terminal är lite annorlunda än i Windows CMD.

När du startar Ubuntu LTS står det 'dittanvändarnamn@Dittanvändarnamn:~$'

Skriv 'cd ..' 2 gånger för att komma till "root" som det kallas i Ubuntu.

För att sedan navigera in till C: disken så skriver du 'cd mnt/c/', nu är du på C: disken så du kan bara navigera till mappen du skapat för nedladdning av projektet.

T ex. Jag har skapat 2 mappar på C:\ en som heter "frontend" och en som heter "backend"

Så efter jag har skrivit 'cd ..' 2 gånger så skriver jag sedan 'cd mnt/c/frontend'

Du kan även skriva 'ls' för att se vilka mappar som finns där du befinner dig just nu.


Detta är instruktionerna för frontend.

1. Skapa en mapp vart ni vill på datorn som heter t ex. "frontend", C:\ är enklast för detta exempel.
2. Navigera till denna nyskapade mapp med Ubuntu LTS terminalen - se "Hur Ubuntu LTS skiljer sig från Windows CMD:" ovanför för instruktioner.
3. När ni är i mappen 'C:\frontend>' Så skriver ni 'git clone https://github.com/MichaelYoung87/frontend-react-project-remake' utan '' i Ubuntu LTS terminalen.
4. När ni hämtat ner projektet så navigerar ni in till mappen för det nerladdade projektet genom att skriva 'cd frontend-react-project-remake' utan '' i Ubuntu LTS terminalen.
5. Skriv 'npm install' i terminalen utan ''.
6. Skriv 'npm update' i terminalen utan ''.
7. När det är klart så skriver ni 'code .' utan '' i Ubuntu LTS terminalen för att öppna upp det nerladdade projektet i VS code.
8. Byt ut color-adjust till print-color-adjust inuti node_modules/mdb-react-ui-kit/dist/css/mdb.min.css - eller Ctrl + Shift + F sök efter color-adjust ändra till print-color-adjust
9. Ctrl + Shift + F sök efter {-webkit-appearance:button} och ändra till {-webkit-appearance:auto} i node_modules/mdb-react-ui-kit/dist/css/mdb.min.css.
10. Ctrl + Shift + F sök efter -webkit-appearance:textfield och ändra till -webkit-appearance:auto i node_modules/mdb-react-ui-kit/dist/css/mdb.min.css.
11. När allting är ok så startar ni frontend i react genom att skriva 'npm start' utan '' i Ubuntu LTS terminal, glöm inte att först navigera till t ex. /mnt/c/frontend-react-project-remake eller till vilken mapp ni nu har laddat ner projektet till. Se till så att backend är startad för att få funktionerna att fungera.
12. För att stänga ned frontend-react tryck CTRL+C i Ubuntu LTS terminalen där ni skrev 'npm start', Stoppa backend körningen i VS Code för backend.


Har ni problem med autentisering med google cloud så testa detta:

Google Cloud SDK installation för Windows: 
https://cloud.google.com/sdk/docs/install

gcloud init    // För att göra inställningar
gcloud auth application-default login //För att sätta default login



Nedan kommer README från React om ni behöver felsöka med er React installation:
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)