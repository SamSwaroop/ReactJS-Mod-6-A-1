// const x="string"
// const k=x.split("")
// console.log(k)

function count(f){
    var count=0
    const e=f.split("")
    for(let i=0;i<e.length;i++){
        if(e[i]==="B"){
            count=count+1

        }
    }
    console.log("the number of B's is " +count)

}


const g="ebrugbrhuawrBuihfBuihiurswB"
console.log(count(g))