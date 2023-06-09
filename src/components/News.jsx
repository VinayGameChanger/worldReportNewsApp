import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default function News(props) {
  const [article, setArticle] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(0)
  document.title = `World Report-${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`

useEffect(() => {
  updates();
}, [])


const updates = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=774f1eda122c46c4b379cf8c3a7a94ba&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true)
  let data = await fetch(url);
  const parsedData = await data.json();
  setResult(Math.ceil((parsedData.totalResults) / props.pageSize))
  setArticle(parsedData.articles)
  setLoading(false)
}


const handlePrevclick = async () => {
setPage(page-1)
  updates()
}


const handleNextclick = async () => {
  setPage(page+1)
  updates()
}
  return (
    <>
      <div className="container my-4">
        <h2 className='text-center'>World Report-Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h2>
        {loading && <Spinner />}

        <div className="row">
          {!loading && article.map((element) => {
            return (
              <div key={element.url ? element.url : ""} className="col-md-4 my-3">
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} urlToImage={element.urlToImage ? element.urlToImage : "https://techcrunch.com/wp-content/uploads/2023/06/Japanese-yen-growth-1.jpg?resize=1200,675"} newsUrl={element.url} author={element.author} channelName={element.source.name} publishedAt={element.publishedAt} />
              </div>)
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1 ? 1 : 0} type="button" className="btn btn-dark" onClick={handlePrevclick}>&larr; Previous </button>
        <h4>Page:{page}</h4>
        <button disabled={(page >= result)} type="button" className="btn btn-dark" onClick={handleNextclick}>Next &rarr;</button>
      </div>
    </>
  )
        }
News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
