/// <summary>
/// Variável booleana que define se o temporizador deve ou não ser resetado no próximo loop.
/// </sumary >
var resetar = false;
/// <summary>
/// Variável booleana que guarda o status de ativo ou inativo para o temporizador.
/// </sumary >
var temporizadorAtivo = true;
/// <summary>
/// Variável interna para o controle do interval.
/// </sumary >
var interval;
/// <summary>
/// Tempo máximo do temporizador, definir um valor para esta variável fará com que o temporizador comece do valor definido.
/// </sumary >
var countMaximo = 60
/// <summary>
/// Tempo atual do temporizador. Usado internamente.
/// </sumary >
var count = countMaximo;

/// <summary>
/// Inicia o temporizador e exibe o valor em tela no elemento com id 'temporizador'
/// </sumary >
function Temporizador() {
    if (resetar) { //Verifica se o temporizador deve ser resetado;
        clearInterval(interval); //Limpa o interval para resetar o interval;
        resetar = false; //Marca a variavel reset como false para o ciclo continuar;
    }
    interval = setInterval(() => { //Cria o interval que será executado de 1 em 1 segundo;
        if (temporizadorAtivo) { //Verifica se o temporizador está ativo;
            count -= 1; //Diminui 1 do tempo;
            console.log(count)
            $("#temporizador").text(count); //Mostra o tempo na tela;
            if (count == 0) //Verifica se o tempo acabou;
                temporizadorAtivo = false; //Se sim desabilita o temporizador;
        } else {
            clearInterval(interval) //Caso o temporizador esteja desabilitado o interval é limpo;
        }
    }, 1000);
}
/// <summary>
/// Reseta o temporizador para o tempo máximo definido
/// </sumary >
function ResetarTemporizador() {
    $("#temporizador").text(countMaximo);
    resetar = true;
    count = countMaximo
}

/// <summary>
/// Recebe um status booleano para ativar ou desativar o temporizador
/// </sumary >
/// <param name="status">status booleano a ser recebido</param>
function TemporizadorAtivo(status) {
    temporizadorAtivo = status;
}