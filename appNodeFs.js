/*Usando File System 
concatenar
//'Nombre de Usuario: ' + userName
// Template String
// ` :alt+96 */

const fs = require('fs');

const userName = '  Simba';


fs.writeFile('test.data.txt', ` Nombre de Usuario: ${userName}` , (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Archivo creado satisfactoriamente');
});
