let usuarios = [
    {
        "id": 1,
        "raza": "Criollo",
        "nombre": "Pascual",
        "descripcion": "Pascual es muy cariñoso",
        "sexo": "macho",
        "estado": "perdido",
        "url": "https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg"


    },
    {
        "id": 4,
        "raza": "Criollo",
        "nombre": "Icaro",
        "descripcion": "Es un gatico cachorro que esta en la calle",
        "sexo": "Hembra",
        "estado": "perdido",
        "url": "http://static.consumer.es/www/imgs/2013/07/adoptar-gatos-cachorros-felinos-animales-mascotas-adopcion-acogida-art.jpg"

    },
    {
        "id": 3,
        "raza": "Criollo",
        "nombre": "Oreo",
        "descripcion": "Esta desnutrido",
        "sexo": "Macho",
        "estado": "perdido",
        "url": "https://www.zotal.com/wp-content/uploads/2019/08/razascaballos.png"
    },
    {
        "id": 2,
        "raza": "Criollo",
        "Correo": "jdjhd@jhdjhd.com",
        "nombre": "Sacha",
        "descripcion": "Tiene un ojo  herido",
        "sexo": "Macho",
        "estado": "perdido",
        "url": "https://images.hola.com/imagenes/mascotas/20221019219142/motivos-perros-se-contagian-ladrido-dn/1-152-558/motivos-perro-imita-ladrido-t.jpg?tx=w_744"
    },
    {
        "id": 5,
        "raza": "Criollo",
        "nombre": "Nica",
        "descripcion": "Es una gatica que acabo de dar a luz",
        "sexo": "hembra",
        "estado": "encontrado",
        "url": "https://ateuves.es/wp-content/uploads/2016/04/at0416_ciclo_sexual_gata_cabecera.jpg"
    },
    {
        "id": 6,
        "raza": "Criollo",
        "nombre": "Cantor",
        "descripcion": "Tiene una ala aproriada",
        "sexo": "hembra",
        "estado": "perdido",
        "url": "https://www.euroresidentes.com/hogar/mascotas/wp-content/uploads/sites/5/2014/07/como-curar-pajaro-herido-euroresidentes.jpg"

    },
    {
        "id": 7,
        "raza": "Criollo",
        "nombre": "scott",
        "descripcion": "Esta muy herido",
        "sexo": "Esta en belen cerca a la udem",
        "estado": "perdido",
        "url": "http://www.perrosdebusqueda.es/wp-content/uploads/2015/11/Zarpas-herido.jpg"
    },
    {
        "id": 8,
        "raza": "Criollo",
        "nombre": "Toby",
        "descripcion": "Para adopcion",
        "sexo": "Esta en belen cerca a la udem",
        "estado": "encontrado",
        "url": "https://www.animalesbog.gov.co/sites/default/files/noticias/imagenes/WhatsApp%20Image%202020-05-28%20at%2013.31.12.jpeg?slideshow=true&slideshowAuto=true&slideshowSpeed=4000&speed=350&transition=elastic"
    },
    {
        "id": 9,
        "raza": "Criollo",
        "nombre": "Sas",
        "descripcion": " para dar en adopcion",
        "sexo": "Esta en el barrio los colores",
        "estado": "encontrado",
        "url": "http://misanimales.com/wp-content/uploads/2015/01/cascabel-gato.jpg"
    },
    {
        "id": 10,
        "raza": "Criollo",
        "nombre": "NN",
        "descripcion": "Esta mal",
        "sexo": "lo vi por la canalizacion del estadio",
        "estado": "perdido",
        "url": "https://www.animalesbog.gov.co/sites/default/files/noticias/imagenes/WhatsApp%20Image%202020-05-28%20at%2013.31.11.jpeg"
    },
    {
        "id": 11,
        "raza": "Criollo",
        "nombre": "Boxer",
        "descripcion": "Se ve que tiene dueño esta muy bien ",
        "sexo": "Lo vi el jardin botanico por el lago",
        "estado": "encontrado",
        "url": "http://3.bp.blogspot.com/-XtqcDS3NACY/TyeEFEwPvKI/AAAAAAAAFA0/CPl8ilSKwCI/s200/Boxer+1.JPG"
    },
    {
        "id": 12,
        "raza": "Criollo",
        "nombre": "NN",
        "descripcion": "Lo dejaron en una caja",
        "sexo": "Esta en la estacion del metro floresta",
        "estado": "perdido",
        "url": "https://www.animalesbog.gov.co/sites/default/files/noticias/imagenes/WhatsApp%20Image%202020-05-28%20at%2013.31.13.jpeg"
    },
    {
        "id": 13,
        "raza": "Criollo",
        "nombre": "Toby",
        "descripcion": "Parece que tiene dueño por que esta muy bien ",
        "sexo": "lo vi  por el exito de robledo",
        "estado": "perdido",
        "url": "https://www.animalesbog.gov.co/sites/default/files/noticias/imagenes/WhatsApp%20Image%202020-05-28%20at%2013.31.16.jpeg"
    },
    {
        "id": 14,
        "raza": "Criollo",
        "nombre": "Tobias",
        "descripcion": "Para adopcion",
        "sexo": "en la perla",
        "estado": "perdido",
        "url": "https://www.animalesbog.gov.co/sites/default/files/noticias/imagenes/WhatsApp%20Image%202020-05-28%20at%2013.31.15.jpeg"
    },
    {
        "id": 15,
        "raza": "Criollo",
        "nombre": "sin nombre",
        "descripcion": "Para dar en adopcion",
        "sexo": "Esta en belen cerca al parque",
        "estado": "perdido",
        "url": "https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg"
    },
    {
        "id": 16,
        "raza": "Criollo",
        "nombre": "Kiko",
        "descripcion": "en adopcion",
        "sexo": "Estoy en bello",
        "estado": "perdido",
        "url": "http://i58.photobucket.com/albums/g254/big-T1/pitbull_pup11.jpg"
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