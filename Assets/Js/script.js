function sorteio(){
    var i;

    for(i = 0; i < 6; i++){
        var min = parseInt(document.getElementById("min").value);
        var max = parseInt(document.getElementById("max").value);

        if(min < 0 || max <= 0){
            document.getElementById("resultado").innerHTML = "digite um número valido"
        } else {
            var res = Math.floor(Math.random() * (max - min + 1) + min);
    
                document.getElementById("resultado").innerHTML = res.toString();
        }
    }
}