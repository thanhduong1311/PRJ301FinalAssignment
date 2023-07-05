let totalPrice = 0;

let allCheck = $(".courseInCart .item input")

//uncheck all courses and add listener
if (allCheck.length) {
  for (let i = 0; i < allCheck.length; i++) {
    allCheck[i].checked = false;

    //add listener
    allCheck[i].addEventListener('click', function () {
      //get price
      let price = this.parentElement.getElementsByTagName("p")[1].innerHTML.slice(0, -1);
      if (this.checked) {
        totalPrice += Number(price);
      } else {
        totalPrice -= Number(price);
      }

      //set total cost
      let totalCostLabel = $(".component.totalCost span")[0];
      totalCostLabel.innerHTML = "$" + totalPrice;
      let totalPriceLabel = $(".component.balance span")[0];
      totalPriceLabel.innerHTML = "$" + totalPrice;
    });
  }
}

