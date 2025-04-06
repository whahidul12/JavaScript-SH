const myPromise = new Promise((res, rej) => {
    (() => {
        console.log("inner pronise")
    })()
    setTimeout(() => {
        console.log("settimeout")
        res()
    }, 3000);
})

myPromise.then(() => {
    console.log("outter promise");

})