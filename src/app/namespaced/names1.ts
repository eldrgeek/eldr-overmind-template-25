import { Action } from 'overmind';
// import { IConfig } from 'overmind';

const names1Actions: {
  incr: Action<number>;
  incr1: Action;
  decr1: Action;
} = {
  incr: ({ state, actions }, amount) => {
    state.names1.count += 1;
    // state.names2.count += 2;
  },
  incr1: ({ state, actions }, amount) => {
    state.names1.count += 1;
    // actions.names1.incr(1);
    // actions.names2.incr(1);
  },
  decr1: ({ state, actions }, amount) => {
    state.names1.count += -1;
    // actions.names1.incr(1);
    // actions.names2.incr(1);
  },
};

const names1 = {
  state: { count: 3, count1: 3, count4: 32 },
  actions: names1Actions,
};
export default names1;
