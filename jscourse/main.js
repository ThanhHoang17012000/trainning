const courseAPI = 'http://localhost:3000/courses'
function start() {
    fetch(courseAPI)
        .then(response => response.json())
        .then(courses => {
            const listcourseblock = document.querySelector('.list_courses')
            const htmls = courses.map(function (course) {
                return `<li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                </li>`
            })
            listcourseblock.innerHTML = htmls.join('');
        })
}

start();

function createhandelcourse() {
    let btn = document.querySelector('#create')
    btn.onclick = function () {
        let name = document.querySelector('input[name="name"]')
        let description = document.querySelector('input[name="description"]')
        var formdata = {
            name: name,
            description: description
        }
        createcourse(formdata)
    }
}
createhandelcourse()
function createcourse(data,callback) {
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseAPI,options)
        .then (function (response) {
            return response.json()
        })
        .then(callback)
}