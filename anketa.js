let me = {
    name : "Kirill",
    age : 15,
}

let socialNetworks = {
    instagram: "kirill.honcharov",
    telegram: "kirillh0ncharov",
    email: "kirill2021honc@gmail.com"
}

for (key in socialNetworks) {
    me[key] = socialNetworks[key]
}
console.log(me);


