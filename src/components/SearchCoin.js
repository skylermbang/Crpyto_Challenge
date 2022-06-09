//REACT
import React from 'react'
import { Link } from "react-router-dom"
// HELPER
import styled from 'styled-components'
import API from "./CryptoApi"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
//BOOTSTRAP
import { Button, Container, Row, Col, } from 'react-bootstrap';


function SearchCoin() {
    const items = [
        {
            id: "bitcoin",
            name: 'bitcoin'
        },
        {
            id: "neo",
            name: 'neo'
        },
        {
            id: "eth",
            name: 'ethereum'
        },
        {
            id: "xrp",
            name: 'ripple'

        },
        {
            id: "lnx",
            name: 'lunar'
        }
    ]


    const handleOnSearch = (string, results,) => {
        console.log(string, results)
        try {
            if (result) {
                let coin = results[0].name
                setCoinSearch(coin)
            } else {
                console.log(" this is not in our object but we can search")
                setCoinSearch(string)
            }
        } catch (error) {

            setCoinSearch(string)
        }
        console.log("string is ", string)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log("***")
        console.log(item.name)
        setCoinSearch(item.name)

    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>symbol: {item.id}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
            </>
        )
    }

    let [coinSearch, setCoinSearch] = React.useState("")
    let [result, setResult] = React.useState(false)
    let [resultData, setResultData] = React.useState("")




    const handleAdd = (coin) => {
        console.log(coin)
        // addCoin(coin);
    }

    const ShowResult = ({ coin }) => {
        console.log(coin)
        return (
            <div>

                {coin.map((element) =>
                    <Link key={coin.id} to={`/cryptos/${element.id}`} className="text-decoration-none my-1 coin">
                        <li className='coinlist-item list-group-item list-group-item-action d-flex justify-content-center align-items-left text-dark' onClick={() => handleAdd(element.id)}>
                            <img className="coinlist-image" src={element.image} alt="" />
                            <span className="text-decoration-none"> {element.name} </span>

                        </li>
                    </Link>
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


            < Container >



                <Row>
                    <Col sm={8}> <SearchWrapper>
                        <div className="search">
                            <header className="App-header">
                                <div style={{ width: 550 }}>

                                    <ReactSearchAutocomplete
                                        items={items}
                                        fuseOptions={{ keys: ["title", "id"] }}
                                        onSearch={handleOnSearch}
                                        onHover={handleOnHover}
                                        onSelect={handleOnSelect}
                                        onFocus={handleOnFocus}
                                        // autoFocus
                                        inputSearchString=""
                                        placeholder="Please Search Coin name or symbol"
                                        formatResult={formatResult}
                                        styling={{ height: "44px", width: "100px" }
                                            // border: "1px solid #dfe1e5",
                                            // borderRadius: "24px",
                                            // backgroundColor: "white",
                                            // boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
                                            // hoverBackgroundColor: "#eee",
                                            // color: "#212121",
                                            // fontSize: "16px",
                                            // fontFamily: "Arial",
                                            // iconColor: "grey",
                                            // lineColor: "rgb(232, 234, 237)",
                                            // placeholderColor: "grey",
                                            // clearIconMargin: '3px 14px 0 0',
                                            // searchIconMargin: '0 0 0 16px'
                                        }
                                    />

                                </div>

                            </header>
                        </div>
                    </SearchWrapper>
                    </Col>
                    <Col sm={4} style={{ marginTop: "100px" }}>  <Button variant="primary" type="submit" onClick={handleOnSearch} >
                        Search
                    </Button> </Col>
                </Row>
            </Container >





            {result ? <ShowResult coin={resultData} /> : null
            }

        </div >
    )
}

const SearchWrapper = styled.div`

  margin-top: 100px;
  margin-left: 10em;
  margin-right: 10em;
  margin-bottom: 100px;
  width: 30vw;
  height: 10vh;
  background-color:#ffffff

.dashboard{
    display:flex;
  }
  
  .flex-parent-element {
    display: flex;
    width: 50%;
  }
  
  .flex-child-element {
    flex: 1;
    border: 2px solid blueviolet;
    margin: 10px;
  }
  
  .flex-child-element:first-child {
    margin-right: 20px;
  }

`;

export default SearchCoin