import { allSizes } from "../../utils";

export default class SizeFilter extends HTMLElement {
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
        value: event.detail.value,
        isChecked: event.detail.isChecked
      }
    })

    node.dispatchEvent(optionSelected)
  }

  updateComponent(node) {
    const sizeFilterContainer = document.createElement("fieldset");
    sizeFilterContainer.setAttribute("id", "sizeFilterContainer");
    node.append(sizeFilterContainer);

    const filterTitle = document.createElement("legend");
    filterTitle.innerHTML = "TAMANHOS";
    sizeFilterContainer.appendChild(filterTitle);

    allSizes.map(size => {
      const sizeOption = document.createElement("size-option");
      sizeOption.data = {
        size: size,
        disabled: false
      };

      sizeOption.addEventListener("optionselected", (e) => this.dispatchOptionSelectedEvent(e, node));
      sizeFilterContainer.appendChild(sizeOption);
    });
  }
}