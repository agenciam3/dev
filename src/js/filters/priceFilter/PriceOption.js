export default class PriceOption extends HTMLElement {
  constructor() {
    super();

    this._data = {};
  }

  set data(value) {
    this._data = value;
  }

  get data() {
    return this._data;
  }

  connectedCallback() {
    this.updateComponent(this);
  }

  dispatchOptionSelectedEvent(event, node) {
    const optionSelected = new CustomEvent('optionselected', {
      detail: {
        value: event.target.value,
        isChecked: event.target.checked
      }
    })

    node.dispatchEvent(optionSelected)
  }

  updateComponent(node) {
    const optionInput = document.createElement("input");
    optionInput.setAttribute("type", "checkbox");
    optionInput.setAttribute("name", "priceRange");
    optionInput.setAttribute("value", this.data.range);

    const optionName = document.createElement("label");
    optionName.innerHTML = this.data.labelText;
    optionName.setAttribute("for", this.data.range);

    node.appendChild(optionInput);
    node.appendChild(optionName);
    optionInput.addEventListener("change", (event) => this.dispatchOptionSelectedEvent(event, node));
  }
}