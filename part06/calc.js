function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

export {add,subtract}
// here instead of single export line which is applicable to all 

// can give to individual as below
// export function add(a,b) {
//     return a+b
// }

// export function subtract(a,b) {
//     return a-b
// }