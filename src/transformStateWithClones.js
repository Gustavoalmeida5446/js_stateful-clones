'use strict';

function transformStateWithClones(state, actions) {
  const history = [];
  let current = state;

  for (const action of actions) {
    if (action.type === 'clear') {
      current = {};
    } else if (action.type === 'addProperties') {
      current = { ...current, ...action.extraData };
    } else if (action.type === 'removeProperties') {
      current = { ...current };

      for (const key of action.keysToRemove) {
        delete current[key];
      }
    }

    history.push(current);
  }

  return history;
}

module.exports = transformStateWithClones;
