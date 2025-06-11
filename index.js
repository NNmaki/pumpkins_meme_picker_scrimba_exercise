
import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")


getImageBtn.addEventListener('click', getMatchingCatsArray)
emotionRadios.addEventListener('change', higlightCheckedOption)


function getMatchingCatsArray() {
    if (document.querySelector('input[type="radio"]:checked')) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        console.log(selectedEmotion)
    } else {
        console.log("You have not chosed anything!")
    }
}


function higlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios) {
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')   
}



function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags) {
            if (!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
        }
    }
     return emotionsArray
}


function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats);
    let radioItems = ""
    for (let emotion of emotions) {
        radioItems += `
        <div class="radio">
        <label for="${emotion}">${emotion}</label><br>
        <input type="radio" id="${emotion}" name="emotions" value="${emotion}">
        </div>
        `
    }
    emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData)

