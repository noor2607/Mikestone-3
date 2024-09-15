// listing element
document.getElementById('resumeForm')?.addEventListener( 'submit', function(event) {
    event.preventDefault();


    //type assertion
    const profileinput = document.getElementById('profile') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('work') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;


    if ( profileinput && nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement)

{       const name = nameElement.value;
        const email = emailElement.value;
        const phone = contactElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value; 
        const profilefile = profileinput.files?.[0]
        const profileURL = profilefile? URL.createObjectURL(profilefile): "";


    //create resume output
    const resumeoutput = `
    <h2>Resume</h2>
    ${profileURL ? `<img src="${profileURL}" alt="Profile picture" class="profile">` : ""}

        <p><strong>Name:</strong> ${name}  </p>
    <p><strong>Email:</strong> ${email}  </p>
    <p><strong>Contact No:</strong> ${phone} </p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;


    const  resumeOutputElement = document.getElementById('resumeoutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeoutput
    } else {
        console.error('the resume output elements are missing')
    }
} else {
    console.error('one or more output elements are missing')
}
})
