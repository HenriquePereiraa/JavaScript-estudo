//Simular o envio de email
//apos a simulação do envio do email o callback será executado

//USANDO PARAMETROS
// function enviarEmail(corpo, para, callback) {
//     setTimeout(() => {
//         console.log(`
//             Para: ${para}
//             ------------------------
//             ${corpo}
//             ------------------------
//             De:Henrique
//         `)
//         callback("OK",5,"8s");
//     },8000)
// }

// console.log("Email sendo enviado")
// enviarEmail("Hello World, developers! Vamos aprender sobre CallBacks!","developers@teste.com", (status, amount, time) => {
//     console.log(`
//         Status:${status}
//         ----------------
//         Contatos:${amount}
//         ----------------
//         Tempo de envio:${time}
//         ----------------
//     `)
//     console.log("Email Entregue!");
// });


/**==================================================== */


//TRATAMENTO DE ERROS

function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        
        //..... lógica do envio de email

        var deuErro = true;

        if(deuErro) {
            callback("O envio do email falhou!")
        } else {
            callback();
        }
        
    },8000)
}

console.log("Email sendo enviado")
enviarEmail("Hello World, developers! Vamos aprender sobre CallBacks!","developers@teste.com", (error) => {
    
    if(error === undefined) {
        console.log("Email Entregue!");
    } else {
        console.log(error)
    }
});