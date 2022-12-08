function check() {
    
    let FIO = document.getElementById("FIO").value;
    let MALE = document.getElementById("sex").value;
    let AGE = document.getElementById("AGE").value;
    let DATE = document.getElementById("DATE").value;
    let EMAIL = document.getElementById("EMAIL").value;
    let BROO = document.getElementById("BROO").value;
    let PHONE = document.getElementById("PHONE").value;
    


    let info = document.getElementsByClassName('info')
    let arrInf = [FIO, MALE,AGE,DATE,EMAIL,BROO,PHONE]
    let infoLan = ["ФИО", "ПОЛ","ВОЗРАСТ","ДАТА","EMAIL","СЕМЕЙНОЕ ПОЛОЖЕНИЕ","ТЕЛЕФОН"]

    for(let i = 0; i<arrInf.length;i++){
        info[i].innerHTML = infoLan[i]+" : "+arrInf[i];
    }


}