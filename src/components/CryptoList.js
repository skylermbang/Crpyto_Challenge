import React from 'react'
import API from "./CryptoApi"
import { WatchListContext } from './WatchList'
import { Link } from "react-router-dom"

import { Table, Button } from 'react-bootstrap'

const CryptoList = () => {
    const [coin, setCoins] = React.useState([])
    const { watchList, deleteCoin } = React.useContext(WatchListContext)

    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            const response = await API.get("/coins/markets", {
                params: {
                    vs_currency: "aud",
                    ids: watchList.join(","),
                }
            })
            console.log(response.data)
            setCoins(response.data)
            console.log("test from fetching data from api")

        }
        fetch()
    }, [watchList])

    return (
        <div>


            <h1> Watch List </h1>


            <Table striped bordered hover >
                <thead>


                    <tr>

                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Price in 24hrs</th>
                        <th>%</th>
                        <th style={{ textAlign: "center" }}> Delete </th>
                        <th style={{ textAlign: "center" }}> Detail </th>
                    </tr>


                </thead>
                <tbody>
                    {coin.map((coin) =>
                        // <Link key={coin.id} to={`/cryptos/${coin.id}`}>
                        <tr key={coin.id}>
                            <td><img className="coinlist-image" src={coin.image} alt="" /></td>
                            <td>{coin.name}</td>
                            <td>{coin.current_price.toFixed(3)} $AUD</td>
                            <td className={coin.price_change_percentage_24h < 0 ? "text-danger" : "text-success"}> {coin.price_change_percentage_24h < 0 ? <i className='fas fa-sort-down align-middle mr-1'></i> : <i className='fas fa-sort-up align-middle mr-1'></i>}{coin.price_change_24h.toFixed(3)} $AUD</td>
                            <td className={coin.price_change_percentage_24h < 0 ? "text-danger" : "text-success"}>{coin.price_change_percentage_24h < 0 ? <i className='fas fa-sort-down align-middle mr-1'></i> : <i className='fas fa-sort-up align-middle mr-1'></i>}
                                {coin.price_change_percentage_24h.toFixed(3)} %</td>
                            <td style={{ textAlign: "center" }}>    <Button variant="danger" onClick={(e) => {
                                e.preventDefault()
                                deleteCoin(coin.id)
                            }}>  Delete</Button> </td>
                            <td style={{ textAlign: "center" }}>
                                <Link key={coin.id} to={`/cryptos/${coin.id}`} className="text-decoration-none my-1 coin"><Button variant="info"> Detail</Button></Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>


            {/* </ul > */}

            {loading ? null : <strong>Loading...</strong>}
        </div >

    )
}








export default CryptoList