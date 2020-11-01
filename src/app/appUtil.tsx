import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import * as React from 'react';
import { render } from 'react-dom';
import { config } from './index';

const rootElement = document.getElementById('root');

export const overmind = createOvermind(config, {
  devtools: navigator.userAgent.match(/ CrOS /)
    ? 'penguin.linux.test:3031'
    : 'localhost:3031',
});

const doRender = (Element) => {
  render(
    <Provider value={overmind}>
      <Element />
    </Provider>,
    rootElement
  );
};

// doRender(TodoApp);
export { doRender };
