const bedSelected = document.getElementbyID("bed-count-dropdown").value;

bedSelected.addEventListener("click", (e) => {
  if (e.target.value === "1 bedroom") {
    console.log("1 bedroom");
  } else {
    console.log("nothing selected");
  }
});
