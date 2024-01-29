import React, { useEffect, useState } from 'react'
import CharacterSummary from '../components/CharacterSummary'
import { Pagination } from 'antd';

export default function HomePage() {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/people/?page=' + currentPage)
            .then((res) => res.json())
            .then((data) => {
                setTotalPages(data.count)
                console.log(data.results)
                setData(data.results)
            })
        // console.log(currentPage)
    }, [currentPage])

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
                <p style={{ fontWeight: 'bold', fontSize: '30px' }}>All Characters</p>
                {data.map((character) => {
                    return <CharacterSummary key={character.url} character={character} />
                })}
                {!data.length && <p>No Characters Found</p>}
                <Pagination simple current={currentPage} onChange={setCurrentPage} total={totalPages} />
            </div>
        </div>
    )
}
