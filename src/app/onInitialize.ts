import { OnInitialize } from 'overmind';

export const onInitialize: OnInitialize = (
  { state, actions, effects },
  instance
) => {
  state.names1 = effects.storage.getState('names1');
  console.log(effects.storage.getState('names1'));
  instance.reaction(
    ({ names1 }) => names1,
    (names1) => effects.storage.saveState('names1', state.names1),
    { nested: true }
  );

  // effects.router.initialize({
  //   '/': () => actions.changeFilter(Filter.ALL),
  //   '/active': () => actions.changeFilter(Filter.ACTIVE),
  //   '/completed': () => actions.changeFilter(Filter.COMPLETED),
  // });
};
