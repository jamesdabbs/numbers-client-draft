import NumberManager from 'number-manager'
const nm = new NumberManager();

export default class SumView {
  constructor(node) {
    this.partOfPage = node;

    this.sum = "calculating ..."
    this.render();

    nm.getSum().then(sum => {
      this.sum = sum;
      this.render();
    })
  }

  render() {
    this.partOfPage.innerHTML = `
      <p>Sum is: ${this.sum}</p>
    `;
  }
}
