import arr from "./types.js"
let display = document.getElementById("field") as HTMLParagraphElement
let result = document.getElementById("field2") as HTMLParagraphElement
let score = document.getElementById("scr") as HTMLParagraphElement
let Cnt=document.getElementById("field3") as HTMLParagraphElement
export class Count{
    public index:number[]
    public count:number
    public UsrAns:string
    public AnsClicked:boolean
    public score:number
    public btn:HTMLButtonElement
    public btn1:HTMLButtonElement
    public btn2:HTMLButtonElement
    public NA:HTMLButtonElement
    public reset:HTMLButtonElement


    constructor(){
        this.index=[]
        this.count=0
        this.UsrAns=""
        this.AnsClicked=false
        this.score=0
        this.btn=document.getElementById("1") as HTMLButtonElement
        this.btn1=document.getElementById("2") as HTMLButtonElement
        this.btn2=document.getElementById("3") as HTMLButtonElement
        this.NA= document.getElementById("NON") as HTMLButtonElement
        this.reset = document.getElementById("reset") as HTMLButtonElement
    }

    add(a:number){
        this.index.push(a)
        this.count++
    }
    randomise(){
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
        result.textContent=""
        display.textContent=arr[q].text
        console.log("this is the answer and the text",arr[q].answer,arr[q].text)
        this.btn.innerText=this.btn.value=arr[i].answer
        this.btn1.innerText=this.btn1.value=arr[j].answer
        this.btn2.innerText=this.btn2.value=arr[k].answer
        switch(arr[q].answer){
            case this.btn.value:
               this.UsrAns  = this.btn.value
                break
            case this.btn1.value:
                this.UsrAns  = this.btn1.value
                break
            case this.btn2.value:
                this.UsrAns  = this.btn2.value
                break
            default:
                this.UsrAns  = this.NA.value
        }
    }
    restore(){
        this.index=[]
        this.count=0
        this.UsrAns=""
        this.AnsClicked=false
        this.score=0
        window.location.reload()
    }
    nextQues(){
       
        if(this.count<5){
            console.log("this is the count:",this.count)
            this.count++
            Cnt.textContent=`${this.count+1} out of 6`
            this.AnsClicked=false
            this.randomise()
        }else{
            console.log("game ended")
            this.restore()
        }
    }
    handlepress(btn:HTMLButtonElement,ans?:string){
        console.log("button pressed ",btn.value)
        console.log("In handler,usrans",this.UsrAns)

        if(this.UsrAns  === btn.value){
            result.textContent = `True answer!`
            this.score++
            score.textContent = `Current score: ${this.score}`
            this.AnsClicked=true
        }else{
            console.log(false)
            result.textContent = `False!Answer was ${this.UsrAns}`
            this.AnsClicked=true
        } 
       
    }
}

