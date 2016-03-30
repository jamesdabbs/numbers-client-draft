export default class NumberManager {
  store(n) {
    const data = new FormData()
    data.append("number", n)

    return fetch("http://localhost:4567/numbers", {
      method: "POST",
      body: data
    }).then(res => res.json());
  }

  read() {
    return fetch("http://localhost:4567/numbers").
      then(res => res.json())
  }

  getSum() {
    return fetch("http://localhost:4567/numbers/sum").
      then(res => res.json())
  }

  getProduct() {
    return fetch("http://localhost:4567/numbers/product").
      then(res => res.json())
  }
}
