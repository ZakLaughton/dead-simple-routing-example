import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <Route
      exact
      path='/:parameter1/:parameter2/:parameter3'
      // "..." spread operator passes in each property of props as a separate parameter:
      render={props => <App {...props} />}
    />
  </BrowserRouter>
);

// "{ match }" pulls out just the "match" parameter from the props
const App = props => {
  // destructure each property from params into its own variable to avoid having to type "match.params"
  // before each variable
  const { parameter1, parameter2, parameter3 } = props.match.params;
  return (
    <div>
      First: {parameter1} <br />
      Second: {parameter2} <br />
      Third: {parameter3} <br />
    </div>
  );
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));
