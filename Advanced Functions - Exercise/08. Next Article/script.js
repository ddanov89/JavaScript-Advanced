function getArticleGenerator(articles) {
    let articleContent = Array.from(articles);
    const contentRef = document.getElementById('content');
    return () => {
        if (!articleContent.length) {
            return;
        }
        let currentArticleValue = articleContent.shift();
        let newArticle = document.createElement('article');
        newArticle.textContent = currentArticleValue;
        contentRef.appendChild(newArticle);
    }
}
