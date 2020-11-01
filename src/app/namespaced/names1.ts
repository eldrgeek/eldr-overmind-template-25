import { Action } from 'overmind';
import { IConfig } from 'overmind';

const names1Actions: {
  incr: Action<number>;
  incr1: Action;
} = {
  incr: ({ state, actions }, amount) => {
    state.names1.count += -1;
    // state.names2.count += 2;
  },
  incr1: ({ state, actions }, amount) => {
    // state.names1.count = 3;
    actions.names1.incr(1);
    // actions.names2.incr(1);
  },
};

const names1 = {
  state: { count: 5 },
  actions: names1Actions,
};
export default names1;
