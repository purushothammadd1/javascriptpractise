var product =[
    {
        brand:"Apple",
        model:"Iphone 13 pro",
        price:115000,
        // reviews:[{},{},{}]
    },
    {
        brand:"vivo",
        model:"vivo a21",
        price:12000,
    },
    {
        brand:"samsung",
        model:"samsung Galaxy nord",
        price:70000,
    },
    {
        brand:"Apple",
        model:"Iphone 11 pro max",
        price:94000,
    },
    {
        brand:"oppo",
        model:"oppo 13",
        price:24000,
    },
];
var a=4;
switch(product[a].brand){
    case "Apple":
        console.log(product[0])
        console.log(product[3])
        break;

    case "vivo" :
        console.log(product[1])
        break;
    case "samsung" :
        console.log(product[2])
        break;
    case "oppo" :
        console.log(product[4])
        break;
    default:
        console.log("No case is Matched")
}
