//REACT
import React from 'react'
//BOOTSTRAP
import { Button, ListGroup } from 'react-bootstrap';
// HELPER
import API from "./CryptoApi"
import axios from 'axios'


function CryptoData({ coin }) {
    console.log(coin, "what is the coin")
    let [articles, setArticles] = React.useState("")
    let [Loading, setLoading] = React.useState(false)
    let [DataLoading, setDataLoading] = React.useState(false)
    let [data, setData] = React.useState("")
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy - mm - dd

    React.useEffect(() => {
        async function getArticle(id) {
            await axios.get(`https://newsapi.org/v2/everything?q=${coin}}&from=${today}&sortBy=popularity&apiKey=da6b832dcd4046f8997b1ce5eba26aee`).then(resp => {
                setArticles(resp.data.articles)
                setLoading(true)

            });
            const fetch = async () => {

                const response = await API.get("/coins/markets", {
                    params: {
                        vs_currency: "aud",
                        ids: id
                    }
                })
                setDataLoading(true)
                setData(response.data)
                console.log(response.data)

            }
            fetch()
        }
        getArticle(coin)

    }, [])



    const ShowData = ({ data }) => {
        return (
            < div >
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
            </div >
        )
    }

    const ShowArticle = ({ articles }) => {
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
                {DataLoading ? <ShowData data={data} /> : <div> Data Loading  </div>}
            </div>

            <div >
                {Loading ? < ShowArticle articles={articles} /> : <div> Article Loading </div>}
            </div>

        </div >
    )
}

export default CryptoData