// Menampilkan pesan ketika halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Riyyan berhasil dimuat!");

    // Menandai menu yang sedang dipilih
    const menuLinks = document.querySelectorAll("nav a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            menuLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});