const countryListDiv = document.querySelector(".countryListDiv"),
selectBtn = countryListDiv.querySelector(".select-btn");
selectBtn.addEventListener("click",() => {
    countryListDiv.classList.toggle("active");
});