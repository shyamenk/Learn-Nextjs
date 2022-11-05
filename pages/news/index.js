const NewsList = ({articles}) => {
  return (
    <>
      <h1>List of News Article</h1>
      {articles.map(article => {
        return (
          <h2 key={article.id}>
            {article.id} {article.title} | {article.category}
          </h2>
        )
      })}
    </>
  )
}

export default NewsList

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news')
  const news = await response.json()

  return {
    props: {
      articles: news,
    },
  }
}
