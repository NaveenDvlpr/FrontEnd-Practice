/* In this project i am creating a simple article reading page where the article has 10 lines my intention is to add up buttons for content reading management */

const articles = document.getElementsByClassName('article');


for(let i = 0; i < articles.length; i++) {
    const content = articles[i].getElementsByClassName('content')[0];
    const articleContent = content.innerText;
    content.innerText = articleContent.substr(0, 200) + " ";
    const control = document.createElement('span');
    control.classList.add('control');
    control.innerText = "readmore";
    articles[i].appendChild(control);
    control.addEventListener('click', ()=> {
        if(control.innerText == "readmore") {
            content.innerText = articleContent;
            control.innerText = "showless";
        } else {
            content.innerText = articleContent.substr(0,200);
            control.innerText = "readmore";
        }
    })
}
