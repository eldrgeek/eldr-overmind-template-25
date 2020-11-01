import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import * as React from 'react';
import { render } from 'react-dom';
import { config } from './index';

const rootElement = document.getElementById('root');

export const overmind = createOvermind(config, {
  devtools: false,
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
