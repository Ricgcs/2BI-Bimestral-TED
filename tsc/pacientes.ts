// pacientes.ts
export interface paciente {
    Nome: String,
    Idade: number,
    Especialista: String,
    Gravidade: String,
}

export const cliente: paciente[] = [
    {
        Nome: "Paciente-A",
        Idade: 15,
        Especialista: "ortopedia",
        Gravidade: "emergencia",
    },
    {
        Nome: "Paciente-B",
        Idade: 79,
        Especialista: "cardiologia",
        Gravidade: "preferencial",
    },
    {
        Nome: "Paciente-C",
        Idade: 27,
        Especialista: "clinico geral",
        Gravidade: "urgente",
    },
    {
        Nome: "Paciente-D",
        Idade: 35,
        Especialista: "ortopedia",
        Gravidade: "comum",
    },
    {
        Nome: "Paciente-E",
        Idade: 2,
        Especialista: "cardiologia",
        Gravidade: "urgente",
    },
    {
        Nome: "Paciente-F",
        Idade: 13,
        Especialista: "clinico geral",
        Gravidade: "emergencia",
    },
];


// ANTIGO
// export interface paciente{
//     Nome:String,
//     Idade:number,
//     Especialista:String,
//     Gravidade:number,
// }

// export const cliente:paciente[] = [
//     {
//         Nome:"Paciente-A",
//         Idade:15,
//         Especialista:"ortopedia",
//         Gravidade:4,
//     },

//     {
//         Nome:"Paciente-B",
//         Idade:79,
//         Especialista:"cardiologia",
//         Gravidade:2,
//     },

//     {
//         Nome:"Paciente-C",
//         Idade:27,
//         Especialista:"clinico geral",
//         Gravidade:3,
//     },

//     {
//         Nome:"Paciente-D",
//         Idade:35,
//         Especialista:"ortopedia",
//         Gravidade:1,
//     },

//     {
//         Nome:"Paciente-E",
//         Idade:2,
//         Especialista:"cardiologia",
//         Gravidade:3,
//     },

//     {
//         Nome:"Paciente-F",
//         Idade:13,
//         Especialista:"clinico geral",
//         Gravidade:4,
//     },
// ];