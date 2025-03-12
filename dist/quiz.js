import { Count } from "./questions.js";
let t1 = new Count();
let ans;
t1.randomise();
t1.reset.addEventListener('click', () => t1.nextQues());
t1.btn.addEventListener('click', () => {
    if (!t1.AnsClicked) {
        t1.handlepress(t1.btn);
        console.log(t1.btn.value);
    }
});
t1.btn1.addEventListener('click', () => {
    if (!t1.AnsClicked) {
        t1.handlepress(t1.btn1);
        console.log(t1.btn1.value);
    }
});
t1.btn2.addEventListener('click', () => {
    if (!t1.AnsClicked) {
        t1.handlepress(t1.btn2);
        console.log(t1.btn2.value);
    }
});
t1.NA.addEventListener('click', () => {
    if (!t1.AnsClicked) {
        t1.handlepress(t1.NA);
        console.log(t1.NA.value);
    }
});
//# sourceMappingURL=quiz.js.map