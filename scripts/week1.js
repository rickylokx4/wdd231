const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function displayCourses(courses) {
    const coursesContainer = document.getElementById("courses");
    coursesContainer.innerHTML = "";

    courses.forEach((course) => {
        const courseDiv = document.createElement("div");
        const divButton = document.createElement('button')
        const dialog = document.createElement('dialog');
        const dialogDiv = document.createElement('div')
        const courseCode = document.createElement('h2')
        const dialogButton = document.createElement('button')
        const title = document.createElement('h3')
        const parrafo = document.createElement('p')
        
        
        divButton.textContent = `${course.subject}${course.number}`;
        courseDiv.className = course.completed ? "completed" : "not-completed";
        courseDiv.appendChild(divButton)
        courseDiv.appendChild(dialog);
        dialog.appendChild(dialogDiv)
        dialogDiv.appendChild(courseCode)
        dialogDiv.appendChild(dialogButton)
        dialog.appendChild(title)
        dialog.appendChild(parrafo);
        coursesContainer.appendChild(courseDiv);
        
        dialogButton.addEventListener('click', ()=>{ dialog.close()});
        divButton.addEventListener('click', ()=> {showStaff(course)});

        function showStaff(data){   
        courseCode.innerHTML = `${data.subject}${data.number}`
        dialogButton.innerHTML = "&#10006;"
        title.innerHTML = data.title
        parrafo.innerHTML = ` ${data.credits} credits <br> Certificate: ${data.certificate} <br><br> ${data.description} <br><br> Tecnology: ${data.technology} `
        dialog.showModal()
        }
    });

    
    
    const totalCredits = courses.reduce((total, credit) => {
        return total + credit.credits
    },0)

    const creditsDiv = document.getElementById("credits");
    creditsDiv.innerHTML = `Total Credits = ${totalCredits} `;
    
  }
  
  // Filter courses
  function filterCourses(subject) {
    let filteredCourses = courses;
    if (subject !== "all") {
      filteredCourses = courses.filter((course) => course.subject === subject);
    }
    displayCourses(filteredCourses);
  }
  
  // Initial display of courses
  displayCourses(courses);


  
