import React from 'react'
import styled from 'styled-components';

import { useParams, } from 'react-router-dom';


import CryptoData from './CryptoData'
import API from "./CryptoApi"
import CryptoChart from "./Chart2"

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 12em;
  margin-right: 10em;
`;

const Detail = () => {
    const [coinPrice, setCoinPrice] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const { id } = useParams();

    const formatData = (data) => {
        return data.map((el) => {
            return {
                t: el[0],
                y: el[1].toFixed(2),
            };
        });
    };

    React.useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            const [dayChart, weekChart, monthChart, yearChart] = await Promise.all([
                API.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "aud",
                        days: "1"
                    }
                }),
                API.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "aud",
                        days: "7"
                    }
                }),
                API.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "aud",
                        days: "30"
                    }
                }),
                API.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "aud",
                        days: "365"
                    }
                })
            ])
            setCoinPrice({
                day: formatData(dayChart.data.prices),
                week: formatData(weekChart.data.prices),
                month: formatData(monthChart.data.prices),
                year: formatData(yearChart.data.prices)
            })
        }
        fetch()
    }, [])

    return (
        <div>

            <GridWrapper>

                <h1> Detailed Page for <strong>{id}</strong></h1>
                <p>You can check the price chart, coin information , and articles about this coin</p>
                <p>Hope you can find this information useful :)</p>

                <CryptoChart data={coinPrice} time="day" />
                <CryptoChart data={coinPrice} time="week" />
                <CryptoChart data={coinPrice} time="month" />
                <CryptoChart data={coinPrice} time="year" />

                <CryptoData coin={id} />
                {loading ? null : <strong>Loading...</strong>}

            </GridWrapper>



        </div>
    )
}


export default Detail






