import NumberManager from 'number-manager'
const nm = new NumberManager();

export default class StoreNumberView {
  constructor(element) {
    this.element = element;
    this.listenForClicks()
  }

  listenForClicks() {
    this.element.addEventListener("click", () => {
      const number = this.element.querySelector("input").value;
      nm.store(number)
    })
  }
}
