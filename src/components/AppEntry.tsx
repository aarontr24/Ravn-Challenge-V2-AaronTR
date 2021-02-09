import { useContext } from "react";
import { InfoContext } from '../infoContext/infoContext'
import { Nodes } from "../interfaces/appPeople";
import { ContextType } from "../interfaces/infoContext";

export const AppEntry = (people: Nodes) => {

    const { dispatch } = useContext(InfoContext) as ContextType;

    const handleClick = () => {
        dispatch({
            type: 'activeInfo',
            payload: {
                idPerson: people.id
            }
        })
    }
    
    return (
        <div 
            className="items__entry pointer"
            onClick={handleClick}
        >
            <div className="items__entry-nametype">
                <h2>
                    {people.name}
                </h2>
                {
                    people.species ?
                        <p>{people.species.name} form {people.homeworld.name}</p> :
                        <p>Human form {people.homeworld.name}</p>
                }
                
            </div>
            <div className="items__entry-arrow">
                <i className="fas fa-angle-right"></i>
            </div>
        </div>
    )
}
