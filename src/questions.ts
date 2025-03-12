interface question{
    text:string,
    answer:string
}

let test1:question={
    text:"test",
    answer:"yes"
}
let test2:question={
    text:"test2",
    answer:"no"
}
let test3:question={
    text:"test3",
    answer:"yes3"
}
let test4:question={
    text:"test4",
    answer:"yes"
}
let test5:question={
    text:"test5",
    answer:"no"
}
let test6:question={
    text:"test6",
    answer:"yes6"
}
let display = document.getElementById("field2") as HTMLParagraphElement
let score = document.getElementById("scr") as HTMLParagraphElement
let arr:question[]=[test1,test2,test3,test4,test5,test6]
export default arr 

export class Count{
    public index:number[]
    public count:number
    public UsrAns:string
    public AnsClicked:boolean
    public score:number
    constructor(){
        this.index=[]
        this.count=0
        this.UsrAns=""
        this.AnsClicked=false
        this.score=0
    }

    add(a:number){
        this.index.push(a)
        this.count++
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
        /* ADD NEXT QUESTION FEATURE, THE RELOAD UNDOES EVERYTHING,FIND WAY TO GENERATE NEW QUESTION SHIT */
        if(this.count<6){
            console.log("this is the count:",this.count)
            this.count++
            this.AnsClicked=false
         //   window.location.reload()
        }else{
            console.log("game ended")
            this.restore()
        }
    }
    handlepress(btn:HTMLButtonElement,ans?:string){
        if(ans === btn.value){
            display.textContent = `True answer!`
            this.score++
            score.textContent = `Current score: ${this.score}`
            this.AnsClicked=true
        }else{
            console.log(false)
            display.textContent = `False!Answer was ${ans}`
            //console.log("answer was:",arr[pos].answer)
            this.AnsClicked=true
        } 
       
    }
}

