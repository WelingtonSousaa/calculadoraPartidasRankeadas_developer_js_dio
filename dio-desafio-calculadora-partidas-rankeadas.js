function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    switch (true) {
        case saldoVitorias < 10:
            nivel = "Ferro";
            break;
        case saldoVitorias > 10 && saldoVitorias <= 20:
            nivel = "Bronze";
            break;
        case saldoVitorias > 20 && saldoVitorias <= 50:
            nivel = "Prata";
            break;
        case saldoVitorias > 50 && saldoVitorias <= 80:
            nivel = "Ouro";
            break;
        case saldoVitorias > 80 && saldoVitorias <= 90:
            nivel = "Diamante";
            break;
        case saldoVitorias > 90 && saldoVitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }
    return `O herói tem um saldo de ${saldoVitorias} está no nível ${nivel}`;
}
(function () {
    // Exemplo 
    const vitorias = 10;
    const derrotas = 1;

    console.log(calcularNivel(vitorias, derrotas));
})();