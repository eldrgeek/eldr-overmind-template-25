import { createHook } from 'overmind-react';
import { state } from './state';
import { onInitialize } from './onInitialize';
import * as actions from './actions';
import * as effects from './effects';
import { IConfig } from 'overmind';
import { merge, namespaced } from 'overmind/config';
import { Action } from 'overmind';
import names1 from './namespaced/names1';
import names2 from './namespaced/names2';

const base = {
  onInitialize,
  state,
  actions,
  effects,
};

const baseCopy = {
  onInitialize: base.onInitialize,
  state: { ...base.state },
  actions: { ...base.actions },
  effects,
};

export const config =
  // config2;

  merge(baseCopy, namespaced({ names1, names2 }));

export const useApp = createHook<typeof config>();

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}
