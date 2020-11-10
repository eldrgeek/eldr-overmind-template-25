import { doRender } from './app/appUtil';
import App from './components/App';
// import 'tailwindcss';
// import './tailwind.css';
// import 'todomvc-app-css/index.css';
console.log('index is loaded');
const m: any = module;
console.log('hot check');
if (m.hot) {
  m.hot.accept(['./app/appUtil', './components/App'], () => {
    console.log('accept');
    doRender(App);
  });
  console.log('hot and not accepted');
  doRender(App);
} else {
  console.log('not hot');
  doRender(App);
}
doRender(App);
