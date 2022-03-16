export default function changeDifficulty(state = 'easy', action) {
  switch (action.type) {
    case 'SWITCH_DIFFICULTY':
      return action.payload;
    default:
      return state;
  }
}
