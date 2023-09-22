//// for loop

for (let index = 0; index <= 10; index++) {
    const element = index
    // console.log(element);
}


const arr1 = ["ironman", "superman", "marvel", "hello world"]
// console.log(arr1.length);
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    // console.log(element);
}

// // tables using for loop
for (let i = 1; i < 11; i++) {
    // console.log(`outher loop value: ${i}`);
    for (let j = 1; j < 11; j++) {
        // console.log(`${i} * ${j} = `, i*j);
    }
}


// // break and continue  keywords
// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is: ${i}`);
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`Value of i is: ${i}`);
}
