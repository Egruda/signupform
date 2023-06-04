let password = document.querySelector('#password');
let passwordConfirmation = document.querySelector('#passwordrepeat');

passwordConfirmation.addEventListener("change", check);

function check(password, passwordConfirmation) {
    if (password.value != passwordConfirmation.value) {
        const para= document.createElement("p");
        const node= document.createTextNode("Password do not match");

        para.appendChild(node);
        document.querySelector("#confirmation").appendChild(para);
    }
}