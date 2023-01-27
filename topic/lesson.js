const courseCardTemplate = document.querySelector("[course-data-template]")
const courseCardContainer = document.querySelector("[course-card-container]")
const searchInput = document.querySelector("[course-search]")
const dcourse = document.querySelectorAll(".course")
// console.log(dcourse);
// console.log(courseCardTemplate.);
let courses = [];

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    courses.forEach(info => {
        const isVisible = 
            info.title.toLowerCase().includes(value)
        // info.element.classList.toggle("hideCourse", !isVisible)
        if (isVisible) {
            info.element.removeAttribute("hidden")
        } 
        else {
            info.element.setAttribute("hidden", "")
        }
    })
})


fetch('lesson.json')
    .then(res => res.json()).then(data =>{
        // console.log(data);
        courses = data.map(info => {
            // const id = "#"+"\\"+info.id
            let card = null
            dcourse.forEach(ele => {
                if (ele.id.toString() === info.id.toString()) card = ele;  
            })
            
            // console.log(card);
            // const title = card.querySelector("[data-title]")
            // title.textContent = info.title
            // courseCardContainer.append(card)
            return {title: info.title, element:card}
        })
    }) 