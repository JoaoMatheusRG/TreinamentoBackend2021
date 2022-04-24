import express, { json } from 'express';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const database = require('./database/index.cjs')

// knex insert
// let dados = {
//     nome: "Fernanda Alba",
//     cpf: "32145678910",
//     id_funcoes: "2",
//     id_cursos: "2"
// }

// database.insert(dados).into("integrantes").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

//knex select
// database.select(/*["nome"]*/).table("integrantes").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// knex insert + select
// database.insert({nome: "example", cpf: "32145678910", id_funcoes:2, id_cursos: 1}).into("integrantes").then(data => {
//     database.select().table("integrantes").then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });
// }).catch(err => {
//     console.log(err);
// });

//knex whereRaw
// database.select()
//     .whereRaw("nome = 'example' OR id > 7")
//     .table("integrantes").then(data => {
//         console.log(data)
//     }).catch(err => {
//         console.log(err)
//     })


//knex Raw
// database.raw("SELECT * FROM integrantes").then(data =>{
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

//knex delete
// database.where({nome: "example"})
//     .delete()
//     .table("integrantes")
//     .then(data =>{
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

//knex update
// database
//     .where({id: 2})
//     .update({id_funcoes: 1})
//     .table("integrantes")
//     .then(data =>{
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });

//knex orderBy //desc //asc
// database.select().table("integrantes").orderBy("nome","asc").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });




//express 

// const app = express();

// app.use(json());

// app.listen(3003, () => {
//     console.log('Hello World!');
// });


// app.get('/get', (request, response) => {
//     response.send('Gloria ao Sol');
// });

// app.post('/posts', (request, response) => {
//     let value1 = request.body.value1;
//     let value2 = request.body.value2;
//     let value3 = request.body.value3;
   
//     //response.send(`${value1}, ${value2}, ${value3}`);

//     let delta = (value2**2) - (4*(value1)*(value3));
//     let raiz_delta = ((delta)**0.5)/(2*value1);

//      //response.send(`${delta}, ${raiz_delta}`)
    
//     let raiz_um = - value2 + raiz_delta;
//     let raiz_dois = - value2 - raiz_delta;

//     response.send(`${raiz_um}, ${raiz_dois}`);
   
// });

// app.delete("/triangulo/:A/:B/:C", (request, response) => {
//     let A = request.params.A;
//     let B = request.params.B;
//     let C = request.params.C;


//     response.send(trianguloFormado(parseInt(A), parseInt(B), parseInt(C)));
//   });


// function trianguloFormado(A, B, C){
//     let aux1;

//     //organizando do maior lado para o menor

//     if(A>=C && A>=B && C>=B){aux1=B;B=C;C=aux1;}
//     if(B>=C && B>=A && C>=A){aux1=A;A=B;B=C;C=aux1;}
//     if(B>=A && B>=C && A>=C){aux1=A;A=B;B=aux1;}
//     if(C>=A && C>=B && A>=B){aux1=C;C=B;B=A;A=aux1;}
//     if(C>=B && C>=A && B>=A){aux1=A;A=C;C=aux1;}

//     //return `${A}, ${B+B}, ${C}`;

//     if(A >= (B + C)){return "Não forma Triângulo"}

//     else if ((A == B) && (B == C)){return "Triângulo Equilátero"}
    
//     else if((A==B || A==C || B==C) && (A!=B || A!=C || B!=C)){return "Triângulo Isosceles"}
    
//     else if((A != B) && (A != C) && (B != C)){return "Triângulo Escaleno"}

//     //else if((A*A) == ((B*B) + (C*C))){return "Triângulo Retângulo"}
                
//     //else if((A*A) > (B*B) + (C*C)){return "Triângulo Obstusângulo"}

//     //else if((A*A) < (B*B) + (C*C)){return "Triângulo Acutângulo"}
            
// }
