//REACT
import React from 'react'
//BOOTSTRAP
import { Button, ListGroup } from 'react-bootstrap';
// HELPER
import API from "./CryptoApi"
import axios from 'axios'
import { useQuery } from "react-query";


function CryptoData({ coin }) {



    let [Loading, setLoading] = React.useState(false)
    let [error, setError] = React.useState(null)
    let [articles, setArticles] = React.useState([])
    let [DataLoading, setDataLoading] = React.useState(false)
    let [data, setData] = React.useState("")



    React.useEffect(() => {
        const fetch = async () => {
            const response = await API.get("/coins/markets", {
                params: {
                    vs_currency: "aud",
                    ids: coin,
                }
            })
            setDataLoading(true)
            setData(response.data)
            // console.log(response.data)
        }

        fetch()









        // BING NEWS API  NOT WORKING DUE TO CORS
        // const fetchArticle = async () => {
        //     const options = {
        //         method: 'GET',
        //         url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        //         params: { q: `${coin}`, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
        //         headers: {
        //             'X-BingApis-SDK': 'true',
        //             'X-RapidAPI-Key': 'a65e1908b5msh4a012e3a26cdf75p17d7d2jsn7c8d01a0849f',
        //             'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        //         }
        //     };
        //     await axios.request(options).then(function (response) {
        //         console.log(response.data)
        //         setArticles(response.data.articles)
        //         setLoading(true)
        //     }).catch(function (error) {
        //         console.error(error);
        //     })
        // }

        // await axios.get(`https://newsapi.org/v2/everything?q=${coin}&apiKey=da6b832dcd4046f8997b1ce5eba26aee`).then(resp => {


        // })

        // }
        // fetchArticle()


    }, []);
    function GetNews() {




        const { isLoading, error } = useQuery(['articleData', coin], async () =>
            await axios.get(`https://newsapi.org/v2/everything?q=${coin}&apiKey=da6b832dcd4046f8997b1ce5eba26aee`).then(res => {
                setLoading(true)
                // console.log(res.data.articles)
                setArticles(res.data.articles)

                if (isLoading) {
                    // console.log("Loading...'")

                }
                if (error) {

                    console.log("An error has occurred: " + error.message)
                    // setLoading(true)
                    setError(true)


                }
                setLoading(true)
                return (
                    <ShowArticle articles={articles} />
                )

            }

            ).catch((e) => {
                console.log(e.message)
                setError(e.message)
            })
        )
    }


    const Error = ({ error }) => {
        return (<div> Error fetching data , {error}</div>)
    }
    const ShowArticle = ({ articles }) => {
        GetNews()
        return (
            <div>

                <ul>
                    <li className='coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-left text-dark '>
                        <span> <strong> Article relate to {coin}</strong> </span>
                        <span> </span>
                    </li>
                    {articles.map((article) =>
                        <li key={article.url} className='coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-left text-dark'>
                            <span className="text-decoration-none"> {article.title} </span>
                            <a href={article.url}><Button variant="light"> Detail</Button></a>

                        </li>

                    )}
                </ul>
            </div>
        )
    }
    return (
        <div>

            <div>
                {DataLoading ? < div >
                    <ListGroup variant="flush">

                        <ListGroup.Item> <strong>Detail Information</strong> </ListGroup.Item>
                        <ListGroup.Item> Coin Name  {data[0].name} </ListGroup.Item>
                        <ListGroup.Item> Coin Symbol  {data[0].symbol} </ListGroup.Item>
                        <ListGroup.Item> Market Cap {data[0].market_cap} $AUD</ListGroup.Item>
                        <ListGroup.Item> Current Price {data[0].current_price} $AUD</ListGroup.Item>
                        <ListGroup.Item> All Time High Price {data[0].ath} $AUD</ListGroup.Item>
                        <ListGroup.Item> All Time Low Price {data[0].atl} $AUD</ListGroup.Item>
                        <ListGroup.Item> Total Supply {data[0].total_supply} $AUD</ListGroup.Item>
                    </ListGroup>

                </div > : <div> Coin Data Loading  </div>}
            </div>

            <div >
                <GetNews />
                {error ? <Error error={error} /> : null}
                {Loading ? <ShowArticle articles={articles} /> : <div> Article Loading </div>}

            </div>

        </div >
    )
}

export default CryptoData