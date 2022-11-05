const articlesByCategory = ({articles, category}) => {
  return (
    <>
      <h1>News by Category</h1>
      {articles.map(article => {
        return (
          <h2 key={article.id}>
            {articles.id}
            {article.title}
            {article.category}
          </h2>
        )
      })}
    </>
  )
}

export default articlesByCategory

export const getServerSideProps = async ({params}) => {
  const response = await fetch(
    `http://localhost:4000/news?category=${params.category}`,
  )

  const data = await response.json()

  return {
    props: {
      articles: data,
      category: params.category,
    },
  }
}
