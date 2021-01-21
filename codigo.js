//Nivell 1

/*Exercici1
Crea un array amb el teu nom on cada posició correspongui a una lletra.
*/
function NivelUnoEjercicioUno() {
    console.log("Nivel 1 - Ejercicio 1")
    let miNombre = ['E', 'R', 'I', 'C'];
    // Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres.
    var i;
    for (i = 0; i < miNombre.length; i++) {
        console.log(miNombre[i]);
    }
}

/*Exercici2
Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, 
imprimeix: ‘He trobat la CONSONTANT: __’.
Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número: __’
*/
function NivelUnoEjercicioDos() {
    console.log(" ");
    console.log("Nivel 1 - Ejercicio 2")

    let miNombre2 = ['E', 'R', '7', 'I', 'C'];
    console.log("Partim del nom " + miNombre2.join(""));

    //Comprobamos si en cada letra encuentra una vocal, un número o una consonante.
    for (i = 0; i < miNombre2.length; i++) {

        if (miNombre2[i].toString().match(/[aeiou]/gi)) {
            console.log("He trobat la VOCAL: " + miNombre2[i]);
        } else if (miNombre2[i].toString().match(/[0-9]/gi)) {
            console.log("Els noms de persones no contenen el número: " + miNombre2[i]);
        } else if (miNombre2[i].toString().match(/[A-Za-z]/gi)) {
            console.log("He trobat la CONSONANT: " + miNombre2[i]);
        }

    }
}

/*Exercici3
Emmagatzemar en un Map les lletres de l'array y el nombre de vegades que apareixen.
*/
function NivelUnoEjercicioTres() {
    let miNombre3 = ['E', 'E', 'R', 'I', 'C', 'C'];

    let map3 = new Map();

    miNombre3.forEach(letter => {
        if (map3.has(letter)) {
            let letterCount = map3.get(letter);
            map3.set(letter, letterCount + 1);
        } else {
            map3.set(letter, 1);
        }
    })
    console.log(" ");
    console.log("Nivel 1 - Ejercicio 3")

    console.log("Partim del nom " + miNombre3);
    console.log(map3);
}

/*Exercici4
Crea una altra array amb el teu cognom on cada posició correspongui a una lletra.
Fusiona els dos arrays en un. A més, afegeix una posició amb un espai buit entre la primera
i la segona. És a dir, partim de 'array name i surname i al acabar l’execució només tindrem
una que es dirà fullName.
*/
function NivelUnoEjercicioCuatro() {
    let miNombre = ['E', 'R', 'I', 'C'];
    let miApellido = ['G', 'A', 'R', 'C', 'I', 'A'];

    let fullName = [];

    console.log(" ");
    console.log("Nivel 1 - Ejercicio 4")
    //Concatenamos el Array con el nombre añadiendo un espacio y el Array con el apellido.
    console.log(fullName = miNombre.concat(" ", miApellido));
}

/*Nivel 2

Exercici 1
Crea una funció que retorni un array amb tots els email (sense repetir) del següent text:
*/

let str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos ' +
    'electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le ' +
    'envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez ' +
    'en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las ' +
    'direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de ' +
    'correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio ' +
    'detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el ' +
    ' cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información' +
    ' varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o ' +
    'gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado ' +
    'su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo ' +
    'electrónico que configura para el dominio lo tienen como parte del dominio ' +
    '(nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). ' +
    'El nombre de usuario es la parte de una dirección de correo electrónico quepuede seleccionar ' +
    'libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre ' +
    'o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de ' +
    'correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ' +
    'ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su ' +
    'dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican ' +
    'porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio ' +
    'dominio. En resumen, nombre-de-usuario@ionos.es es un email';

function extraerEmail(str) {

    /*Filtramos para encontrar correos electrónicos teniendo en cuenta los parámetros comunes que
    componen un correo electrónico y además, tenemos en cuenta las letras del diccionario español
    como la "ñ".
    */
    let emailsEncontrados = str.match(/([a-zA-ZÀ-ÿ0-9._-]+@[a-zA-ZÀ-ÿ0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

    /*Ponemos todas las letras en minúsculas para evitar confusiones cuando encuentre un mismo correo
    escrito en mayúsculas o minúsculas
    */
    emailsEncontrados = emailsEncontrados.map(function (x) { return x.toLowerCase(); })

    //Quitamos los correos electrónicos duplicados y devolvemos el Array con los correos encontrados
    let emailsUnicos = emailsEncontrados.filter((a, b) => emailsEncontrados.indexOf(a) === b)

    console.log(" ");
    console.log("Nivel 2 - Ejercicio 1")
    console.log(emailsUnicos);
}

