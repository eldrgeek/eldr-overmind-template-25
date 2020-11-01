import { createHook } from 'overmind-react';
import { state } from './state';
import { onInitialize } from './onInitialize';
import * as actions from './actions';
import * as effects from './effects';
import { IConfig } from 'overmind';
import { merge, namespaced } from 'overmind/config';
import { Action } from 'overmind';
import ns2 from './namespaced/ns2';
import names1 from './namespaced/names1';
import names4 from './namespaced/names2';

// const names1Actions: {
//   incr: Action<number>;
//   incr1: Action;
// } = {
//   incr: ({ state, actions }, amount) => {
//     state.names1.count += -3;
//     // state.names2.count += 2;
//   },
//   incr1: ({ state, actions }, amount) => {
//     // state.names1.count = 3;
//     actions.names1.incr(1);
//     // actions.names2.incr(1);
//   },
// };

// const names1 = {
//   state: { count: 5 },
//   actions: names1Actions,
// };
// type N1 = typeof names1;
// const names2 = {
//   state: { count2: 5 },
//   // actions: names1Actions,
// };
// const names3 = {
//   state: { names3: names1.state },
//   actions: { names3: names1.actions },
// };
// type N1 = typeof names1;
// effects: {},

const config1 = {
  onInitialize,
  state,
  actions,
  effects,
};

const config2 = {
  onInitialize: config1.onInitialize,
  state: { ...config1.state, names1: names1.state },
  actions: { ...config1.actions, names1: names1.actions },
  effects,
};

export const config =
  // config2;

  merge(
    config2,
    names1,

    namespaced({ names4, names3: names1, ns2: ns2 })
  );
// )
// export const config = config1; // merge(config2, names1);
// console.log(config.state.count)

export const useApp = createHook<typeof config>();

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}
