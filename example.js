var karka = require('karka'),
    config = {
        'var1' : [
            {
                'is': 'bar',
                'when': {
                    'var1cond': 'yes'
                }
            }
        ],
        'var2': [
            {
                'is': 'yang',
                'when': {
                    'var2cond': 'no'
                }
            }

        ]
    },
    context = {
        'var1cond': 'yes',
        'var2cond': 'yes'
    },
    spcl  = karka.create(config),

    //mappedName = 'bar'
    mappedName = spcl.resolve('var2', context),

    //maps = {'foo': 'bar', 'ying': 'yang'}
    maps = spcl.resolveAll(context);

console.log('> config', config);
console.log('> context', context);
console.log('> spcl', spcl);
console.log('> mappedName', mappedName);
console.log('> maps', maps);