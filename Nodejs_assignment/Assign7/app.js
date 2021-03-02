var strftime = require('strftime');
console.log(strftime('%B %d, %Y %H:%M:%S')) // %B=>full month Name,%d=>day of the month, padded to 2 digits (01-31)
console.log(strftime('%F %T', new Date())) //%F=>%Y-%m-%d  & %T=>%H:%M:%S

// var strftime = require('strftime') // not required in browsers
//     var it_IT = {
//         days: ['domenica', 'lunedi', 'martedi', 'mercoledi', 'giovedi', 'venerdi', 'sabato'],
//         shortDays: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
//         months: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
//         shortMonths: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
//         AM: 'AM',
//         PM: 'PM',
//         am: 'am',
//         pm: 'pm',
//         formats: {
//             D: '%m/%d/%y',
//             F: '%Y-%m-%d',
//             R: '%H:%M',
//             X: '%T',
//             c: '%a %b %d %X %Y',
//             r: '%I:%M:%S %p',
//             T: '%H:%M:%S',
//             v: '%e-%b-%Y',
//             x: '%D'
//         }
//     }
//     var strftime = strftime.localize()
//     console.log(strftime('%B %d, %Y %H:%M:%S')) // => aprile 28, 2011 18:21:08
//     console.log(strftime('%B %d, %Y %H:%M:%S', new Date())) ;