const input = document.getElementById('subject');
const search = document.getElementById('search');
const articleList = document.getElementById('articleList');
const reset = document.getElementById('reset');
var response= '';
var responsePopularityAndPublished = '';


search.addEventListener('click', async ()=>{

    if(document.getElementById('popularity').checked){
        //last month articles with popularity related to bitcoin
        response  = await (await fetch(`https://newsapi.org/v2/everything?q=${input.value}&from=2022-04-27&sortBy=popularity&apiKey=1cca9b40e05148c6972c93dfb9c4c541`)).json();

    }else {
         //last month articles with published related to bitcoin
        response  = await (await fetch(`https://newsapi.org/v2/everything?q=${input.value}&from=2022-04-27&sortBy=publishedAt&apiKey=1cca9b40e05148c6972c93dfb9c4c541`)).json();

    }

    for(article of response.articles ){

        var li = document.createElement("li");
        let title = article.source.title;
        li.appendChild(document.createTextNode(article.title));

        var image = document.createElement("img");
        image.setAttribute("src", article.urlToImage);
        li.appendChild(image);


        articleList.appendChild(li);
    }

})

reset.addEventListener('click', ()=>{
    console.log('reset')
    while (articleList.firstChild) {
        articleList.removeChild(articleList.lastChild);
      }
})



