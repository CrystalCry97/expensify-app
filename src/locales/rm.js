import numeral from 'numeral';
 
numeral.register('locale', 'rm', {
    delimiters: {
        thousands: ' ',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function (number) {
        
    },
    currency: {
        symbol: 'RM'
    }
});