//REACT
import React from 'react'
// HELPER
import styled from 'styled-components'
//BOOTSTRAP
import { Card } from 'react-bootstrap'
//COMPONENTS
import GetTrend from '../GetTrend'

function Trends() {
    return (
        <div>
            <GridWrapper>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title> <h1> Trending Cryptocurrencies</h1></Card.Title>
                        <Card.Img variant="top" src="https://m.foolcdn.com/media/affiliates/images/Cryptos_wqo5aDl.width-1200.jpg" />
                        <Card.Text>
                            Trending Cryptocurrencies based on volume
                        </Card.Text>

                    </Card.Body>
                </Card>
            </GridWrapper>
            <GridWrapper>
                <div>
                    <GetTrend />
                </div>
            </GridWrapper>
        </div>
    )
}

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 10em;
  margin-right: 10em;

`;


export default Trends