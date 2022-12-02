import { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li{list-style:none;margin:0;padding:0;};
  body{
    height:100vh;
   display: flex;
   justify-content:center;
   align-items:center;
   color: '#010101'; 
  }
`;
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <GlobalStyle />
      </div>
    );
  }
}
