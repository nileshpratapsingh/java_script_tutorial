import promptSync from 'prompt-sync';
const prompt = promptSync();

async function hackerMan(hack) {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("initializing hack program.....");
            resolve();
        }, 3000);
    });

    await new Promise((resolved)=>{
        setTimeout(() => {
            console.log("hacking facebook account....");
            resolved();
        }, 4000);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("hacking Username.....");
            resolve();
        }, 3000);
    });

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Hacked: ${hack}`);
            resolve();
        }, 1000);
    });
}

// Example usage:
const account = prompt("Enter the account handle to hack=>");

hackerMan(account);