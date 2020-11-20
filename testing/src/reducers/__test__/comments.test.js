import { SAVE_COMMENT } from 'actions/types';
import commentsReducers from 'reducers/comments';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }

  const newState = commentsReducers([], action);
  expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
  const newState = commentsReducers([], {type: 'asdsadasd'});
  expect(newState).toEqual([]);
});