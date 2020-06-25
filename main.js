function banner( num){
 console.log(`######### challenge ${num} #########`);   
}

// function onlyVowels(str){
// let i = 0 ;
//     while (i<str.length){
//         if(str[i].includes('a')){
//         console.log(str[i])
//         }else if(str[i].includes('e')){
//             console.log(str[i])  
//         }else if(str[i].includes('i')){
//                 console.log(str[i])
//         }else if(str[i].includes('o')){
//                 console.log(str[i])
//         }else if(str[i].includes('u')){
//                 console.log(str[i])
//         // our result === str length..then get off the loop
//         } else if(i === str.length){
//             break
//         // if not continuing increase the indices and go to while loop..'continue' makes that happen
//         } else {
//                i++;
//                continue;
//               }
//         // if any of the above 'if'(not else) condition is true, the below line will work to increase the value of i     
//         //u might think the above i++ will replace the below code..but it won't
//         i++;
//     }
// }

//1
function onlyVowels(str){
    const vowels = 'aeiou';
    let n = 0;
    while(n<str.length){
        if(vowels.includes(str[n])){
            console.log(str[n])
        }n++;
    }
}

//2
// function firstFiveVowels(str){
//     let i = 0;
//     let j = 0;
//     while(i < str.length){
//         if ( j < 5){
//             if(str[i].includes('a')){
//                 console.log(str[i])
//                 j++;
//                 }else if(str[i].includes('e')){
//                     console.log(str[i])
//                     j++;
//                 }else if(str[i].includes('i')){
//                         console.log(str[i]);
//                         j++;
//                 }else if(str[i].includes('a')){
//                          console.log(str[i]);
//                          j++;
//                 }else if(str[i].includes('o')){
//                         console.log(str[i]);
//                         j++;
//                 }else if(str[i].includes('u')){
//                         console.log(str[i]);
//                         j++;
//                 } else if(i === str.length){
//                     break
//                 } else {
//                        i++;
//                        continue;
//                       }
//                 i++; 
//         } else {
//             break;
//         }
//     }
// }

//2
function firstFiveVowels(str){
    const vowels = 'aeiou';
    let n = 0;
    let j = 0;
    while (n < str.length && j < 5){
        if (vowels.includes(str[n])){
            console.log(str[n])
            j++;
        }
        n++;
    }
}


//3
function everyThirdChar(str){
    let length = str.length-1;
    let i=2;
    while(i < length){
        console.log(str[i])
        i+=3;
    }
}
//4
function firstFourChar(str, num){
    let i=0;
    while(num < str.length){
        if (i < 4){
            console.log(str[num])
            num++;
            i++;
        } else {
            break;
        }
    }
}
//5
function indexOfEveryU(str){
    let n=0;
    while(n < str.length){
    if(str[n].includes('u')){
        console.log(n)
    } 
    // else {
        n++;
    // }
}
}
//6
function firstIndexOfLetterU(str){
    let n=0;
    while(n < str.length){
        if(str[n].includes('u')){
            console.log(n);
            break;
        } 
            n++;
    }
}
//7
function firstIndexOfLetterUInGivenString(str){
    let n= 0;
    let i=0;
    while(n < str.length){
        if(str[n].includes('u')){
            console.log(n);
            i++;
            break;
        } 
        n++;
    }
    if (i===0){
        console.log(-1);
    }
}

banner(1);
onlyVowels('Regular expressions are for term 2');//1
banner(2)
firstFiveVowels('Regular expressions are for term 2');//2
banner(2)
firstFiveVowels('hello');
banner(3);
everyThirdChar("I am the alfalfa and the omelette.");
banner(4);
firstFourChar(`Oh hi, I didn't see you there. Welcome.`, 36);
banner(5);
indexOfEveryU('You picked the wrong house, bub.');
banner(6);
firstIndexOfLetterU('You picked the wrong house, bub.');
banner(7);
firstIndexOfLetterUInGivenString('You picked the wrong house, bub.');
banner(7);
firstIndexOfLetterUInGivenString(`i'm canadian`);
