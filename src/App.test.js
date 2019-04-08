import React from 'react';
import ReactDOM from 'react-dom';
import CalcContainer from './containers/Calc';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalcContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
