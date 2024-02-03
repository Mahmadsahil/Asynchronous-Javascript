const apiData = fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole');
const promiseOne = new Promise(function (resolve, reject) {
    let value = true;
    let errorMassage = "Something went wrong!"
    if (value) {
        return resolve(apiData);
    } else {
        return reject(errorMassage)
    }

})
    .then(function (data) {
        console.log(data);
    })
    .catch(function (data) {
        console.log(data);
    })
    .then(function(data){
        console.log("Promise either Resolved or Rejected");
    })