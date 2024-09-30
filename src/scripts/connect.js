const newsSection = document.querySelector('.notices')
const inputBtn = document.querySelector('#input-btn')
const searchInput = document.querySelector('#search-input')
const comumLink = 
          'https://newsapi.org/V2/top-headlines?' +
          'country=us&' +
          'apiKey=5a7aa7c4f96447d69a5de31e06f78ac1'

const GetData = async(otherLink) =>{
    
    response = await axios.get(otherLink)
    const data = response.data
    const allNews = data.articles
    newsSection.innerHTML = ''
    allNews.forEach(news => {
        const notice = document.createElement('article')
        notice.classList.add('news')
        
        const title = document.createElement('h2')
        title.textContent = news.title

        const linkToNotice = document.createElement('a')
        linkToNotice.href = news.url
        linkToNotice.target = '_Blank'

        linkToNotice.textContent = news.source.name

        const thumb = document.createElement('img')
        thumb.src = news.urlToImage

        const infoContainer = document.createElement('div')
        infoContainer.classList.add('info')

        if(title && linkToNotice && news.urlToImage){infoContainer.appendChild(title)
        infoContainer.appendChild(linkToNotice)

        notice.appendChild(infoContainer)
        if(thumb){
            notice.appendChild(thumb)
        }

        newsSection.appendChild(notice)}

    });
}
GetData(comumLink)

inputBtn.addEventListener('click', () =>{
    const searchContent = searchInput.value
    link = `https://newsapi.org/v2/top-headlines?q=${searchContent}&apiKey=5a7aa7c4f96447d69a5de31e06f78ac1`
    GetData(link)
})
searchInput.addEventListener('keyup', () =>{
    const searchContent = searchInput.value
    if(searchContent === ''){
        GetData(comumLink)
    }
})