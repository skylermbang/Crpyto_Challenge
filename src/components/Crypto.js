//REACT
import React from 'react';
// HELPER
import './Crypto.css'
import styled from 'styled-components'
//BOOTSTRAP
import Card from 'react-bootstrap/Card'
//COMPONENTS
import AddCoin from './AddCoin'
import CryptoList from './CryptoList'



function Crypto() {
  return (

    <>

      <div className='GridWrapper'>
        <h2> Crypto Analyzer</h2>
        <p>Select the crpyto currency you want to add.</p>
        <p> Click the added crypto currency to get detailed information</p>
      </div>
      <GridWrapper>
        <Card style={{ width: '40rem' }}>
          <Card.Body>
            <Card.Title> <h1> Start Using Our Watchlist</h1></Card.Title>
            <Card.Img variant="top" src="https://cdn.wccftech.com/wp-content/uploads/2022/05/16415655339687.jpg" />
          </Card.Body>
        </Card>

      </GridWrapper>
      <hr></hr>

      <div className='GridWrapper'>
        <AddCoin />
      </div>
      <hr></hr>
      <div className='GridWrapper'>
        <CryptoList />
      </div>

    </>
  )
}

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 10em;
  margin-right: 10em;

`;
export default Crypto