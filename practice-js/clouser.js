const doSomething = () => {
    console.log("I am inside DoSomething");

    // redirect 
    const doNothing = () =>{
        console.log("I am inside DoNothing");
    }

    // doNothing()
    return doNothing
}

let result = doSomething();

result();
// doNothing();