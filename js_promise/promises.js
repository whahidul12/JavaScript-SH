const myPromise = new Promise((res, rej) => {
    (() => {
        console.log("inner pronise")
    })()
    setTimeout(() => {
        const err = true
        if (!err) {
            res("everything is okay!!!")
        } else {
            rej("something is worng")
        }
    }, 3000);
})

// myPromise.then((e) => {
//     console.log("promise:", e);
// }).catch((e) => {
//     console.log(e);
// }).finally(() => {
//     count = 1 + 11;
//     console.log(">>>", count);
// })

async function myAsycAwit() {
    try {
        const response = await myPromise
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

myAsycAwit()

async function anotherAysc() {
    try {
        const response = await fetch("https://api.github.com/users/whahidul12")
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

anotherAysc()