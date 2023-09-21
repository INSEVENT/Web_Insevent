import Talkshow from "../section/Talkshow";
import { useEffect } from "react";

function Talkshows(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="sec1">
            <Talkshow />
        </div>
    )
}
export default Talkshows;