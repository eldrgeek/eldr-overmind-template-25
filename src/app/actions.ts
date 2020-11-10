import { Action } from 'overmind';

export const setStateVar: Action<string> = ({ state }, title) => {
  state.stateVar = title + '';
};
