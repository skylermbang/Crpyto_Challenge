//REACT
import React from 'react'
// HELPER
import styled from 'styled-components';
//BOOTSTRAP
import { Pagination, Container, Row, Col, DropdownButton, Dropdown, ButtonGroup, Image } from 'react-bootstrap'

//COMPONENTS
import GetResult from '../GetResult'
import SearchCoin from '../SearchCoin'

const Home2 = () => {
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(9);  // default show 9 coins per page   9,18,27

    // const [result, setResult] = React.useState([]);  // default show 27 coins per page   9
    const LastPage = 100;

    const nextPage = () => {
        setPage(page + 1)
    }

    const previousPage = () => {
        if (page != 1) { setPage(page - 1) } else if (page === 1) {
            // console.log("this is first page")
        }

    }

    const lastPage = () => {
        setPage(100)
    }
    const firstPage = () => {
        setPage(1)
    }


    return (
        <div>

            <GridWrapper>
                <Container>
                    <Row>
                        <Col>
                            <h1>  Crypto Analyzer</h1>

                            <p>Welcom to Crypto Analyzer </p>
                            <p>Please use left sidebar to check out the page</p>
                            <Image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdgRk48%2FbtrEou2a3ob%2F579kQ4jb68QkUSqeI41KEk%2Fimg.png" style={{ borderRadius: "20px" }} />
                        </Col>
                        <Col> <Image src="https://images.unsplash.com/photo-1616635481720-7fd37f8cfc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" style={{ width: "600px", height: "500px", borderRadius: "20px" }} /></Col>
                    </Row>
                </Container>

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
                <GetResult page={page} pageSize={pageSize} />

                <Container>
                    <Row>
                        <Col xs={6} md={4}>


                        </Col>
                        <Col xs={6} md={4}>
                            <Pagination>
                                <Pagination.First onClick={firstPage} />
                                <Pagination.Prev onClick={previousPage} />
                                {page === 1 ? <Pagination.Item disabled style={{ display: "none" }}>{0}</Pagination.Item> : <Pagination.Item onClick={previousPage}   >{page - 1}</Pagination.Item>}
                                <Pagination.Item active>{page}</Pagination.Item>
                                {/* <Pagination.Item onClick={nextPage} >{page + 1}</Pagination.Item> */}
                                {page > 99 ? <Pagination.Item disabled style={{ display: "none" }}></Pagination.Item> : <Pagination.Item onClick={nextPage} >{page + 1}</Pagination.Item>}
                                <Pagination.Ellipsis />

                                {page > 99 ? <Pagination.Item disabled style={{ display: "none" }} onClick={lastPage}></Pagination.Item> : <Pagination.Item onClick={lastPage} >{LastPage}</Pagination.Item>}
                                <Pagination.Last onClick={lastPage} />
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