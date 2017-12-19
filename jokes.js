import axios from 'axios';

// module.exports = {
//     getOne: function () {
//         return new Promise((resolve, reject) => {
//             fetch('https://api.icndb.com/jokes/random')
//             .then((res) => res.json())
//             .then((data) => {
//                 //return data;
//                 resolve(data.value.joke);
//             })
//         });
//     }
// }

//ES-2015 //Either Way
// export const jokes = {
//     getOne: function () {
//         return new Promise((resolve, reject) => {
//             fetch('https://api.icndb.com/jokes/random')
//             .then((res) => res.json())
//             .then((data) => {
//                 //return data;
//                 resolve(data.value.joke);
//             })
//         });
//     }
// }

// Axios
export const jokes = {
    getOne: function () {
        return new Promise((resolve, reject) => {
            axios.get('https://api.icndb.com/jokes/random')
            .then((res) => {
                resolve(res.data.value.joke);
            })
        })
    }
}
