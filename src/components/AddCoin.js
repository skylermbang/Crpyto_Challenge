import React from 'react'
import API from "./CryptoApi"
import { Form, Button } from 'react-bootstrap';
import { WatchListContext } from './WatchList'

function AddCoin() {
    const { addCoin } = React.useContext(WatchListContext)

    let [coinName, setCoinName] = React.useState("")
    let [coinSearch, setCoinSearch] = React.useState("")
    let [result, setResult] = React.useState(false)
    let [resultData, setResultData] = React.useState("")
    const onChange = (current) => {
        console.log("User wish to find the following coin : ", current.target.value);
        setCoinName(current.target.value);
    };

    const getName = (event) => {
        event.preventDefault()
        setCoinSearch(coinName);
    }

    const handleAdd = (coin) => {
        console.log(coin)
        addCoin(coin);
    }




    const ShowResult = ({ coin }) => {
        console.log(coin)
        return (
            <div>

                {coin.map((element) =>

                    <li key={element.id} className='coinlist-item list-group-item list-group-item-action d-flex justify-content-center align-items-left text-dark' onClick={() => handleAdd(element.id)}>
                        <img className="coinlist-image" src={element.image} alt="" />
                        <span className="text-decoration-none"> {element.name} </span>

                    </li>
                )
                }
            </div >
        )
    }

    React.useEffect(() => {
        const fetch = async () => {

            const response = await API.get("/coins/markets", {
                params: {
                    vs_currency: "aud",
                    ids: coinSearch,
                }
            })
            console.log(response.data)
            console.log(response.data.length)

            if (response.data.length == 100) {
                console.log("default setting of the api")

                setResult(false)

            } else if (response.data.length > 0) {
                console.log("cant find any coin")
                setResult(true)
                setResultData(response.data)

            } else {
                setResult(false)
            }
        }
        fetch()
    }, [coinSearch])


    return (

        <div>
            <h1> Add Coin</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Coin Name </Form.Label>
                    <Form.Control type="coin" placeholder="Coin Name " value={coinName} onChange={onChange} />
                    <Form.Text className="text-muted">
                        please input the whole name of the coin.
                    </Form.Text>
                </Form.Group>


                <Button variant="primary" type="submit" onClick={getName}>
                    Search
                </Button>
            </Form>

            {result ? < ShowResult coin={resultData} /> : <div><h1> Cant find the match of your search</h1></div>}

        </div>
    )
}

export default AddCoin