function calc() {
  //Calc
  const result = document.querySelector(".calculating__result span");
  let height,
    weight,
    age,
    ratio = 1.375,
    sex = "female";

  function calcTotal() {
    if (!height || !weight || !age || !ratio || !sex) {
      result.textContent = 0;
      return;
    }

    if (sex === "female") {
      result.textContent = Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
      );
    } else {
      result.textContent = Math.round(
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
      );
    }
  }
  calcTotal();

  function getStaticValue(parentElement, activeClass) {
    const elements = document.querySelectorAll(`${parentElement} div`);
    elements.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
        } else {
          sex = e.target.getAttribute("id");
        }

        elements.forEach((item) => item.classList.remove(activeClass));
        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }

  getStaticValue("#gender", "calculating__choose-item_active");
  getStaticValue(".calculating__choose_big", "calculating__choose-item_active");

  function getDynamicValue(parentElement) {
    const elements = document.querySelectorAll(`${parentElement} input`);

    elements.forEach((item) => {
      item.addEventListener("input", (e) => {
        switch (e.target.getAttribute("id")) {
          case "height":
            height = +e.target.value;
            break;
          case "weight":
            weight = +e.target.value;
            break;
          case "age":
            age = +e.target.value;
            break;
        }
        calcTotal();
      });
    });
  }

  getDynamicValue(".calculating__choose_medium");
}

module.exports = calc;