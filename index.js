console.log("hello");
var inp1 = document.getElementById("inp1")
var btn = document.getElementById('btn ')
var req = document.getElementById('req')
var form1 = document.getElementById('form1')
var backdrop = document.getElementById('backdrop')

inp1.addEventListener(('keyup'), (e) => {
    const value = e.currentTarget.value;

    if (value === "") {
        btn.disabled = true;
        req.style.visibility = 'visible';
    } else {
        btn.disabled = false
        req.style.visibility = 'hidden';

    }

})
btn.addEventListener(('click'), (e) => {
    e.preventDefault()
    backdrop.style.display = "flex"
})


btn.addEventListener(('click'), (e) => {
    e.preventDefault()
    setTimeout(() => {
        backdrop.style.display = "none"
    }, 2000);
    window.location.reload();
})


function myFunc() {
    preventDefault()
    console.log("submitted")
}