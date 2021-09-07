import "./Header.css";


export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">
                    React & Node
                </span>
                <span className="headerTitleLg">
                    Blog
                </span>
            </div>
            <img className="headerImg" src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg"></img>
        </div>
    )
}
