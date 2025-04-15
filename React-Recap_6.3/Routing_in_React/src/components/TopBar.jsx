import { useNavigate } from 'react-router-dom'

function TopBar()
{
    const navigate = useNavigate();
    return (
        <div id="topBar">
            <div> This is the Global Topbar </div>
            <div className = "btnContainer">
                <button onClick = { () => { navigate("/") } }> Landing </button>
                <button onClick = { () => { navigate("/dashboard") } }> Dashboard </button>
            </div>
      </div>
    )
}

export default TopBar;