import NumberManager from 'number-manager'

const manager = new NumberManager();

export default class NumberListView {
  constructor(el) {
    this.el = el;

    manager.read().then(numbers => {
      this.numbers = numbers;
      this.render();
    });

    this.numbers = "Fetching numbers ...";
    this.render();
  }

  render() {
    this.el.innerHTML = `<p>${this.numbers}</p>`;
  }
}
