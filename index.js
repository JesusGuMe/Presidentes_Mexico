const presidentes = [
    "1970-1976 Luis Echeverría Álvarez",
    "1976-1982 José López Portillo y Pacheco",
    "1982-1988 Miguel de la Madrid Hurtado",
    "1988-1994 Carlos Salinas de Gortari",
    "1994-2000 Ernesto Zedillo Ponce de León",
    "2000-2006 Vicente Fox Quesada",
    "2006-2012 Felipe Calderón Hinojosa",
    "2012-2018 Enrique Peña Nieto",
    "2018-2024 Andrés Manuel López Obrador"
]

function obtienePresi() {
    let indice = Math.floor(Math.random() * 8)
    return presidentes[indice]
}

console.log(obtienePresi());

// console.log(module); npm login npm whoami npm publish
module.exports.obtienerPresi=obtienePresi();