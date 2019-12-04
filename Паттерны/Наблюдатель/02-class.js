'use strict';
const randomChar = () => String.fromCharCode(Math.floor((Math.random() * 25) + 97));

class Observable {
  constructor() {
    this.obs = null;
    setInterval(() => {
      if (!this.obs) return;
      const char = randomChar();
      this.obs(char);
    }, 200);
  }

  subscribe(obs) {
    this.obs = obs;
    return this;
  }
}

// usage

let count = 0;

const observer = char => {
  process.stdout.write(char);
  count++;
  if (count > 50) {
    process.stdout.write('\n');
    process.exit(0);
  }
};

const observable = new Observable().subscribe(observer);

console.dir({
  observer, observable
});

