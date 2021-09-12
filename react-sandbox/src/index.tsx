import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "React!";
const reactLink = "https://reactjs.org/docs/introducing-jsx.html";
const reactFriendly = "React.js";

/*
function Welcome(props: { name: string, style: React.CSSProperties }) {
  return <h2 style={props.style}>Welcome {props.name}</h2>;
}*/
interface IWelcomeStyle {
  name: string;
  style: React.CSSProperties;
}


class Welcome extends React.Component<IWelcomeStyle> {
  constructor(props: IWelcomeStyle) {
    super(props);
  }
  render() {
    return <h2 style={this.props.style}>Welcome {this.props.name}</h2>
  }
}

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
  let margin = 0;

  let getMargin = () => {
    margin += 10;
    return margin.toString();
  };

  let rectStyle = {
    backgroundColor: 'green',//getRandomColor(),
    width: "50px",
    height: "50px",
    margin: "200"//getMargin(),
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
      <p> <Welcome style={welcomeStyle} name="Sarang Kapadia" /> {new Date().toLocaleTimeString()}</p>
      <canvas style={rectStyle} />
    </div >),
    document.getElementById("root")
  )
}

setInterval(renderMe, 1000);
