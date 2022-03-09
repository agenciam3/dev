export default function setTamanhos(lista, tamOpt) {
  let teste = [];

  lista.map(item => {
    item.size.forEach(s => {
      teste.push(s);
    })
  })
  //console.log(tamOpt)


  var uniqueSizes = teste.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });

  const sizeHolder = document.createElement("div");
  sizeHolder.classList.add("size-holder");
  tamOpt.appendChild(sizeHolder);

  let selected = [];
  uniqueSizes.map(un => {
    const btnSize = document.createElement("button");
    btnSize.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.add("size-item-selected");
      selected.push(this.innerHTML);
      console.log(selected)
      const card = document.querySelectorAll(".prod-card");

      console.log(card)
      for (let i = 0; i < selected.length; i++) {

        lista.slice(0, 9).filter(l => {
          card[(l.id) - 1].classList.add("hide");
          for (let y = 0; y < l.size.length; y++) {
            if (l.size[y] == selected[i]) {
              card[(l.id) - 1].classList.remove("hide");
              card[(l.id) - 1].classList.add("show");
            }
          }
        });
      }
    });
    btnSize.classList.add("size-item");
    btnSize.innerHTML = un;
    sizeHolder.appendChild(btnSize);
  });
}


