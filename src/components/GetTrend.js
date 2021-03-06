//REACT
import React from 'react'
//BOOTSTRAP
import { Container, Row, Col, Table } from 'react-bootstrap'
// HELPER
import classnames from 'classnames';
import styled from 'styled-components'
import { useQuery } from "react-query";




function GetTrend() {
    const [page, setPage] = React.useState(1);
    const lastPage = 5;
    const nextPage = () => {
        setPage(page + 1)
    }
    const previousPage = () => {
        if (page != 1) { setPage(page - 1) } else if (page === 1) {
            console.log("this is first page")
        }

    }
    function formatMoney(number) {
        number = parseInt(number)
        return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }


    const { isLoading, error, data } = useQuery(['repoData', page], () =>
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&price_change_percentage=24h`).then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    // console.log(data)


    return (
        <div>
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Price(AUD)</th>
                            <th>Mkt Cap</th>
                            <th>High in 24hr</th>
                            <th>Lowest in 24hr</th>
                        </tr>
                    </thead>
                    {/* <tbody> */}
                    <tbody>
                        {data.map((coin) =>
                            // <Link key={coin.id} to={`/cryptos/${coin.id}`}>
                            <tr key={coin.id}>
                                <td>{coin.market_cap_rank}</td>
                                <td>{coin.name}</td>
                                <td>{coin.symbol}</td>
                                <td>{formatMoney(coin.current_price)}</td>
                                <td>{formatMoney(coin.market_cap)}</td>
                                <td>{formatMoney(coin.high_24h)}</td>
                                <td>{formatMoney(coin.low_24h)}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            current page: {page}

            <Container>
                <Row>
                    <Col xs={6} md={4}>


                    </Col>
                    <Col xs={6} md={4}>
                        <Pagination>
                            <ul
                                className='pagination-container'
                            >
                                <li
                                    className={classnames('pagination-item', {
                                        disabled: page === 1
                                    })}
                                    onClick={previousPage}
                                >
                                    <div className="arrow left" />
                                </li>
                                {page === 1 ? <li
                                    className={classnames('pagination-item', {
                                        disabled: page === 1
                                    })}
                                    onClick={previousPage}
                                    style={{ display: "none" }}
                                >      {page - 1}
                                </li> : <li
                                    className={classnames('pagination-item', {
                                        disabled: page === 1
                                    })}
                                    onClick={previousPage}
                                >      {page - 1}
                                </li>}

                                <li
                                    className='pagination-item'
                                // onClick=
                                >      {page}
                                </li>
                                {page === 5 ? <li
                                    className={classnames('pagination-item', {
                                        disabled: page === 5
                                    })}
                                    onClick={nextPage}
                                    style={{ display: "none" }}
                                >      {page + 1}
                                </li> : <li
                                    className={classnames('pagination-item', {
                                        disabled: page === 5
                                    })}
                                    onClick={nextPage}
                                >      {page + 1}
                                </li>}




                                <li
                                    className={classnames('pagination-item', {
                                        disabled: page === lastPage
                                    })}
                                    onClick={nextPage}
                                >
                                    <div className="arrow right" />
                                </li>
                            </ul>
                        </Pagination>
                    </Col>
                    <Col xs={6} md={4}>


                    </Col>
                </Row>
            </Container>

        </div >

    )
}

const Pagination = styled.div`
.pagination-container {
    display: flex;

    text-align:center
    list-style-type: none;
  
    .pagination-item {
      padding: 0 12px;
      height: 32px;
      text-align: center;
      margin: auto 4px;
      color: rgba(0, 0, 0, 0.87);
      display: flex;
      box-sizing: border-box;
      align-items: center;
      letter-spacing: 0.01071em;
      border-radius: 16px;
      line-height: 1.43;
      font-size: 13px;
      min-width: 32px;
  
      &.dots:hover {
        background-color: transparent;
        cursor: default;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        cursor: pointer;
      }
  
      &.selected {
        background-color: rgba(0, 0, 0, 0.08);
      }
  
      .arrow {
        &::before {
          position: relative;
          /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
          content: '';
          /* By using an em scale, the arrows will size with the font */
          display: inline-block;
          width: 0.4em;
          height: 0.4em;
          border-right: 0.12em solid rgba(0, 0, 0, 0.87);
          border-top: 0.12em solid rgba(0, 0, 0, 0.87);
        }
  
        &.left {
          transform: rotate(-135deg) translate(-50%);
        }
  
        &.right {
          transform: rotate(45deg);
        }
      }
  
      &.disabled {
        pointer-events: none;
  
        .arrow::before {
          border-right: 0.12em solid rgba(0, 0, 0, 0.43);
          border-top: 0.12em solid rgba(0, 0, 0, 0.43);
        }
  
        &:hover {
          background-color: transparent;
          cursor: default;
        }
      }
    }
  }`;

export default GetTrend