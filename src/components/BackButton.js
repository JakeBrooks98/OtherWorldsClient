import { useHistory } from "react-router-dom";

export const BackButton = () => {
    let history = useHistory();
    return (
        <>
          <button className="back-btn" onClick={() => history.goBack()}>Back</button>
        </>
    );
};