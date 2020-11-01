import * as React from 'react';
import { useApp } from '../app';

import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import { doRender } from '../app/appUtil';

const TodoApp: React.FC = () => {
  const { state, actions } = useApp();
  console.log('state is ', state);

  return (
    <div>
      <header className="header">
        <h1>
          todo {state.names1.count}- {state.names1.count1} -{state.names2.count}
          {console.log('NS2', Object.keys(state))}
        </h1>
        <button onClick={() => actions.names1.incr1()}>Click</button>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={state.newTodoTitle}
          onChange={(event) =>
            actions.changeNewTodoTitle(event.currentTarget.value)
          }
          onKeyDown={(event) => {
            if (event.keyCode !== 13) return;
            actions.addTodo();
          }}
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={() => actions.toggleAllTodos()}
          checked={state.isAllTodosChecked}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {state.currentTodos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                isEditing={state.editingTodoId === todo.id}
              />
            );
          })}
        </ul>
      </section>
      <TodoFooter />
    </div>
  );
};
export default TodoApp;
// doRender(TodoApp);`
