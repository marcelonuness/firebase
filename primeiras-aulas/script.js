const firebaseConfig = {
    apiKey: "AIzaSyD19omghwuZwDGQFHObP90RTFaWqeVssUQ",
    authDomain: "colegio-82566.firebaseapp.com",
    projectId: "colegio-82566",
    storageBucket: "colegio-82566.appspot.com",
    messagingSenderId: "1014841604646",
    appId: "1:1014841604646:web:4b9339fb28130a83db84e7",
    measurementId: "G-G05X6N378V"
  };
const turma = "turmaA"


firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

//--------------------------------------------------------------------------
//-- LER TODOS OS DADOS DE UMA COLEÇÃO --
// db.collection("turmaA").get().then((snapshot)=>{
//     snapshot.forEach(doc => {
//         let aluno = doc.data()
//         console.log(aluno.nome)
//     });
// })




//--------------------------------------------------------------------------

//-- LENDO UM DADO ESPECÍFICO --
// let docRef = db.collection("turmaA").doc("turmaAldaiejf")
// docRef.get().then((doc)=>{
//     console.log(doc.data())
// })

// db.collection("turmaA").where("nome", "==", "lana").get().then((snapshot)=>{
//     snapshot.forEach(doc => {
//         let aluno = doc.data()
//         console.log(aluno)
//     });
// })
//--------------------------------------------------------------------------





//--------------------------------------------------------------------------

// -- ADICIONANDO UM DOCUMENTO AO BANCO DE DADOS VIA JS --
// db.collection(turma).add({
//     nome: "marcos",
//     notas: {
//         nota1: 9.6,
//         nota2: 8
//     },
//     sobrenome: "almeida"
// }).then((doc)=> {
//     console.log("documento inserido com sucesso: ", doc)
// }).catch(err => {
//     console.log(err)
// })

//--------------------------------------------------------------------------





//--------------------------------------------------------------------------

// -- ADICIONANDO UM ID PERSONALIZADO VIA JS --
// db.collection(turma).doc("alunoNovo").set({
//     idade: 16
// },).then(()=> {
//     console.log("documento inserido com sucesso: ")
// }).catch(err => {
//     console.log(err)
// })

//--------------------------------------------------------------------------





//--------------------------------------------------------------------------

// -- ATUALIZANDO UM DADO VIA JS --
db.collection(turma).doc("alunoNovo").update({
    
    //att um objeto
    "notas.nota1": 9,
    faltas: 1,
    sobrenome: "nunes",

    //add um dado a um array
    cidades: firebase.firestore.FieldValue.arrayUnion("Belo Horizonte"),
    faltas: firebase.firestore.FieldValue.increment(4),
    //removendo um dado de um array
    cidades: firebase.firestore.FieldValue.arrayRemove("Belo Horizonte")

},).then(()=> {
    console.log("documento inserido com sucesso: ")
}).catch(err => {
    console.log(err)
})
//--------------------------------------------------------------------------
