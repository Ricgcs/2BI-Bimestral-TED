// triagem.ts
import { cliente, paciente } from './pacientes'; // Importa os arrays cliente e paciente do arquivo pacientes.js

const CG: paciente[] = []; // Array para pacientes de Clínico Geral
const CL: paciente[] = []; // Array para pacientes de Cardiologia
const OP: paciente[] = []; // Array para pacientes de Ortopedia

function gravidadeValor(gravidade: String): number {
    switch (gravidade.toLowerCase()) {
        case 'emergencia':
            return 1;
        case 'urgente':
            return 2;
        case 'preferencial':
            return 3;
        case 'comum':
            return 4;
        default:
            return 0; // Erro
    }
}

function adicionar_cliente() {
    let tamanho = cliente.length; // Obtém o tamanho do array cliente

    // Ordena o array de clientes com base na gravidade


    cliente.sort((a, b) => gravidadeValor(a.Gravidade) - gravidadeValor(b.Gravidade));

    for (let a = 0; a < tamanho; a++) {
        // Verifica a especialidade de cada paciente e adiciona ao array apropriado
        if (cliente[a].Especialista.toLowerCase() == "clinico geral") {
            CG.push(cliente[a]);
        } else if (cliente[a].Especialista.toLowerCase() == "cardiologia") {
            CL.push(cliente[a]);
        } else if (cliente[a].Especialista.toLowerCase() == "ortopedia") {
            OP.push(cliente[a]);
        }
    }
}

// Chama a função para adicionar clientes
adicionar_cliente();

// Exibe os resultados (opcional, para verificação)
console.log('Clínico Geral:', CG);
console.log('Cardiologia:', CL);
console.log('Ortopedia:', OP);


// ANTIGO
// import { cliente, paciente } from './pacientes'; // Importa os arrays cliente e paciente do arquivo pacientes.js

// const CG: paciente[] = []; // Array para pacientes de Clínico Geral
// const CL: paciente[] = []; // Array para pacientes de Cardiologia
// const OP: paciente[] = []; // Array para pacientes de Ortopedia

// function adicionar_cliente(){
//     let tamanho = cliente.length; // Obtém o tamanho do array cliente

//     for(let a = 0; a < tamanho; a++){
//         // Verifica a especialidade de cada paciente e adiciona ao array apropriado
//         if(cliente[a].Especialista.toLowerCase() === "clinico geral"){
//            CG.push(cliente[a]);
//         }

//         if(cliente[a].Especialista.toLowerCase() === "cardiologia"){
//             CL.push(cliente[a]);
//         }

//         if(cliente[a].Especialista.toLowerCase() === "ortopedia"){
//              OP.push(cliente[a]);
//         }
//     }

//     // Ordena os arrays pela gravidade em ordem decrescente
//     CG.sort((a, b) => b.Gravidade - a.Gravidade);
//     CL.sort((a, b) => b.Gravidade - a.Gravidade);
//     OP.sort((a, b) => b.Gravidade - a.Gravidade);
// }

// // Chame a função para adicionar clientes
// adicionar_cliente();

// // Exibe os resultados ordenados (apenas para fins de teste, você pode remover ou ajustar conforme necessário)
// console.log("Clínico Geral:", CG);
// console.log("Cardiologia:", CL);
// console.log("Ortopedia:", OP);