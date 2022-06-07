const sentence = 'Badabing Badaboong Mr. World Wide';
let interval = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, interval);
  interval += 50;
}
setTimeout(() => {
  process.stdout.write('\n');
}, interval);

