import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Welcome } from './welcome';
import { Comment } from './comment';
import { Clock } from "./clock";
import { DefaultButton } from '@fluentui/react';
import { ToggleButton } from './toggleButton';
import { LoginControl } from './logincontrol';

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
  let dim = Math.floor(Math.random() * 100) + 20;
  return dim.toString() + "px";
}

function renderMe() {
  let welcomeStyle = {
    color: getRandomColor(),
  };

  const dim = getRandomNumber();

  let rectStyle = {
    backgroundColor: getRandomColor(),
    width: dim,
    height: dim,
  }

  const list = ["It's easy to use", <> Great documentation at <a href={reactLink}> {reactFriendly}</a > </>];
  // const listToRender = list.map((item, index) =>
  //   <li key={index}>
  //     {item}
  //   </li>);

  ReactDOM.render(
    (<div>
      <div>
        <Welcome style={welcomeStyle} name={"sarang"} />
      </div>

      <h2>I love {name}</h2>

      <div>
        <ul>
          {list.map((item, index) =>
            <li key={index}>
              {item}
            </li>)}
        </ul>
      </div>

      <div>
        <Clock />
      </div>

      <div>
        <canvas style={rectStyle} />
      </div>

      <div>
        <Comment
          text="Hello this is a news comment"
          author={{ avatarUrl: 'src/logo192.png', name: "Mr. Reporter" }}
        />
      </div>

      <div>
        <DefaultButton style={{ color: 'yellow', backgroundColor: 'green' }} text="Fluent Button" onClick={() => { alert("button on click"); }} />
      </div>

      <div>
        <ToggleButton color="blue" />
      </div>

      <div>
        <LoginControl initLoginState={true} />
      </div>

    </div >),
    document.getElementById("root")
  )
}

renderMe();
