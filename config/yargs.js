const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Especifica el número base de la multiplicación'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Especifica hasta que valor quiere multiplicar'
    })
    .check( ( argv, options ) => {
        if ( isNaN( argv.b ) || isNaN( argv.h ) ) {
            throw 'Debe ingresar solo números';
        }
        return true;
    })
    .argv;

module.exports = argv;