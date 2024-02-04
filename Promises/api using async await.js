async function getData() {
    try {
        const response = await fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole');
        const list = await response.json()
        displayName(list);

    } catch (error) {
        console.log(error);
    }
}
getData();



function displayName(person) {
for (let i = 0; i < 10; i++) {
        console.log(person[i].first)
    }

}