import React, { useEffect, useState } from 'react'
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

export default function CharacterSummary({ character }) {
    let navigate = useNavigate();
    const [id, setId] = useState('')
    // url.split("/")[-2]
    const { favourites, addToFavourites, removeFromFavourites } = useApp();
    const isFavourites = React.useMemo(() => {
        if (favourites.some((favourite) => favourite.url === character.url)) return true;
        return false;
    }, [favourites, character]);

    useEffect(() => {
        if (character.url) {
            setId(character.url.split("/")[5])
        }
    }, [character])
    return (
        <div style={{
            width: '100%',
            paddingTop: '20px',
            cursor: 'pointer'
        }} >
            <div style={{
                width: '100%',
                display: 'flex'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: '5px'
                }} onClick={() => navigate('/' + id + '/details')}>
                    <div style={{
                        display: 'flex',
                        width: '60%',
                        gap: '10px'
                    }}>
                        <span style={{ fontWeight: 'bold' }}>{character.name}</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: '60%',
                        gap: '10px'
                    }}>
                        <span style={{ fontWeight: 'bold' }}>Gender:</span>
                        <span >{character.gender}</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: '60%',
                        gap: '10px'
                    }}>
                        <span style={{ fontWeight: 'bold' }}>Height:</span>
                        <span >{character.height}</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: '60%',
                        gap: '10px'
                    }}>
                        <span style={{ fontWeight: 'bold' }}>Number of Films:</span>
                        <span >{character.films.length}</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: '60%',
                        gap: '10px'
                    }}>
                        <span style={{ fontWeight: 'bold' }}>Date Created:</span>
                        <span >{dayjs(character.created).format('MMMM D, YYYY h:mm A')}</span>
                    </div>
                </div>
                <div>
                    {isFavourites ? <IoHeart size={25} onClick={() => removeFromFavourites({ character })} /> : <IoHeartOutline size={25} onClick={() => addToFavourites({ character })} />}
                </div>
            </div>
            <hr />
        </div>
    )
}
