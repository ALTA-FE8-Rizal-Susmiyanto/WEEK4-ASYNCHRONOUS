const listColors = ["green", "yellow", "blue", "orange", "red"]; 

function getRandomColor (arr) {
    let nomor = Math.floor(Math.random() * 8 ) 

    new Promise((resolve, reject) => {
        setTimeout(() => {
  

            if(nomor < arr.length) {
                resolve(arr[nomor]);
            } else reject ("failed to get color")

        }, 300)
    })
    // hasil dari resolve(nomor)
    .then((element) => console.log("ini warna "+ element))
    .catch((error) => console.log(error))
}

getRandomColor(listColors)