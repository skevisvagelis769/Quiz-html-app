import  arr,{ Count } from "./questions.js";
let btn = document.getElementById("1") as HTMLButtonElement
let btn1 = document.getElementById("2") as HTMLButtonElement
let btn2 = document.getElementById("3") as HTMLButtonElement
let display = document.getElementById("field") as HTMLParagraphElement
let NA = document.getElementById("NON") as HTMLButtonElement
let reset = document.getElementById("reset") as HTMLButtonElement

let t1 = new Count()
let ans:string
/* 1)get data from button click 
2)display random question
3) compare button click data to  question answer
4) return wrong or right
5) add none of the above option
6)display new or the same question
7) add a score count*/
reset.addEventListener('click',()=> t1.restore())
btn.addEventListener('click',()=> {
    if(!t1.AnsClicked){
        t1.handlepress(btn,ans)
        console.log(btn.value)
       // t1.AnsClicked=true
    }
})
btn1.addEventListener('click',()=> {
    if(!t1.AnsClicked){
        t1.handlepress(btn1,ans)
        console.log(btn1.value)
        //t1.AnsClicked=true
    }
})
btn2.addEventListener('click',()=> {
    if(!t1.AnsClicked){
        t1.handlepress(btn2,ans)
        console.log(btn2.value)
        //t1.AnsClicked=true
    }
})
NA.addEventListener('click',()=>{
    if(!t1.AnsClicked){
        t1.handlepress(NA,ans)
        console.log(NA.value)
        //t1.AnsClicked=true
    }
})
console.log("in quiz")
let q = Math.floor(Math.random() * 6);
let i = Math.floor(Math.random() * 6);
let j = Math.floor(Math.random()*6 )
let k = Math.floor(Math.random()*6)
while(j===i){
    j = Math.floor(Math.random()*6 )
}
while(k===j || k===i){
    k = Math.floor(Math.random()*6)
}



display.textContent=arr[q].text
btn.innerText = btn.value=arr[i].answer
btn1.innerText = btn1.value=arr[j].answer
btn2.innerText = btn2.value=arr[k].answer
switch(arr[q].answer){
    case btn.value:
        ans = btn.value
        break
    case btn1.value:
        ans = btn1.value
        break
    case btn2.value:
        btn2.value
        break
    default:
        ans = NA.value
}
