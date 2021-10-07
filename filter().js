//array তে কোনো একটি উপাদান আছে কী'না তা খুঁজে নিয়ে আসতে filter() method ব্যবহার করা হয় 

const crushGirl = ["M", "R", "P", "M", "B", "J", "S", "E"];
const luckyGirl = crushGirl.filter(element => element === "M");
console.log(luckyGirl)