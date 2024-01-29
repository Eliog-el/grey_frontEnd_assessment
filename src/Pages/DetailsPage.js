import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import dayjs from 'dayjs';

export default function DetailsPage({ characterUrl }) {

    let { characterId } = useParams();
    const [data, setData] = useState({})
    const { favourites, addToFavourites, removeFromFavourites } = useApp();

    const isFavourites = React.useMemo(() => {
        if (favourites.some((favourite) => favourite.url === data.url)) return true;
        return false;
    }, [favourites, data]);
    useEffect(() => {
        if (characterId) {
            fetch("https://swapi.dev/api/people/" + characterId + "/")
                .then((res) => res.json()
                ).then((data) => {
                    setData(data)
                })
        }
    }, [characterId])

    useEffect(() => {
        console.log(data, 'ff');
    }, [data])
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
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '30px' }}>{data.name}</p>
                    <div>
                        {isFavourites ? <IoHeart size={25} onClick={() => removeFromFavourites({ character: data })} /> : <IoHeartOutline size={25} onClick={() => addToFavourites({ character: data })} />}
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Height</p>
                        <p>{data.height}</p>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Mass</p>
                        <p>{data.mass}</p>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Hair Color</p>
                        <p>{data.hair_color}</p>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Skin Color</p>
                        <p>{data.skin_color}</p>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Eye Color</p>
                        <p>{data.eye_color}</p>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Birth Year</p>
                        <p>{data.birth_year}</p>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Gender</p>
                        <p>{data.gender}</p>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Birth Year</p>
                        <p>{data.birth_year}</p>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Hoeworld</p>
                        <a href={data.homeworld} target='_blank' rel="noreferrer">{data.homeworld}</a>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>FIlms</p>
                        <div>
                            <ul>
                                {data.films && data.films.map((film) => {
                                    return <li key={film}><a href={film} target='_blank' rel="noreferrer">{film}</a></li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Species</p>
                        <div>
                            <ul>
                                {data.species && data.species.map((film) => {
                                    return <li key={film}><a href={film} target='_blank' rel="noreferrer">{film}</a></li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Vehicles</p>
                        <div>
                            <ul>
                                {data.vehicles && data.vehicles.map((film) => {
                                    return <li key={film}><a href={film} target='_blank' rel="noreferrer">{film}</a></li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Starships</p>
                        <div>
                            <ul>
                                {data.starships && data.starships.map((film) => {
                                    return <li key={film}><a href={film} target='_blank' rel="noreferrer">{film}</a></li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Date Created</p>
                        <p>{dayjs(data.created).format('MMMM D, YYYY h:mm A')}</p>
                    </div>
                    <hr style={{ width: '70%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                        <p>Last Edited</p>
                        <p>{dayjs(data.edited).format('MMMM D, YYYY h:mm A')}</p>
                    </div>
                    <hr style={{ width: '70%' }} />
                </div>
                {!data && <p>No Characters Found</p>}
            </div>
        </div>
    )
}
