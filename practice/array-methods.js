let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

// function firstLetter(names, letter) {
//     for (let i; names.lenght(), i++) {
//         if (names[i][0] === letter) {
//             return names[i];
//         }
//     }
// }
// let namesB = console.log(filter(names, "B"));

let namesB = names.filter(name => name.charAt(0) === "B");

let namesLengths = names.map((name) => name.length);

const averageLength = names.reduce((total, names) => total + name.length, 0) / names.length;