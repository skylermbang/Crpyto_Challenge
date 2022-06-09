//REACT
import React from 'react'
import { Link } from "react-router-dom"


//BOOTSTRAP
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

//REACT-QUERY
import { useQuery } from "react-query";

function GetResult({ page, pageSize }) {
    const { isLoading, error, data } = useQuery(['repoData', page, pageSize], () =>
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=${pageSize}&page=${page}&sparkline=false&price_change_percentage=24h%2C%207d%2C%2014d%2C%2030d
        `).then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <Container>
                <Row >
                    {data.map((coin) =>
                        <Col key={coin.id} xs={6} md={4}>
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src={coin.image} style={{ height: "130px", maxWidth: "130px", margin: "auto" }} />
                                <Card.Body>
                                    <Card.Title>{coin.name}</Card.Title>
                                    <Card.Text>
                                        Symbol : {coin.symbol}
                                    </Card.Text>
                                    <Card.Text>
                                        Price : $ {coin.current_price}
                                    </Card.Text>
                                    <Card.Text>
                                        Market Cap Rank : # {coin.market_cap_rank}
                                    </Card.Text>

                                    <Button variant="light"  >  <Link to={`/cryptos/${coin.id}`}>Detail Page</Link></Button>

                                </Card.Body>
                            </Card>
                        </Col>


                    )}
                </Row>
            </Container>
        </div >
    )
}
export default GetResult