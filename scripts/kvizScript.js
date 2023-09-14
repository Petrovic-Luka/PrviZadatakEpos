var pomocna = 0;

const Prikazi = function () {
  document.getElementsByClassName("popup")[0].style.display = "flex";
};

function Sacuvaj() {
  let data = {
    ime: document.getElementById("ime").value,
    email: document.getElementById("email").value,
    karte: document.getElementById("karte").value,
  };
  localStorage.setItem("data", JSON.stringify(data));

  const asd = localStorage.getItem("data");
  console.log("data: ", JSON.parse(asd));
}
