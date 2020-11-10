import * as React from 'react';
import { useApp } from '../app';
// import { doRender } from '../app/appUtil';

const buttonClass = 'm-2 border border-black  p-3 bg-blue-500 w-8';
const TodoApp: React.FC = () => {
  const { state, actions } = useApp();
  return (
    <div className="m-2 border border-black  p-3 bg-gray-200 w-64">
      <button className={buttonClass} onClick={actions.names1.incr1}>
        +
      </button>
      <p className="inline-block">{state.names1.count}</p>
      <button className={buttonClass} onClick={actions.names1.decr1}>
        -
      </button>
      <p className="inline-block">{state.names1.count4}</p>

      {/* {JSON.stringify(state)
        .split(',')
        .map((term, index) => {
          return <div key={index}>{term}</div>;
        })} */}
    </div>
  );
};
export default TodoApp;
// doRender(TodoApp);`
