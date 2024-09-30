const newsSection = document.querySelector('.notices')

const GetData = async() =>{
    const response = await axios.get(
        'https://newsapi.org/V2/top-headlines?' +
          'country=us&' +
          'apiKey=5a7aa7c4f96447d69a5de31e06f78ac1'
    )
    const data = response.data
    const allNews = data.articles
    allNews.forEach(news => {
        const notice = document.createElement('article')
        notice.classList.add('news')
        
        const title = document.createElement('h2')
        title.textContent = news.title

        const linkToNotice = document.createElement('a')
        linkToNotice.href = news.url

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
GetData()