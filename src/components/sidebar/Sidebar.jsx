import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem item1">
        <span className="sidebarTitle">TODAY'S FUN FACT</span>
        <img
          class="factsImg"
          src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/og.4ad05d4125a5.png"
          alt=""
        />
        <p id="fact">
          Mozilla Firefox’s logo is a red panda and not a fox. You might not think it makes sense with the word “fox” being in the name but a very little known fact is that the red panda’s nickname is “firefox.”
        </p>
      </div>
      <div className="sidebarItem" >
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Money">
              Money
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
