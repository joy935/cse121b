// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { 
            sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" 
        },
        { 
            sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A"
        },
    ],
    enrollStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },

    dropStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },
};

function setCourseInfo(course){
    document.getElementById("courseName").textContent = course.name;
    document.getElementById("courseCode").textContent = course.code;
};

function renderSections(sections) {
    const html = sections.map((section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    </tr>`);
    document.getElementById("sections").innerHTML = html;
};

document.getElementById("enrollStudent").addEventListener("click", function() {const sectionNum = document.getElementById("sectionNumber").value; aCourse.enrollStudent(sectionNum)});

document.getElementById("dropStudent").addEventListener("click", function() {const sectionNum = document.getElementById("sectionNumber").value; aCourse.dropStudent(sectionNum)});

setCourseInfo(aCourse);
renderSections(aCourse.sections);