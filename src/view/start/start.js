import React from 'react';
import { useHistory } from 'react-router';
import { getMainViewRoute } from '../../constants/routes/routes';

const Start = () => {

    const history = useHistory();

    const getStartHandler = () => {
        history.push(getMainViewRoute());
    }

    return(
        <section>
            <div>
                <button onClick={getStartHandler} >Start </button>
            </div>
        </section>
    )
}

export default Start;