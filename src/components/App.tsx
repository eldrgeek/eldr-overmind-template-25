import * as React from 'react';
import { useApp } from '../app';

// import { doRender } from '../app/appUtil';

const TodoApp: React.FC = () => {
  const { state, actions } = useApp();
  console.log('state is ', state);

  return (
    <div>
      <button onClick={actions.names1.incr1}>+</button>
      {JSON.stringify(state)
        .split(',')
        .map((term, index) => {
          return <div key={index}>{term}</div>;
        })}
    </div>
  );
};
export default TodoApp;
// doRender(TodoApp);`
