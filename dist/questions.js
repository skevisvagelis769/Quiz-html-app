let test1 = {
    text: "test",
    answer: "yes"
};
let test2 = {
    text: "test2",
    answer: "no"
};
let test3 = {
    text: "test3",
    answer: "yes3"
};
let test4 = {
    text: "test4",
    answer: "yes"
};
let test5 = {
    text: "test5",
    answer: "no"
};
let test6 = {
    text: "test6",
    answer: "yes6"
};
let display = document.getElementById("field2");
let score = document.getElementById("scr");
let arr = [test1, test2, test3, test4, test5, test6];
export default arr;
export class Count {
    constructor() {
        this.index = [];
        this.count = 0;
        this.UsrAns = "";
        this.AnsClicked = false;
        this.score = 0;
    }
    add(a) {
        this.index.push(a);
        this.count++;
    }
    restore() {
        this.index = [];
        this.count = 0;
        this.UsrAns = "";
        this.AnsClicked = false;
        this.score = 0;
        window.location.reload();
    }
    nextQues() {
        if (this.count < 6) {
            console.log("this is the count:", this.count);
            this.count++;
            this.AnsClicked = false;
            window.location.reload();
        }
        else {
            console.log("game ended");
            this.restore();
        }
    }
    handlepress(btn, ans) {
        if (ans === btn.value) {
            display.textContent = `True answer!`;
            this.score++;
            score.textContent = `Current score: ${this.score}`;
            this.AnsClicked = true;
        }
        else {
            console.log(false);
            display.textContent = `False!Answer was ${ans}`;
            //console.log("answer was:",arr[pos].answer)
            this.AnsClicked = true;
        }
    }
}
//# sourceMappingURL=questions.js.map