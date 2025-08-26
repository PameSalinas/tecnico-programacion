// Usando callbacks
// function getUsers(callback) {
//     try {
//         callback(null, ["Daniel", "Natanael", "Juan", "Pablo"]);
//     } catch (err) {
//         callback(err, null)
//     }
// }

// getUsers((err, users) => {
//     if (err) {
//         throw new Error('Error al obtener los usuarios')
//     }
//     users.forEach((user) => console.log(user));
// });

// Usando Promises
// function getUsers() {
//     return new Promise((resolve, reject) => {
//         try {
//             resolve(["Daniel", "Natanael", "Juan", "Pablo"])
//         } catch (err) {
//             reject(err)
//         }
//     })
// }

// getUsers()
//     .then((users) => {
//         users.forEach(user => console.log(user))
//     })
//     .catch(err => console.error(err))

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         try {
//             resolve(["Daniel", "Natanael", "Juan", "Pablo"])
//         } catch (err) {
//             reject(err)
//         }
//     })
// }

// async function main() {
//     const users = await getUsers()
//     console.log(users)
// }

// main()
