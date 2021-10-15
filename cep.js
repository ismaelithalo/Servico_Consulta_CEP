var r = document.getElementById('resultado')

function setCEP() {
    var cep = document.getElementById('cep').value
    var xhr = new XMLHttpRequest();
    xhr.open ("GET", "http://cep.la/"+cep, true);
    xhr.setRequestHeader ("Accept", "application/json");
    xhr.onreadystatechange = function(){
    if((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200)
    // alert(xhr.responseText)
    r.innerText = xhr.responseText
    
};
xhr.send (null);
}
function setAdress() {
    var e = document.getElementById('estado').value
    var c = document.getElementById('cidade').value
    var b = document.getElementById('bairro').value
    var l = document.getElementById('logradouro').value

    if (e == "" || c == "" || b == "") {
        alert("Por favor, preencha pelo menos os campos de Estado, Cidade e Bairro.")
    }
    else {
        var adr = e + "/" + c + "/" + b + "/" + l

        var xhr = new XMLHttpRequest();
        xhr.open ("GET", "http://cep.la/"+ adr, true);
        xhr.setRequestHeader ("Accept", "application/json");
        xhr.onreadystatechange = function(){
        if((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200)
            // alert(xhr.responseText)
            r.innerText = xhr.responseText
        
        };
        xhr.send (null);
    }
    
}

