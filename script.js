"use strict"
// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   დაბეჭდეთ მასივისი ახალი ელემენტები.

let firstMassive = [ 5, 25, 89, 120];
firstMassive.push("javascript", "phyton");
firstMassive.unshift("html", "css");
console.log(firstMassive.length);
firstMassive.shift();
firstMassive.pop();
firstMassive.splice(1, 0 , " c#", "java");
console.log(firstMassive);

//  შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let fruit = [ "ფორთოხალი", "ბანანი" , "მსხალი"] ;
console.log(fruit.length);
fruit.push("ვაშლი", "ანანასი");
fruit.unshift ("საზამთრო");
console.log(fruit.length);
fruit.splice(2,0, "მანგო");
fruit.shift();
fruit.pop();
console.log(fruit);
console.log(fruit.length);


// მოცემულია მასივი let array =[1, 2, 3, 4, 5]. 
//Splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

let array =[1, 2, 3, 4, 5];
array.splice(3, 0,"a","b","c");
console.log(array);



// დაწერეთ ფუნქცია, რომელსაც პარამეტრად გადაეცემა ორი რიცხვი(ნებისმიერი ჩაწერეთ
//) და რომელიც შეასრულებს შემდეგ ლოგიკას:
// თუ პირველი რიცხვი მეტია მეორეზე დაიბეჭდოს - num1 is the largest;
// თუ მეორე რიცხვი მეტია პირველზე - დაიბეჭდოს num2 is the largest;
// ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - error; 

function rendom(x,y){
   if (x > y) {
    console.log("num1 is the largest");
   }else if (x < y){
    console.log("num2 is the largest");
   } else {
    console.log("error");
   }
}

console.log(rendom(32,5));

// 7.  მოცემულია მასივი:
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array 
//მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი
// // 
let arrayy = [12, 25, 3, 6, 8, 14, 7, 23];
let newArr = arrayy.map(function(arrayy){
    return arrayy / 3;
});
console.log(newArr);


// 9. მოცემულია მასივი:
let arrayko = [2,15,10,24];

 let newKo = arrayko.splice(2,1);


console.log(arrayko);

//წაშალეთ ამ
// მასივიდან რიცხვი 10;











