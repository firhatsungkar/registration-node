import React from 'react';
import ReactDOM from 'react-dom';
import SelectInput from './SelectInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
