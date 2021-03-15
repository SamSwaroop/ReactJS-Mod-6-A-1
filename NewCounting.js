function count(f,h){
    var count=0
    const e=f.split("")
    for(let i=0;i<e.length;i++){
        if(e[i]===h){
            count=count+1

        }
    }
    console.log("the count of given character in the string is " +count)

}


const g="stBriBngBs"
const j="s"
console.log(count(g,j))

// var h=""
// console.log(h)