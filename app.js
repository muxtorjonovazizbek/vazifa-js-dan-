// 43.  Berilgan qatorni sozlash uchun faqat raqamlar
//  va harflarni saqlab, boshqa barcha belgilarni olib tashlang.

// function sanitizeString(str) {
//     return str.replace(/[@!#]/g, '')
  
// }

// console.log(sanitizeString("he@llo! w0rld#")); // "hello0rld"



// 44. Berilgan massiv ichidagi musbat va manfiy sonlarni alohida massivlarga ajratib, natijani obyekt sifatida qaytaring.

// function separatePositivesAndNegatives(arr) {
//     let posotive = []
//     let negative = []
//     arr.forEach(element => {
//         if (element > 0) {
//             posotive.push(element)
//         }else {
//             negative.push(element)
//         } 

//     });
//     let obj = {posotive,negative}
//     return obj
//  }
 
//  console.log(separatePositivesAndNegatives([1, -2, 3, -4, 5])); 
 // { positives: [1, 3, 5], negatives: [-2, -4] }



// 45. Berilgan massiv ichida faqat bir marta uchraydigan birinchi elementni toping.

// function firstUniqueElement(arr) {
//     let uniqueNumFound = arr.filter(val => arr.indexOf(val) == arr.lastIndexOf(val))
//     console.log(uniqueNumFound.join()); 
//  }
 
//  console.log(firstUniqueElement([2, 3, 4, 2, 3, 5, 4])); // 5



//  46. Berilgan massiv ichidagi har bir elementning takrorlanish sonini qaytaruvchi obyektni yarating.

// function elementCounts(arr) {
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         let count = 1
//        for (let g = 0; g < arr.length; g++) {
//         if (arr[i] == arr[g]) {
//             obj[arr[i]] = count
//             count++
            
//         }
//        }
//     }
//     console.log(obj);
// }

// console.log(elementCounts([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));


// 47. Berilgan massiv ichida k indeksdagi elementni oxirgi indeksdagi element bilan almashtiring.

// function swapElements(arr, k) {
//     let lastElement = arr.pop()
//     arr.push(...arr.splice(k,1,lastElement))
//     return arr
// }

// console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]
