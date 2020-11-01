import { doRender } from './index1';
import TodoApp from './components/TodoApp';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
console.log('index is loaded');
const m: any = module;
console.log('hot check');
if (m.hot) {
  m.hot.accept(['./index1.tsx', './components/TodoApp'], () => {
    console.log('accept');
    doRender(TodoApp);
  });
  console.log('hot and not accepted');
  doRender(TodoApp);
} else {
  console.log('not hot');
  doRender(TodoApp);
}
