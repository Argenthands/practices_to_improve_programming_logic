
const isAnagram = (str1, str2) => {
    return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")? true : false;
}
console.log(isAnagram("Amor", "Roma"));
module.exports = { isAnagram };