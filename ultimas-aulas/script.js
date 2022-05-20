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
const auth = firebase.auth()



//--------------------------------------------------------------------------
// -- ONSNAPSHOT (ATUALIZAÇÃO DE DADOS EM TEMPO REAL) --
// db.collection(turma).onSnapshot((snapshot) => {
//     snapshot.forEach((doc) => {
//         let aluno = doc.data()
//         console.log(aluno)
//     })
// })
//--------------------------------------------------------------------------





//--------------------------------------------------------------------------
// -- APAGANDO CAMPOS E DOCUMENTOS --
    //--> APAGANDO UMA INFORMAÇÃO APENAS:
    // db.collection(turma).doc("alunoNovo").update({
    //     sobrenome: firebase.firestore.FieldValue.delete()
    // },).then(()=> {
    //     console.log("documento deletado com sucesso: ")
    // }).catch(err => {
    //     console.log(err)
    // })
    //---------------------------------------------------
    //--> APAGANDO O DOCUMENTO INTEIRO:
    // db.collection(turma).doc("alunoNovo").delete().then(()=> {
    //         console.log("documento deletado com sucesso: ")
    //     }).catch(err => {
    //         console.log(err)
    //     })
//--------------------------------------------------------------------------





//--------------------------------------------------------------------------
// CRIANDO USUÁRIOS NO FIREBASE (AUTENTICAÇÃO)

// let newUserEmail = "novoteste@teste.com"
// let newUserPassword = "123abc"

// let auth = firebase.auth()

// auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(user => {
//     console.log(user)
// }).catch(error => {
//     console.log(error)
// })
//--------------------------------------------------------------------------






//--------------------------------------------------------------------------
// -- GERENCIANDO LOGINS --

// function criarUsuario() {
// let newUserEmail = "novoteste@teste.com"
// let newUserPassword = "123abc"

// auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(user => {
//     console.log(user)
// }).catch(error => {
//     console.log(error)
// })
// }

// function login() {

//     let UserEmail = "novoteste@teste.com"
//     let UserPassword = "123abc"

//     auth.signInWithEmailAndPassword(UserEmail, UserPassword)
//     .then(loggedUser => {
//         // console.log(auth.currentUser)
//     }).catch(error => {
//         console.log(error)
//     })
// }
// login()

// let user = auth.currentUser

// auth.onAuthStateChanged(user => {
//     if(user) {
//         console.log(user)
//     } else {
//         console.log("ninguém logado!")
//     }
// })

// function logout() {
//     auth.signOut().then(()=> {
//         console.log("usuario foi deslogado.")
//     }).catch(error=> {
//         console.log(error)
//     })
// }

// setTimeout(login, 2000)
//--------------------------------------------------------------------------






//--------------------------------------------------------------------------
// -- PERSISTENCIA DE DADOS
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
                                                //.LOCAL
                                                //.NONE     
    auth.signInWithEmailAndPassword(UserEmail, UserPassword)
    .then(loggedUser => {
        console.log(auth.currentUser)
    }).catch(error => {
        console.log(error)
    })
}).catch(error => {
    console.log(error)
})

auth.onAuthStateChanged(user => {
    if(user) {
        console.log(user)
    } else {
        console.log("ninguém logado!")
    }
})

function logout() {
    auth.signOut().then(()=> {
        console.log("usuario foi deslogado.")
    }).catch(error=> {
        console.log(error)
    })
}

// setTimeout(logout, 2000)
//--------------------------------------------------------------------------
