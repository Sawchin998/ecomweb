// pending 
// fullfilled/reject
// settlement
const login = () => {
    return new Promise((resolve, reject) => {
        // login check 
        let lg = true;
        // resolve();
    
    
        if(lg) {
            resolve(true);
        } else {
            reject("");
        }
    })
}


let addNumber = (a,b) => {
    let c = 0
    return new Promise((res, rej) => {
        if(b === 0){
            rej("Division by zero")
        } else {
            c = a/b;
            res(c);
        }
    })    
}


let is_loading = true;
// login()
//     .then((resolve_data) =>{
//         console.log("Resolve")
//         // redirect 
//     })
//     .catch((reject_data) => {
//         console.log("Reject")
//     })
//     .finally(() => {
//         is_loading = false;
//     })
    
const test = async () => {
    try{
        let result = await login();
        console.log(result);
    } catch(error) {

    } finally {

    }
}
test();