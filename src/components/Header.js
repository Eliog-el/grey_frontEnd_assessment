

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';

const Header = () => {

    let location = useLocation();
    let navigate = useNavigate();

    const { history, currentSearch, setCurrentSearch } = useApp();

    useEffect(() => {
        if (currentSearch) {
            if (location.pathname !== '/search') {
                history.push('/search')
                navigate('/search')
            }
        }
    }, [currentSearch])


    return (
        <div className="Header" style={{ backgroundColor: "#ffffff", position: "sticky", top: "0", height: '30px', zIndex: 999 }}>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingLeft: "16px", paddingRight: "16px", borderBottom: "1px solid #e6e6e6", backgroundColor: "#ffffff", }}>
                <div style={{
                    position: 'absolute',
                    top: -15,
                    left: 20,
                    cursor: 'pointer'
                }} onClick={() => navigate('/')}>
                    <p style={{ fontSize: "30px", fontWeight: "bold" }}>Star Wars API</p>
                </div>

                <div style={{ display: "flex", alignItems: "center", width: "500px", padding: "15px 5px" }}>
                    <Input
                        placeholder="Search here"
                        prefix={<SearchOutlined className="site-form-item-icon" />}
                        suffix={
                            <Tooltip title="Clear Search" onClick={() => setCurrentSearch('')}>
                                <CloseCircleOutlined
                                    style={{
                                        color: 'rgba(0,0,0,.45)',
                                    }}
                                />
                            </Tooltip>
                        }
                        value={currentSearch}
                        onChange={(e) => setCurrentSearch(e.target.value)}
                    />
                </div>
            </div>


        </div>
    );
};

export default Header;
