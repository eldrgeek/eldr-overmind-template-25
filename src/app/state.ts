import { derived } from 'overmind';

type State = {
  stateVar: string;
  derivedState: string;
};

export const state: State = {
  stateVar: 'this is the state',
  derivedState: derived(({ stateVar }: State) => {
    return stateVar;
  }),
};
