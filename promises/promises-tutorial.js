

// -----------++---------> t

const helloPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello from promise');
        // reject(new Error('hello error'));
    }, 1000);
});

// promise states:
// pending -> resolved
// pending -> rejected

// newPromise : Promise< Response | number>
const newPromise = helloPromise.then(
    // resolved
    (msg) => {
        return fetch('...')
    },

    //error
    (err) => {
        return 3452345
    }
).then((boolOrNumber) => {

})

async function hello() {
    await helloPromise;
}