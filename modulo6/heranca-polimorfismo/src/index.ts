import express from "express";
import cors from "cors"
import { Request, Response } from "express";



// class User {
//     private id: string;
//     private email: string;
//     private name: string;
//     private password: string;
  
//     constructor(
//           id: string,
//           email: string,
//           name: string,
//           password: string
//       ){
//           console.log("Chamando o construtor da classe User")
//           this.id = id
//           this.email = email
//           this.name = name 
//           this.password = password
//       }
  
//       public getId(): string {
//           return this.id
//       }
  
//       public getEmail(): string {
//           return this.email
//       }
  
//       public getName(): string {
//           return this.name
//       }

//       public introduceYourself(): string {
//         return `Olá, meu nome é ${this.name}. Bom dia!`
//     }


//   }

//   const Claudio = new User(
//           "001",
//           "claudio@email.com",
//           "Claudio Sanchez",
//           "claudio123"
//   )

//   class Customer extends User {
//     public purchaseTotal: number = 0;
//     private creditCard: string;
  
//     constructor(
//       id: string,
//       email: string,
//       name: string,
//       password: string,
//       creditCard: string
//     ) {
//       super(id, email, name, password);
//       console.log("Chamando o construtor da classe Customer");
//       this.creditCard = creditCard;
//     }
  
//     public getCreditCard(): string {
//       return this.creditCard;
//     }
//   }

//   const Larissa = new Customer(
//     "002",
//     "lari@email.com",
//     "Larissa Duarte",
//     "laridu123",
//     "2365125796542357"
//   )


//     console.log(Claudio.getId())
//     console.log(Claudio.getName())
//     console.log(Claudio.getEmail())
//     console.log(Claudio.introduceYourself())

//     console.log(Larissa.getId())
//     console.log(Larissa.getName())
//     console.log(Larissa.getEmail())
//     console.log(Larissa.getCreditCard())
//     console.log(Larissa.introduceYourself())

// HERANÇA

// EXERCICIO 1
// a) Não pois não há método get para o atributo password. O que é bom para manter a segurança. 
// b) 1 vez.

// EXERCICIO 2
// a) 1 vez;
// b) 2 vezes, 1 para o primeiro user criado e outra por causa da nova estância da classe custumer que extende User.

// EXERCICIO 3
// a) Somente se houvesse um método get público para o atributo password.

// EXERCICIO 4
// console.log(Claudio.introduceYourself())
// console.log(Larissa.introduceYourself())

// EXERCICIO 5
// public introduceYourself(): string {
//     return `Olá, meu nome é ${this.name}. Bom dia!`
// }

// POLIMORFISMO

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

// EXERCICIO 1





// app.listen(3003, ()=> {
//     console.log("Servidor de pé")
// })