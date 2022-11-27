export default class SizeOption extends HTMLElement {
  constructor() {
    super();

    this._data = {};

    const shadow = this.attachShadow({ mode: "open" });

    const SizeOptionContainer = document.createElement("div");
    SizeOptionContainer.setAttribute("id", "SizeOptionContainer");
    shadow.append(SizeOptionContainer);
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

  updateComponent(el) {
    const shadow = el.shadowRoot;
    const SizeOptionContainer = shadow.getElementById("SizeOptionContainer");

    const optionName = document.createElement("label");
    optionName.innerHTML = this.data.size;
    optionName.setAttribute("for", this.data.size);

    const optionInput = document.createElement("input");
    optionInput.setAttribute("type", "checkbox");
    optionInput.setAttribute("name", this.data.size);

    if(this.data.disabled) {
      optionInput.setAttribute("disabled", true);
    }

    SizeOptionContainer.appendChild(optionInput);
    SizeOptionContainer.appendChild(optionName);
  }
}