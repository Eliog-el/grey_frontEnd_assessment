import React from 'react'
import { IoClose } from "react-icons/io5";
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
    const { favourites, removeFromFavourites } = useApp();
    let navigate = useNavigate();

    return (
        <div style={{
            backgroundColor: '#1e2442',
            display: 'flex',
            flexDirection: "column",
            width: "270px",
            border: 0,
            top: 0,
            left: 0,
            height: "100vh",
            zIndex: 999,
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                color: 'white',
                paddingLeft: '20px',
                paddingTop: '30px',
                width: '100%'

            }}>

                <p style={{ fontSize: '20px' }}>Favourites</p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    width: '90%',
                    gap: '20px'
                }}>
                    {
                        favourites.map((favourite) => {
                            return (
                                <div
                                    key={favourite.url}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: '10px',
                                        cursor: 'pointer',
                                        wordBreak: 'break-all'

                                    }}>
                                    <li style={{ width: '100%' }} onClick={() => navigate(`/${favourite.url.split("/")[5]}/details`)}>{favourite.name}</li>
                                    <IoClose size={20} onClick={() => { removeFromFavourites({}) }} />
                                </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
