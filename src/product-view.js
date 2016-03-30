import NumberManager from 'number-manager'
const nm = new NumberManager();

export default class ProductView {
  constructor(el) {
    this.el = el;

    nm.getProduct().then(prod => {
      this.product = prod;
      this.render();
    })
  }

  render() {
    this.el.innerHTML = `<p>Product is: ${this.product}</p>`
  }
}
