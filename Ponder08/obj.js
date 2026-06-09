const course = {
    code: "WDD131",
    name: "Dynamic Web Fundamentals",
    sections: [
        { sectionNumber: "1", roomNum: "STC 247", enrolled: 24, days: "TTH", instructor: "Brother Keers"},
        { sectionNumber: "2", roomNum: "STC 112", enrolled: 3, days: "TTH", instructor: "Brother Alvey" }
    ],
    enrollStudent: function(sectionNum) {
        // find the section from the array
        // enroll one more student into that section
        const sectionIndex = this.sections.findIndex(section => {section.sectionNumber === sectionNum});
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
        }
    }
function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNumber}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(course.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    course.enrollStudent(sectionNum);
});



// const with object CANNOT reassign memory