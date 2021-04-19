const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base, listar = false, hasta = 10 ) => {

    try {
    
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            const total = base * i;
            salida += `${ base } * ${ i } = ${ total }\n`;
            consola += `${ colors.green(base) } ${ '*'.magenta } ${ colors.cyan(i) } ${ '='.magenta } ${ colors.blue(total) }\n`;
        }
    
        if ( listar ) {
            console.log('======================'.red);
            console.log('     Tabla del:'.yellow, colors.cyan(base));
            console.log('======================'.red);
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}-hasta-${ hasta }.txt`, salida );
    
    
        return `El archivo de nombre "tabla-${base}-hasta-${ hasta }.txt" se creo correctamente`.rainbow;
        
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}