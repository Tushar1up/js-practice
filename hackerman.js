let notes = ["initializing hack program", "hacking tanish username", "username found tanish17", "connecting to facebook"];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const asyncShower = async () => {
    for (let note of notes) {
        console.log(note);
        await delay(1000); // Wait for 1 second
    }
};

asyncShower();