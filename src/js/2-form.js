const formData = {
    email: "", message: ""
};
const feedbackForm = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";
const feedbackInput = feedbackForm.querySelector(".form-input");
const feedbackTextarea = feedbackForm.querySelector(".form-textarea");
feedbackForm.addEventListener("input", handleInput);
feedbackForm.addEventListener("submit", handleSubmit);

populateForm();

function handleInput(event) {
    if (event.target.name === "email") {
                formData.email = event.target.value.trim();    
            } else if (event.target.name === "message") {
                formData.message = event.target.value.trim();
            } 
            localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
    

function handleSubmit(event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields")
        return
    }
        event.currentTarget.reset();
        console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    
}

function populateForm() {
    if (localStorage.getItem(STORAGE_KEY)) {
        formData.email = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
        formData.message = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;  
        feedbackInput.value = formData.email;
        feedbackTextarea.value = formData.message;
    } 
}