let add = (a,b) => {
    // return new Promise((res, rej) => {
    //     res(a+b)
    // })
    return Promise.resolve(a+b)
} 

// add(10,20)
// .then((result) => {
//     console.log(result);
// })


let resolveAdd = async () => {
    console.log(await add(10,20))
}

resolveAdd();