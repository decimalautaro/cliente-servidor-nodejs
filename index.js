const axios = require("axios");
const fs = require("fs").promises; // fs: file system
const path = require("path");

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character"); // con axios estamos haciendo una peticion get al servidor a la url mencionada
  let {
    data: { results },
  } = response;
  let characters = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    })
    let encabezado = Object.keys(characters[0]).join(',')
    let personajes = characters
    .map((personaje) => Object.values(personaje).join(","))
    .join("\n");

  await fs.writeFile(path.join(__dirname, "data.csv"), encabezado + '\n' + personajes); // aca estamos generando el archivo csv

  //     console.log(path.join(__dirname, 'data.csv'));   //__dirname  es una variable local que esta disponible en node. devuelve el path en donde nos encontramos (la carpeta donde estamos parados)
 // lo que hace ahi es decir donde se genere el archivo csv

   console.log( encabezado + '\n' + personajes);
};

main();
