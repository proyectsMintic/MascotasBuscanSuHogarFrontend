let usuarios = [
    {
      "id": 1,
      "Tipo": "Perro",
      "Nombre": "Pascual",
      "Descripcion": "Pascual es muy cariñoso",
      "Sexo": "macho",
      "Rasgos": "Tiene el pelo cafe  , ademas tiene una patica mala",
      "Imagen": "https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg"
  
  
  },
  {
      "id": 4,
      "Tipo": "Gato",
      "Nombre": "Icaro",
      "Descripcion": "Es un gatico cachorro que esta en la calle",
      "Sexo": "Hembra",
      "Rasgos": "Es pequeño  y el pelo lo tiene negro",
      "Imagen": "http://static.consumer.es/www/imgs/2013/07/adoptar-gatos-cachorros-felinos-animales-mascotas-adopcion-acogida-art.jpg"
  
  }, 
  {
      "id": 3,
      "Tipo": "Caballo",
      "Nombre": "Oreo",
      "Descripcion": "Esta desnutrido",
      "Sexo": "Macho",
      "Rasgos": "Negro con muestras de maltrato y desnutrición",
      "Imagen": "https://d.img.vision/imagen/oreo.jpg"
  }, 
  {
      "id": 2,
      "Tipo": "Perro",
      "Correo":"jdjhd@jhdjhd.com",
      "Nombre": "Sacha",
      "Descripcion": "Tiene un ojo  herido",
      "Sexo": "Macho",
      "Rasgos": "Es un perro criollo y tiene un ojo spr herido",
      "Imagen": "https://d.img.vision/imagen/sasha.jpg"
  },
    {
      "id": 5,
      "Tipo": "Gato",
      "Nombre": "Nica",
      "Descripcion": "Es una gatica que acabo de dar a luz",
      "Sexo": "hembra",
      "Rasgos": "Es una gata blanca y tiene 6 gaticos cachorros",
      "Imagen": "https://d.img.vision/imagen/gatamam_.jpg"
  
  
  },
  {
      "id": 6,
      "Tipo": "Pajaro",
      "Nombre": "Cantor",
      "Descripcion": "Tiene una ala aproriada",
      "Sexo": "hembra",
      "Rasgos": "Es un pechi rojo",
      "Imagen": "https://www.euroresidentes.com/hogar/mascotas/wp-content/uploads/sites/5/2014/07/como-curar-pajaro-herido-euroresidentes.jpg"
  
  }, 
  {
      "id": 7,
      "Tipo": "Perro",
      "Nombre": "scott",
      "Descripcion": "Esta muy herido",
      "Sexo": "Esta en belen cerca a la udem",
      "Rasgos": "Tes un labrador  viejito colo cafe ",
      "Imagen": "http://www.perrosdebusqueda.es/wp-content/uploads/2015/11/Zarpas-herido.jpg"
  }, 
  {
      "id": 8,
      "Tipo": "Perro",
      "Nombre": "Toby",
      "Descripcion": "Para adopcion",
      "Sexo": "Esta en belen cerca a la udem",
      "Rasgos": "Tiene el pelo cafe  , ademas tiene una patica mala",
      "Imagen": "https://d.img.vision/imagen/perropataherida.jpg"
  },
  {
      "id": 9,
      "Tipo": "Gato",
      "Nombre": "Sas",
      "Descripcion": " para dar en adopcion",
      "Sexo": "Esta en el barrio los colores",
      "Rasgos": "Tiene el cabello gris con blanco ",
      "Imagen": "http://misanimales.com/wp-content/uploads/2015/01/cascabel-gato.jpg"
  },
  {
      "id": 10,
      "Tipo": "Gato",
      "Nombre": "NN",
      "Descripcion": "Esta mal",
      "Sexo": "lo vi por la canalizacion del estadio",
      "Rasgos": "Tiene el pelo cafe  con blanco , ademas tiene una patica mala",
      "Imagen": "https://d.img.vision/imagen/perrocafeblanco.jpg"
  },
  {
      "id":11,
      "Tipo": "Perro",
      "Nombre": "Boxer",
      "Descripcion": "Se ve que tiene dueño esta muy bien ",
      "Sexo": "Lo vi el jardin botanico por el lago",
      "Rasgos": "Es cafe con blanco",
      "Imagen": "http://3.bp.blogspot.com/-XtqcDS3NACY/TyeEFEwPvKI/AAAAAAAAFA0/CPl8ilSKwCI/s200/Boxer+1.JPG"
  },
  {
      "id": 12,
      "Tipo": "gato",
      "Nombre": "NN",
      "Descripcion": "Lo dejaron en una caja",
      "Sexo": "Esta en la estacion del metro floresta",
      "Rasgos": "Tiene el pelo cafe con negro y ya esta algo  viejito",
      "Imagen": "https://d.img.vision/imagen/download.jpg"
  },
  {
      "id": 13,
      "Tipo": "Perro",
      "Nombre": "Toby",
      "Descripcion": "Parece que tiene dueño por que esta muy bien ",
      "Sexo": "lo vi  por el exito de robledo",
      "Rasgos": "Es un perro criollo de color cafe de raza media",
      "Imagen": "https://d.img.vision/imagen/perrocriollo.jpg"
  },
  {
      "id": 14,
      "Tipo": "Gato",
      "Nombre": "Tobias",
      "Descripcion": "Para adopcion",
      "Sexo": "en la perla",
      "Rasgos": "Es un cachorro",
      "Imagen": "http://g.cdn.ecn.cl/fenomenos-paranormales/files/2015/07/gatos-adivinos.jpg"
  },
  {
      "id": 15,
      "Tipo": "Gato",
      "Nombre": "sin nombre",
      "Descripcion": "Para dar en adopcion",
      "Sexo": "Esta en belen cerca al parque",
      "Rasgos": "Tiene apenas un mes de nacido",
      "Imagen": "https://d.img.vision/imagen/gatoreciennacido.jpg"
  },
  {
      "id": 16,
      "Tipo": "Perro",
      "Nombre": "Kiko",
      "Descripcion": "en adopcion",
      "Sexo": "Estoy en bello",
      "Rasgos": "Perro pitbull",
      "Imagen": "http://i58.photobucket.com/albums/g254/big-T1/pitbull_pup11.jpg"
  }
  
  ];

function getData(url, headers, httpMethod, data) {
    return usuarios;
}

function getUsuario(id) {
    let result = {};
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id == id) {
            result = usuarios[i];
            break;
        }
    }
    return result;
}

export default getData;