// this is your main.js script


// let weather = 'rainy'
// switch (weather) {
//   case 'rainy':
//     console.log('You need a rain coat.')
//     break
//   case 'cloudy':
//     console.log('It might be cold, you need a jacket.')
//     break
//   case 'sunny':
//     console.log('Go out freely.')
//     break
//   default:
//     console.log(' No need for rain coat.')
// }

// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday')
//     break
//   case 'tuesday':
//     console.log('Today is Tuesday')
//     break
//   case 'wednesday':
//     console.log('Today is Wednesday')
//     break
//   case 'thursday':
//     console.log('Today is Thursday')
//     break
//   case 'friday':
//     console.log('Today is Friday')
//     break
//   case 'saturday':
//     console.log('Today is Saturday')
//     break
//   case 'sunday':
//     console.log('Today is Sunday')
//     break
//   default:
//     console.log('It is not a week day.')
// }

// let language = prompt("Enter your language: ")
// let word = language.toLocaleLowerCase();

// switch(word) {
//     case 'english':
//         console.log(`${language} is english`)
//         break
//     case 'korean':
//         console.log(`${language} is korean`)
//         break
//     default:
//         console.log('It is not a language')
// }

// Lam bai tap nhe

/**
 1. Write a code which  can give grades to students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
 */

let score = prompt("Enter the score: ")
 if (score >= 80 && score <= 100) {
        console.log(`Your score ${score} is A grade`)
    } else if (score >= 70 && score <= 89) {
        console.log(`Your score ${score} is B grade`)
    } else {
        console.log(`Your score ${score} does not have grade`)
    }