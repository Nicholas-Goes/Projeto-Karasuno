import './List.css';

function List() {
    return (
        <div>
            <h1 className='list-title'>Players</h1>
            <ul className="team-list bg">
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Daichi Sawamura</h2>
                </li>
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Koshi Sugawara</h2>         
                </li>
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Asahi Azumane</h2>                 
                </li>
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Yu Nishinoya</h2>                 
                </li>
            </ul>
            <ul className="team-list bg2">
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Ryunosuke Tanaka</h2>
                </li>
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Chikara Ennoshita</h2>         
                </li>
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Kazuhito Narita</h2>                 
                </li>
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Hisashi Kinoshita</h2>                 
                </li>
            </ul>
            <ul className="team-list bg3">
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Tobio Kageyama</h2>
                </li>
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Shoyo Hinata</h2>         
                </li>
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Kei Tsukishima</h2>                 
                </li>
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Tadashi Yamaguchi</h2>                 
                </li>
            </ul>
            <h1 className='list-title'>Management</h1>
            <ul className="team-list">
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Ittetsu Takeda</h2>
                </li>
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Kiyoko Shimizu</h2>         
                </li>
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Hitoka Yachi</h2>                 
                </li>
            </ul>
            <h1 className='list-title'>Trainer</h1>
            <ul className="team-list">
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Keishin Ukai</h2>
                </li>
                <li>
                    <div className="icon"></div>
                    <h2 className='player-name'>Ikkei Ukai</h2>         
                </li>
            </ul>
        </div>
    )
}

export default List;