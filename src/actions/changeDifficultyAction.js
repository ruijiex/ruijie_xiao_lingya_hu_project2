export default function changeDifficultyAction(difficulty) {
  return {
    type: 'SWITCH_DIFFICULTY',
    payload: difficulty,
  };
}
