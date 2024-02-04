const promiseOne = new Promise(function (res, rej) {
    let value = true;

    if (value) {
        setTimeout(() => {
            res("Resolved")
        }, 1000)
    }
    setTimeout(() => {
        rej("Rejected")
    }, 2000)
});

async function myPromise() {
    try {
        const result = await promiseOne
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

myPromise();