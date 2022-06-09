import React from 'react'
import styled from 'styled-components';
import { Pagination, Container, Row, Col, Card, Button, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useQuery } from "react-query";
import SearchCoin from './SearchCoin'

const Home2 = () => {
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(9);  // default show 9 coins per page   9,18,27

    const [result, setResult] = React.useState([]);  // default show 27 coins per page   9
    const LastPage = 100;

    const nextPage = () => {
        setPage(page + 1)
    }



    const previousPage = () => {

        if (page != 1) { setPage(page - 1) } else if (page === 1) {
            console.log("this is first page")
        }

    }

    const lastPage = () => {

        setPage(100)

    }


    React.useEffect(() => {

        console.log(page)
    }, [page])
    function GetResult() {
        const { isLoading, error, data } = useQuery(['repoData', page, pageSize], () =>
            fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=${pageSize}&page=${page}&sparkline=false&price_change_percentage=24h%2C%207d%2C%2014d%2C%2030d
            `).then(res =>
                res.json()
            )
        )
        if (isLoading) return 'Loading...'
        if (error) return 'An error has occurred: ' + error.message
        console.log(data)
        setResult(data)
        return (
            <div>
                <ShowResult coins={result} />

            </div>
        )
    }

    const ShowResult = () => {

        return (
            <div>
                <Container>
                    <Row >
                        {result.map((coin) =>
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




    React.useEffect(() => {

        console.log(page)

    }, [page])

    return (
        <div>

            <GridWrapper>

                <div>
                    <h1>  Crypto Analyzer</h1>
                </div>

                <p>Welcom to Crypto Analyzer </p>
                <p>You can check out new crypto news, information ,historical chart from this website</p>
            </GridWrapper>
            <GridWrapper>
                <SearchCoin />
                <Container>
                    <Row>
                        <Col xs={6} md={4}>

                        </Col>
                        <Col xs={6} md={4}>

                        </Col>
                        <Col xs={6} md={4}>
                            {['Info'].map(
                                (variant) => (
                                    <DropdownButton
                                        as={ButtonGroup}
                                        key={variant}
                                        id={`dropdown-variants-${variant}`}
                                        variant={variant.toLowerCase()}
                                        title="number of coins"
                                        onSelect={(eventKey) => setPageSize(parseInt(eventKey))}
                                    >
                                        <Dropdown.Item eventKey="9"> 9 items</Dropdown.Item>
                                        <Dropdown.Item eventKey="18">18 items</Dropdown.Item>
                                        <Dropdown.Item eventKey="27">27 items</Dropdown.Item>

                                        <Dropdown.Divider />

                                    </DropdownButton>
                                ),
                            )}
                        </Col>
                    </Row>


                </Container>
                <GetResult />

                <Container>
                    <Row>
                        <Col xs={6} md={4}>


                        </Col>
                        <Col xs={6} md={4}>
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev onClick={previousPage} />
                                {page === 1 ? <Pagination.Item disabled>{0}</Pagination.Item> : <Pagination.Item onClick={previousPage}   >{page - 1}</Pagination.Item>}
                                <Pagination.Item active>{page}</Pagination.Item>
                                <Pagination.Item onClick={nextPage} >{page + 1}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item onClick={lastPage} >{LastPage}</Pagination.Item>
                                <Pagination.Next onClick={nextPage} />
                                <Pagination.Last />
                            </Pagination>
                        </Col>
                        <Col xs={6} md={4}>


                        </Col>
                    </Row>
                </Container>

            </GridWrapper>
        </div >
    )
}

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 10em;
  margin-right: 10em;

`;

export default Home2;