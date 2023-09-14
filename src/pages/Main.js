import Carou from "../section/Carou";
import About from "../section/About";
import Blog from "../section/Blog";
import FaQ from "../section/FaQ";
import Talkshow from "../section/Talkshow";
import Sponsor from "../section/Sponsor";

function Main() {
    return (
        <>
        <div>
            <div className="sec1">
            <div id="Home"></div>
            <Carou />
            </div>
            <div className="sec2">
            <div id="About"></div>
            <About />
            </div>
            <div className="sec3">
            <div id="Comp"></div>
            <Blog />
            </div>
            <div className="sec4">
            <Sponsor />
            </div>
            <div className="sec1">
            <div id="Talkshow"></div>
            <Talkshow />
            </div>
            <div className="sec1">
            <div id="FaQ"></div>
            <FaQ />
            </div>
            </div>
        </>
    )}
export default Main;