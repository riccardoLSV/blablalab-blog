import React from 'react';

const Card = props => <div>{props.children}</div>;

const Header = props => <h1>{props.text}</h1>;
const Footer = props => <p>{props.text}</p>;

const ListItem = props => <li>{props.children}</li>;

const Menu = props => {

  const func = child => React.cloneElement(<ListItem>{child}</ListItem>, 
    {
        key: child.props.children,
        otherProp: "Prop passata da Menu"
    });

  const listItems = React.Children.map(props.children, func);

  return(
    <ul>
      {listItems}
    </ul>
  )
}

const App = props => (
  <Menu>
    <a href="/">Home</a>
    <a href="/">Contatti</a>
    <a href="/">Servizi</a>
  </Menu>
)



export default class SampleApp extends React.Component {
  render() {
    return (
      <App />
    )
  }
}