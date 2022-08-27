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

removing the default stuff and converting to arrow function component:

```js
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
```

depending on the value of something true or false, can control what shows on the page:

```js
const App = () => {
  const name = "John";
  const isNameShowing = true;
  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : "someone"}</h1>
    </div>
  );
};
```

to have two elements rendered, they need to be enclosed inside a component
and react fragment is a nameless component. just opening and closing brackets

```js
<>
  <h1>test</h1>
  <h2>there is no name</h2>
</>
```

some real-life use for this kind of code is checking if user is logged in, if not show sign in page if yes show login page

can create component then use it inside another, and even show it multiple times to save re-typing.

```js
<Person />
<Person />
<Person />
```

but what if you wanted each instance of Person to have different data?

props allow you to pass dynamic data into react components. they are just arguments like u pass args in functions

but bc we only defined for the first <Person> component what name was, the other remain blank

```js
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last: Doe</h2>
      <h2>Age: 30</h2>
    </>
  );
};

const App = () => {
  const name = "John";
  const isNameShowing = true;
  return (
    <div className="App">
      <Person name={"John"} />
      <Person />
      <Person />

```

also whether its a variable name or just a String, props have to be inside curly braces. like name={}. well not really for strings name="" is fine.
and also when using them like <div>{props.name}</div>

now to talk about state in react
state - represents info about component's current situation. managed by that component itself

scenario for purpose of state, using a counter

import useState hook from react.
create buttons and place for number using tags

```js
const [counter, setCounter] = useState(0);
```

by the way that's array destructuring, es6 stuff

const [thingToKeepStateOf, setterFunctiontoChangeState] = useState(init state value)

event - system generated or user did something, like mouseclick or scroll

```js
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
```

also convention to use prevState as name when changing it.

onClick has callback, which calls setcounter, and we defined it to decrement by 1

when clicking the + or - buttons, we are changing the state. re-rendering the view. but the website doesn't need to reload - see the url not altering?

this is the same for complex sites, updating a lot of stuff on the page without the need for a page reload.

there are many other react hooks. useState was needed to set and change state.

userEffect - second most used
import at the top
takes a callback function like setter functions

```js
useEffect(() => {});
```

useEffect code runs everytime the page reloads. so if you have an alert , it will display each time the site reloads - bc of component re-rendering.

lets say u wanted to change counter to equal 100 right when the page loads

you could do

```js
useEffect(() => {
  counter = 100; //forbidden and won't work
});
```

but don't, should never change state manually! only setter functions should be used.

better way :

```js
useEffect(() => {
  setCounter(100);
});
```

but now useEffect is happening too often that it looks like the thing didn't change. (click fast it does try to change before going back to 100)

so need to pass in second arg for useEffect, the dependency array.

now can modify it, because will only run on inital load of the site/component.

without dependency array, infinite loop of updates.

```js
useEffect(() => {
  setCounter(100);
}, []);
```

if we put counter inside in the dependency array, the site updates everytime counter changes

not user friendly but for checking when a variable changes, this is what useEffect can be good for. like running an alert when counter changes

```js
useEffect(() => {
  alert("You changed the counter to" + counter);
}, [counter]);
```

just like you have to import to use things, have to export them so they can be used elsewhere

# starting the proj

index js has react dom, and u import app.js there. and render app.js there as well

curly brackets matter:
import {useEffect} from "react";
or will get typeError react webpack imported module etc

react 18 warning how to use root, reactDOM is deprecated

2

In React 18, is needed to:

import { createRoot } from 'react-dom/client';

creates your root container with this function:

const root = createRoot(document.getElementById("root"));

and then render your root app:

root.render(<YourApp />);

App.css copied over as well as search svg. import them to app.js

copy object from console, console.log used to see what api returns. then copy it. now you know the format and can put variables there for dynamic data

so made a jsx file for MovieCard component and copied everything inside div with classname movie.

problem is movie1 object isn't in this file. we will pass that in with props

const MovieCard = (props) => {

but then would need to change every instance of movie1 with props.movie1

instead can use object destructuring to get the stuff we want from props

const MovieCard = ({movie1}) => {

then replace that whole div with the imported moviecard component, and remember to pass that prop of movie1

<MovieCard movie1={movie1} />
