const emailBox = document.getElementById("email-text-box");
const textBox = document.getElementById("question-text-box");
const submitButton = document.getElementById("question-button");

let emailSaved;
let questionSaved;


submitButton.addEventListener("click", function(){
    emailSaved = emailBox.value;
    questionSaved = textBox.value;

    emailBox.value = "";
    textBox.value = "";

    createPost(emailSaved, questionSaved);
    console.log("email: "+emailSaved);
    console.log("question: "+questionSaved);
})

const liveQuestionBox = document.getElementById("live-question-box")

function createPost(emailSaved, questionSaved){
    const post = document.createElement("div");
    post.classList = "question-container";

    const email = document.createElement("div");
    email.classList = "question-email";
    const question = document.createElement("div");
    question.classList = "question-text";

    email.textContent = emailSaved;
    question.textContent = questionSaved;


    post.appendChild(email);
    post.appendChild(question);
    liveQuestionBox.appendChild(post);

}