export default class Wordle {
  library = new Map(); // library: Map { k:Array }, k is word length
  difficulties = new Set([5, 6, 7]);

  difficulty = 5;
  secret = '';

  constructor(difficulty) {
    if (difficulty !== undefined) this.difficulty = difficulty; // difficulty: word length { easy:5, medium:6, hard:7 }

    const words = [
      'Apple',
      'Beach',
      'Cream',
      'Dance',
      'Earth',
      'Fruit',
      'Glass',
      'Hotel',
      'Index',
      'Level',
      'Music',
      'North',
      'Offer',
      'Bottle',
      'Castle',
      'Circle',
      'Decide',
      'Define',
      'Dinner',
      'Editor',
      'Equity',
      'Figure',
      'Gender',
      'Import',
      'Legacy',
      'Academy',
      'Airline',
      'Balance',
      'Because',
      'Capital',
      'Deliver',
      'Element',
      'Fortune',
      'Healthy',
      'Insight',
      'Million',
    ];

    for (const word of words) {
      const k = word.length;
      if (this.difficulties.has(k)) {
        if (!this.library.has(k)) this.library.set(k, []);

        this.library.get(k).push(word.toUpperCase());
      }
    }

    this.generateSecret();
  }

  changeDifficulty(difficulty) {
    this.difficulty = difficulty;
    this.generateSecret();
  }

  generateSecret() {
    const words = this.library.get(this.difficulty);
    this.secret = words[Math.floor(Math.random() * words.length)];
  }

  getSecret() {
    return this.secret;
  }

  guess(word) {
    if (word.length !== this.difficulty) return [];

    const maps = new Map(); // secret frequency map
    for (const char of this.secret) {
      if (!maps.has(char)) maps.set(char, 0);
      maps.set(char, maps.get(char) + 1);
    }

    // color check has priority: need two trivial loops - check 2 before 1, case: secret = "aba", guess = "aaa"
    const colors = Array(this.difficulty).fill(0); // 2: char and pos match, 1: char exists but pos doesn't

    for (let i = 0; i < this.difficulty; i++) {
      const char = word[i].toUpperCase();

      if (char === this.secret[i]) {
        if (maps.get(char) > 0) {
          colors[i] = 2; // found a match: push green

          maps.set(char, maps.get(char) - 1);
        }
      }
    }

    for (let i = 0; i < this.difficulty; i++) {
      const char = word[i].toUpperCase();

      if (char !== this.secret[i]) {
        if (maps.get(char) > 0) {
          colors[i] = 1; // the char exists in the secret, but pos doesn't match: scan left to right

          maps.set(char, maps.get(char) - 1);
        }
      }
    }

    return colors;
  }
}
