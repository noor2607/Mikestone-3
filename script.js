var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profileinput = document.getElementById('profile');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('work');
    var skillsElement = document.getElementById('skills');
    if (profileinput && nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = contactElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilefile = (_a = profileinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profileURL = profilefile ? URL.createObjectURL(profilefile) : "";
        //create resume output
        var resumeoutput = "\n    <h2>Resume</h2>\n    ".concat(profileURL ? "<img src=\"".concat(profileURL, "\" alt=\"Profile picture\" class=\"profile\">") : "", "\n\n        <p><strong>Name:</strong> ").concat(name_1, "  </p>\n    <p><strong>Email:</strong> ").concat(email, "  </p>\n    <p><strong>Contact No:</strong> ").concat(phone, " </p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeoutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeoutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
