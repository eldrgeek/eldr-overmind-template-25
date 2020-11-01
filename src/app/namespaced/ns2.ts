import { Action } from 'overmind';
import { IConfig } from 'overmind';

const names1Actions: {
  incr: Action<number>;
  incr1: Action;
} = {
  incr: ({ state, actions }, amount) => {
    state.names1.count += 1;
    state.ns2.count += 1;
    // state.names2.count += 2;
  },
  incr1: ({ state, actions }, amount) => {
    state.names1.count = 1;
    actions.names1.incr(1);
    // actions.names2.incr(1);
  },
};

const config = {
  state: { count: 0 },
  actions: names1Actions,
};
export default config;
type N1 = typeof names1;
