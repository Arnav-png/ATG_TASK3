console.log("hello");
var inp1 = document.getElementById("inp1")
var btn = document.getElementById('btn ')
var req = document.getElementById('req')
var form1 = document.getElementById('form1')
var backdrop = document.getElementById('backdrop')
var btntext = document.getElementById("btntext")
var spinner = document.getElementById("spinner")

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
    btntext.style.display = 'none'
    spinner.style.display = 'flex'

    setTimeout(() => {
        spinner.style.display = 'none'
    }, 2000);
    window.location.reload();
    // backdrop.style.display = "flex"
})