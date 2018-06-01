
$(document).on("submit", "#form", handleFormSubmit);

const nameInput = $("#name")
    , emailInput = $("#email")
    , messageTextarea = $("#message");

function validateFormInput() {
    if (
        !nameInput.val().trim() || !emailInput.val().trim()) {
        return;
    }; // END IF
}; // END VALIDATE FORM

function sendFormToDatabase(message) {
    $.post("/api/contact", message)
        .then(res => {
            console.log(res);
        });
}; // END UPSERT 

function handleFormSubmit(event) {
    event.preventDefault();
    validateFormInput();
    sendFormToDatabase({
        name: nameInput.val().trim(),
        email: emailInput.val().trim().trim(),
        message: messageTextarea.val().trim()
    }); // END SEND FORM
    document.getElementById("form").reset();
}; // END HANDLE AUTHOR