function promise() {
    // Setup promise
    return new Promise((resolve) => {
        const shallPassed = 30;
        let randomTime = Math.ceil(Math.random() * 10);
        let time = randomTime * 100;
        let steps = Math.ceil(Math.random() * 10);
        let sebelum = 0;
        let sesudah = 0;
        let result = 0;

        // Set timeout
        setTimeout(() => {
            console.log("step ini membutuhkan", randomTime, "detik untuk menyelesaikannya")
            console.log("step ini mendapatkan", steps, "langkah")

            sesudah = steps + sebelum;
            
            
            

            console.log("sehingga langkahnya bertambah dari ", sebelum, "menjadi", result);

            result = sesudah + sebelum ;
            console.log("sehingga langkahnya bertambah dari ", sesudah, "menjadi", result);
             
            
            
            resolve("\n")
        }, time)

        // Reach the finish
        // if (shallPassed > 0) {
        //     resolve("Goodbye! you didn't passed this game because your step only ", ",because minimum step to pass this game is 30")
        // } else {
        //     resolve("Congratulations, you have passed this game! And your total step is",)
        // }

    })
}

(async () => {
    // Intro
    console.log("Let the game begin")

    // Looping function
    for (let i = 1; i <= 5; i++) {
        let value = await promise();
        console.log(value)
    }

})();