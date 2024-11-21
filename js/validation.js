let form = document.getElementsByTagName("form")[0];

let regex_dict = {
    "fio": /^[A-Za-zА-Яа-я\s]{4,255}$/,
    "email": /^[\w]+@[A-Za-z0-9]+.[a-z]{2,63}$/,
    "tel": /^[0-9]{11}$/
}

function checkField(fieldId){
    let field = document.getElementById(fieldId);
    let fval = field.value;
    let fError = document.querySelector(`#${fieldId} + br + p.error`);
    if (fieldId == "date"){
        if (fval == ''){
            fError.innerHTML = "Некорректное значение!";
            field.style.border = "solid red 5px";
            return false;
        }
        let dn = new Date();
        let fdate = new Date(field.value);
        if (fdate < dn){
            fError.innerHTML = "Некорректное значение!";
            field.style.border = "solid red 5px";
            return false;
        }
        else{
            fError.innerHTML = "";
            field.style.border = "solid gray 2px";
            return true;
        }
    }
    else{
        let pat = regex_dict[fieldId];
        if (!pat.test(fval)){
            fError.innerHTML = "Некорректное значение!";
            field.style.border = "solid red 5px";
            return false;
        }
        else{
            fError.innerHTML = "";
            field.style.border = "solid gray 2px";
            return true;
        } 
    }
}

function output(){
    if (checkField('fio') && checkField('email') && checkField('tel') && checkField('date')){
        alert(`Данные формы:\nФИО: ${document.getElementById("fio").value}\nE-Mail: ${document.getElementById("email").value}\nТелефон: ${document.getElementById("tel").value}\nДата: ${document.getElementById("date").value}\nПродукт/услуга: ${document.getElementById("products_list").value}`);
    }
}
