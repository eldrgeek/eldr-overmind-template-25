
import {
  IConfig,
  IOnInitialize,
  IAction,
  IOperator,
  IState
} from 'overmind';

// //this 
export const config = {
  state:{},
  actions:{},
  effects:{}
}
​
// Due to circular typing we have to define an
// explicit typing of state, actions and effects since
// TS 3.9
export interface Config extends IConfig<{
  state: typeof config.state,
  actions: typeof config.actions,
  effects: typeof config.effects
}> {}
​
export interface OnInitialize extends IOnInitialize<Config> {}
​
export interface Action<Input = void, Output = void> extends IAction<Config, Input, Output> {}
​
export interface AsyncAction<Input = void, Output = void> extends IAction<Config, Input, Promise<Output>> {}
​
export interface Operator<Input = void, Output = Input> extends IOperator<Config, Input, Output> {}