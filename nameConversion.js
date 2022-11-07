let s = document.querySelector("#text");

function main(){

        document.getElementById("camel-case").innerHTML = camel().charAt(0).toLowerCase()+ camel().slice(1);
        document.getElementById("pascal-case").innerHTML = pascal();
        document.getElementById("snake-case").innerHTML = snake();
        document.getElementById("screaming-snake-case").innerHTML = screamsnake();
        document.getElementById("kebab-case").innerHTML = kebab();
        document.getElementById("screaming-kebab-case").innerHTML = screamkebab();
    
}
function camel(){
    let str = document.querySelector("#text").value;
    return str.toLowerCase().split(" ").map((a) => a.trim()).map((a) => a[0].toUpperCase() + a.substring(1)).join("");
}
function pascal(){
    let str = document.querySelector("#text").value;
    return str.split(" ").map((a)=> a[0].toUpperCase()+ a.substring(1)).join("");
}
function snake(){
    let str = document.querySelector("#text").value;
    return str.split(" ").map((a)=> a[0].toLowerCase()+ a.substring(1)).join("_");
}
function screamsnake(){
    let str = document.querySelector("#text").value;
    return str.toUpperCase().split(" ").map((a)=> a[0].toUpperCase()+ a.substring(1)).join("_");
}

function kebab(){
    let str = document.querySelector("#text").value;
    return str.toLowerCase().split(" ").map((a)=> a[0].toLowerCase()+ a.substring(1)).join("-");
}

function screamkebab(){
    let str = document.querySelector("#text").value;
    return str.toUpperCase().split(" ").map((a)=> a[0].toUpperCase()+ a.substring(1)).join("-");
}





document.querySelector("#convert-btn").addEventListener("click",main);




// camle case 
// function camel(s){
    
//     var capital = () =>s[0].toUpperCase() + s.slice(1);
    
//     let ar = s.split(" ").map(capital);
   
//     let fin = ar.join("");
//     return fin;
 
    
// }

// console.log(fin);

// // pascal 
// let capitalword = (str) =>str[0].toUpperCase() + str.slice(1);
// let arr = s.split(' ').map(capitalword);
// let pascal = arr.join("");


// // snake
// let capitalsnake = (str) =>str[0].toLowerCase() + str.slice(1);
// let arrsnake = s.split(' ').map(capitalsnake);

// let pascalsnake = arrsnake.join("-");
// // console.log(pascalsnake);


// // screaming snake case 
// let capitalscreamsnake = (str) =>str.toUpperCase() ;
// let arrscreamsnake = s.split(' ').map(capitalscreamsnake);

// let screamsnake = arrscreamsnake.join("-");
// // console.log(screamsnake);

// // kebab case ;
// let kebabcapital = (str) =>str[0].toLowerCase() + str.slice(1);
// let arrkebab = s.split(' ').map(kebabcapital);

// let kebab = arrkebab.join("-");
// // console.log(kebab);

// // scream kebab case 
// let screamkebabcapital = (str) =>str.toUpperCase();
// let arrscreamkebab = s.split(' ').map(screamkebabcapital);

// let screamkebab = arrscreamkebab.join("-");
// console.log(screamkebab);



























// function main(){
   
//     function pascal(){
//         document.querySelector("#pascal-case").innerText = one; 
//     }
//     function snake(){
//         document.querySelector("#snake-case").innerText = one; 
//     }
//     function Screamingsnake(){
//         document.querySelector("#screaming-snake-case").innerText = one; 
//     }
//     function kebab(){
//         document.querySelector("#kebab-case").innerText = one; 
//     }
//     function Screamingkebab(){
//         document.querySelector("#screaming-kebab-case").innerText = one; 
//     }
    

// }



