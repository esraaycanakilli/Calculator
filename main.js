const harcamaInput = document.querySelector("#harcama");
const fiyatInput = document.querySelector("#fiyat");
const formBtn = document.querySelector(".ekle-btn");
const liste = document.querySelector(".liste");
const toplamBilgi = document.querySelector("#toplam-bilgi");

formBtn.addEventListener("click", addExpense);

liste.addEventListener("click", handleClick);

let toplam = 0;
function updateToplam(fiyat) {
  toplam += Number(fiyat);
  toplamBilgi.innerText = toplam;
}

function addExpense(e) {
  e.preventDefault();

  if (!fiyatInput.value || !harcamaInput.value) {
    alert("formları doldurun");
    return;
  }

  const harcamaDiv = document.createElement("div");
  harcamaDiv.classList.add("harcama");
  harcamaDiv.innerHTML = `
          <h2>${harcamaInput.value}</h2>
          <h2>${fiyatInput.value}</h2>
          <div class="buttons">
            <img src="images/pay.png" alt="" />
            <img src="images/remove.png" alt="" />
          </div>
          `;

  liste.appendChild(harcamaDiv);
  updateToplam(fiyatInput.value);

  harcamaInput.value = "";
  fiyatInput.value = "";
}

function handleClick(e) {
  const eleman = e.target;
  if (eleman.id === "remove") {
    alert("silme işlemi başlatıldı");
  }
}

