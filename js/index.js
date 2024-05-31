var bookmarkNameInput = document.getElementById('bookmarkName');
var bookmarkURLInput = document.getElementById('bookmarkURL');

var webList = [];
if (localStorage.getItem('webFile') !== null) {
    webList = JSON.parse(localStorage.getItem('webFile'));
    display();
}

function addWebsite() {
    var websit = {
        code: bookmarkNameInput.value,
        URL: bookmarkURLInput.value,
    };

    if (validateInput()) {
        webList.push(websit);
        localStorage.setItem("webFile", JSON.stringify(webList));
        clearInput();
        display();
    } else {
        Swal.fire({
            title: "In valid Data",
            text: `${valid ==true? "Enter Name Website":"" }${validateInput () == true ?"":"Enter URL" }`,
            icon: "error"
          });
    }
}

function clearInput() {
    bookmarkNameInput.value = null;
    bookmarkURLInput.value = null;
}

function display() {
    var cartoona = ``
    for (var i = 0; i < webList.length; i++) {
        cartoona += `<tr class="p-5">
        <td>${i}</td>
        <td>${webList[i].code}</td>
        <td><a class="visit-2 p-2 px-4 fs-5" href="${webList[i].URL}" target="_blank"><i class="fa-solid fa-eye"></i> Visit</a></td>
        <td><button onclick="delet(${i})" class="py-2 px-4 fs-5 delet"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>`
    }

    document.getElementById('data').innerHTML = cartoona;
}

function delet(deletindex) {
    webList.splice(deletindex, 1);
    localStorage.setItem("webFile", JSON.stringify(webList));
    display();
}


var valid
function validateInput() {
    var regexp = /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

     valid= /^[A-Z][a-z]{2,10}$/;


    if (regexp.test(bookmarkURLInput.value) && valid.test(bookmarkNameInput.value) ){
        bookmarkURLInput.classList.add('is-valid');
        bookmarkURLInput.classList.remove("is-invalid");
        bookmarkNameInput.classList.add('is-valid');
        bookmarkNameInput.classList.remove("is-invalid");
        return true;
    } else {
        bookmarkURLInput.classList.add('is-invalid');
        bookmarkURLInput.classList.remove('is-valid');
        bookmarkNameInput.classList.add('is-invalid');
        bookmarkNameInput.classList.remove('is-valid');
        return false;

    } 
}
