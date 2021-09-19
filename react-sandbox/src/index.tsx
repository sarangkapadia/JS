import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Welcome } from './welcome';
import { Comment } from './comment';
import { Clock } from "./clock";
import { DefaultButton } from '@fluentui/react';

const name = "React!";
const reactLink = "https://reactjs.org/docs/introducing-jsx.html";
const reactFriendly = "React.js";


function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function getRandomNumber() {
  let dim = Math.floor(Math.random() * 100);
  return dim.toString() + "px";
}

function renderMe() {
  let welcomeStyle = {
    color: 'orange',
  };

  const dim = getRandomNumber();

  let rectStyle = {
    backgroundColor: 'green',//getRandomColor(),
    width: "50px",
    height: "50px",
  }

  ReactDOM.render(
    (<div>

      <h1>Hello, I love {name}</h1>

      <p>
        <ul>
          <li>It's easy to use</li>
          <li>Great documentation at <a href={reactLink}>{reactFriendly}</a></li>
        </ul>
      </p>


      <Clock />

      <canvas style={rectStyle} />

      <div>
        <Comment
          text="Hello this is a news comment"
          author={{ avatarUrl: 'src/logo192.png', name: "Mr. Reporter" }}
        />
      </div>

      <DefaultButton style={{ color: 'yellow', backgroundColor: 'green' }} text="Fluent Button" onClick={() => { alert("button on click"); }} />

    </div >),
    document.getElementById("root")
  )
}

renderMe();
