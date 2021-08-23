
// Función asincrona para leer los nombres de album desde endpoint de API, según url dada
const getAlbumsNames = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
    
};


//Funcion asincrona para listar solo los primeros 20 álbumes de la lista
const list20Albums = async (data) => {
    albumsList = await data;
    for(let i= 0; i < 20; i++){
        console.log(`Álbum ${albumsList[i].albumId}, id: ${albumsList[i].id}, título: ${albumsList[i].title}`);
    }
};

// FUnción que genera una promesa para devolver un mensaje
const messageSent = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Mensaje Enviado") }, 3000); ;
});

// Función IIFE asincrona que llama a las otras funciones 
const init = ( async () => {
    list20Albums(await getAlbumsNames());
    console.log(await messageSent);
})()



