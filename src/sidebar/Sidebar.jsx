import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://queerty-prodweb.s3.amazonaws.com/2020/03/shutterstock_1617609451-670x416.jpg"></img>
            <p>lorem fef rfeh iuh iuhiudhieuh iuh iuwherw iuhdud iuohdoujdoi iojdisj d woid d wido ddoiipdd  oidjid dsjdiddjsj     wdidj sdisj d woijdw wdwd </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tach</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
       
    )
}
