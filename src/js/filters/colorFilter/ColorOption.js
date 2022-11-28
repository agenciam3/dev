export default class ColorOption extends HTMLElement {
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
    optionInput.setAttribute("name", this.data.color);
    optionInput.setAttribute("id", this.data.color);
    optionInput.setAttribute("value", this.data.color);

    const optionName = document.createElement("label");
    optionName.innerHTML = this.data.color;
    optionName.setAttribute("for", this.data.color);

    node.appendChild(optionInput);
    node.appendChild(optionName);
    optionInput.addEventListener("change", (event) => this.dispatchOptionSelectedEvent(event, node));
  }
}