import { Pagination } from 'antd'
import React, { useEffect, useState } from 'react'
import CharacterSummary from '../components/CharacterSummary'
import { useApp } from '../context/AppContext';

export default function SearchPage() {


    const { currentSearch } = useApp();

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        if (currentSearch) {
            fetch('https://swapi.dev/api/people/?search=' + currentSearch)
                .then((res) => res.json())
                .then((data) => {
                    console.log(Math.ceil(data.count / 10));
                    setTotalPages(data.count)
                    setData(data.results)
                })

        }
    }, [currentPage, currentSearch])

    return (
        <div style={{ display: 'flex', width: '100%', flexDirection: 'center', justifyContent: 'center' }}>
            <div style={{
                display: 'flex',
                padding: '20px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%'
            }}>
                <p style={{ fontWeight: 'bold', fontSize: '30px' }}>Search Characters</p>
                {data.map((character) => {
                    return <CharacterSummary key={character.url} character={character} />
                })}
                {!data.length && <p>No Characters Found</p>}
                <Pagination simple current={currentPage} onChange={setCurrentPage} total={totalPages} />
            </div>
        </div>
    )
}