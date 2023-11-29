

const BTN = document.querySelector("#disappearBTN")
const btnTEXT = document.querySelector('#btnText')
BTN.addEventListener('click', disappear)

function disappear () {
    console.log(BTN)
    BTN.remove()
    btnTEXT.innerHTML = 'PPS: Here WAS a big button.'
}