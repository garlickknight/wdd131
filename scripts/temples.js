const hambutton = document.queryselector("#menu");
const navigation = document.queryselector(".navigation");

hambutton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hambutton.classList.toggle("show");

});