/*
From the example

export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
*/

export function posts(state = [], action) {
  switch(action.type) {
    case 'ADD':
      return [...state, action.value];
    case 'ADD_AT_INDEX':
      return [...state].splice(action.value.index, 0, action.value.item)
    case 'FETCH_COMPLETE': 
      return action.value
    case 'DELETE':
      return [...state].splice(action.value, 1);
    case 'REPLACE':
      return [...state].splice(action.value.index, 1, action.value.replacement);
    
    default:
      return state
  }
}