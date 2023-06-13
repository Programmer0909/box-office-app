import { useParams } from "react-router-dom";

const Show = () => {
    const {showId} = useParams();

    return <div>Show page for show id {showId}</div>
}

export default Show;