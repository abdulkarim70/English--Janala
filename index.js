const loadLessons=()=>{
fetch('https://openapi.programming-hero.com/api/levels/all')///return promise
.then(res=> res.json()) // promise json data
.then(json=> displayLessons(json.data))
}
const loadLevelWord=(id)=>{
    console.log(id)
}
const displayLessons=(lessons)=>{
// 1. get the container & empty
const levelContainer=document.getElementById('level-container');
levelContainer.innerHTML="";
console.log(levelContainer)
// 2. get into every lesson
lessons.forEach(lesson=>{
// console.log(lesson)
// 3.Create new element
const btnDiv=document.createElement('div')
btnDiv.innerHTML=`<button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
<i class="fa-solid fa-book-open"></i>Lesson-${lesson.level_no}
</button>
`
// 4. Append Into Container
levelContainer.append(btnDiv)
})


}


loadLessons()