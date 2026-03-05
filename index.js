const loadLessons=()=>{
fetch('https://openapi.programming-hero.com/api/levels/all')///return promise
.then(res=> res.json()) // promise json data
.then(json=> displayLessons(json.data))
}
const loadLevelWord=(id)=>{
    // console.log(id)
    const url=`https://openapi.programming-hero.com/api/level/${id}`
    // console.log(url)
    fetch(url)
    .then(res=> res.json())
    .then(data=>    {
        removeActive()
        displayLevelWord(data.data)
        const clickBtn=document.getElementById(`lesson-btn ${id}`)
        // console.log(clickBtn);
        clickBtn.classList.add("active")
    })
}
const removeActive=()=>{
    const lessonsBtn=document.querySelectorAll('.lesson-btn')
    lessonsBtn.forEach(btn=> btn.classList.remove("active"))
}

const displayLevelWord=(words)=>{
// console.log(words);
const wordContainer= document.getElementById('word-container')
wordContainer.innerHTML='';
if(words.length==0){
    wordContainer.innerHTML=`<div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
    <img class="mx-auto" src="/assets/alert-error.png"
  <p class="text-xl font-medium text-gray-400">এই লেসনে এখনো কোন Vocabulary যুক্ত করা হয়নি</p>
  <h2 class="text-4xl font-bold ">নেক্সট Lesson এ যান ।</h2>
</div>`
}
// {
//     "id": 26,
//     "level": 2,
//     "word": "Adore",
//     "meaning": "ভালবাসা / পূজা করা",
//     "pronunciation": "এডোর"
// }

words.forEach(word=>{
    console.log(word);
    const card=document.createElement('div')
    card.innerHTML=`
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
  <h2 class="font-bold text-2xl">${word.word? word :"শব্দ পাওয়া যায়নি" }</h2>
  <p class="font-semibold">Meaning /Pronounciation</p>
 <div class="font-bangla text-2xl font-medium">${word.meaning? word.meaning :"অর্থ পাওয়া যায়নি"}/${word.pronunciation?word.pronunciation:"pronunciation খুজে পাওয়া যাচ্ছে না"}</div>
 <div class="flex justify-between items-center">
  <button onclick="my_modal_5.showModal()" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
  <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
 </div>
</div>`
    wordContainer.append(card)
})
}
const displayLessons=(lessons)=>{
// 1. get the container & empty
const levelContainer=document.getElementById('level-container');
levelContainer.innerHTML="";
// console.log(levelContainer)
// 2. get into every lesson
lessons.forEach(lesson=>{
// console.log(lesson)
// 3.Create new element
const btnDiv=document.createElement('div')
btnDiv.innerHTML=`<button id="lesson-btn${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
<i class="fa-solid fa-book-open"></i>Lesson-${lesson.level_no}
</button>
`
// 4. Append Into Container
levelContainer.append(btnDiv)
})


}


loadLessons()
