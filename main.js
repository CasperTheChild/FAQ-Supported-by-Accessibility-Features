const QuestionLines = document.querySelectorAll(".QuestionLine");
const PlusIcons = document.querySelectorAll(".PlusIcon");
const MinusIcons = document.querySelectorAll(".MinusIcon");
const Answers = document.querySelectorAll(".Answer");

function QuestionToggle(Index) {
    const button = QuestionLines[Index];
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', !isExpanded);

    if (isExpanded) {        
        PlusIcons[Index].classList.remove("DisplayNone");
        MinusIcons[Index].classList.add("DisplayNone");
        Answers[Index].classList.add("DisplayNone");
        Answers[Index].setAttribute('aria-hidden', 'true');
    } else {
        PlusIcons[Index].classList.add("DisplayNone");
        MinusIcons[Index].classList.remove("DisplayNone");
        Answers[Index].classList.remove("DisplayNone");
        Answers[Index].setAttribute('aria-hidden', 'false');
    }
}

for (let i = 0; i < QuestionLines.length; i++) {
    QuestionLines[i].addEventListener("click", () => QuestionToggle(i));
}
