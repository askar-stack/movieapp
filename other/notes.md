npx create-react-app ./
needs to be in folder with nothing else in it
powershell to get to folder: Set-Location "folderName"

npm start

- runs our project in the browser, localhost 3000

looking at files and olders

- package.json
- all dependencies our package has installed, later can add more

- node modules - where installed dependencies are stored, don't need to explore this large folder

- src - everything related to our project, spend most time here

- public folder. has index.html file. prefilled by create-react-app.

other than the meta and link tags, all our index html file consists of is one div with id root.
inside this div is where react inserts everything we do

- src/index.js. starting point of every react app.
  -- reactDom used to render our entire application into the real dom. called once here in this file

- src/App.js - we see a functional component. JSX not html

JSX - className for classes.inside curly braces can write pure JS and will be convert answer.

<p>{2+2}</p> works.
