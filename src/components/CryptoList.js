import React from 'react'
import API from "./CryptoApi"
import { WatchListContext } from './watchList'
import { Link } from "react-router-dom"
import styled from 'styled-components'
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
            {/* <ul>
                <li className='coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-left text-dark'>

                    <span className="text-decoration-none"> <strong>Symbol</strong></span>
                    <span className="text-decoration-none"> <strong>Name</strong> </span>
                    <span className="text-decoration-none"> <strong>Price</strong> </span>
                    <span className="text-decoration-none"> <strong>Price in 24hrs</strong> </span>
                    <span className="text-decoration-none"> <strong> % </strong> </span>
                </li> */}


            <CoinListWrapper>
                {/* {coin.map((coin) =>

                        <Link key={coin.id} to={`/cryptos/${coin.id}`} className="text-decoration-none my-1 coin">
                            <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
                                <img className="coinlist-image" src={coin.image} alt="" />

                                <span className="text-decoration-none"> {coin.name} </span>
                                <span className="text-decoration-none"> {coin.current_price.toFixed(3)} $AUD </span>
                                <span className={coin.price_change_percentage_24h < 0 ? "text-danger mr-2-none" : "text-success mr-2-none"}>
                                    {coin.price_change_percentage_24h < 0 ? <i className='fas fa-sort-down align-middle mr-1'></i> : <i className='fas fa-sort-up align-middle mr-1'></i>}
                                    {coin.price_change_24h.toFixed(3)} $AUD</span>

                                <span className={coin.price_change_24h < 0 ? "text-danger mr-2-none" : "text-success mr-2-none"}>

                                    {coin.price_change_percentage_24h < 0 ? <i className='fas fa-sort-down align-middle mr-1'></i> : <i className='fas fa-sort-up align-middle mr-1'></i>}
                                    {coin.price_change_percentage_24h.toFixed(3)} %</span>

                                <i className="delete-icon far fa-times-circle text-danger" onClick={(e) => {
                                    e.preventDefault()
                                    deleteCoin(coin.id)
                                }}></i>
                            </li>
                        </Link>
                    )} */}

                <Table striped bordered hover >
                    <thead>


                        <tr>

                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Price in 24hrs</th>
                            <th>%</th>
                            <th> Delete </th>
                            <th> Detail </th>
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
                                <td onClick={(e) => {
                                    e.preventDefault()
                                    deleteCoin(coin.id)
                                }}>    <Button variant="danger"  >  <Link to={`/cryptos/${coin.id}`}>Delete</Link></Button> </td>
                                <td>
                                    <Link key={coin.id} to={`/cryptos/${coin.id}`} className="text-decoration-none my-1 coin"><Button variant="info"> Detail</Button></Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </CoinListWrapper>

            {/* </ul > */}

            {loading ? null : <strong>Loading...</strong>}
        </div >

    )
}





const CoinListWrapper = styled.div`

.coinlist-image {
    width: 50px;
  }
  
  .coinlist-item {
    display: flex;

  }
  
  .coinsummary {
    border-color: white !important;
    border-style: outset !important;
  }
  
  .coin-data-category {
    font-size: 10px;
  }
  
  .delete-icon {
    display: none;
    position: absolute;
    right: 6px;
  }
  
  .coin:hover .delete-icon {
    display: block;
  }
`;

export default CryptoList