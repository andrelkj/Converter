function Converter() {
    var valorEmDolar = 30;
    var cotacaoDolar = 5.07;
    var valorCripto = 117321.67;
    
    var valorEmReal = valorEmDolar * cotacaoDolar;
    
    var valorCripto = valorEmReal * valorCripto;
    
    let name = "André";
    
    var anoLuz = 9460000000000;
    var distAnosLuz = 4000;
    
    var distMetros = anoLuz * 4000;
    
    var tempoAnos = distMetros / 299792458 / 3600 / 365;
    
    alert(
      distAnosLuz +
        " anos luz equivalem a: " +
        distMetros +
        " metros, podendo ser percorrido em " +
        tempoAnos.toFixed(2) +
        " anos na velocidade da luz."
    );
    
}