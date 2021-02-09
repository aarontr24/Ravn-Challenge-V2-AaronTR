import { gql, useQuery } from "@apollo/client"
import { useContext } from "react";
import { InfoContext } from '../infoContext/infoContext'
import { ContextType} from '../interfaces/infoContext'


export const AppInfo = () => {

    const {info} = useContext(InfoContext) as ContextType;

    const idPerson = info.idPerson;
    
    const GET_PERSON = gql`
    query getPerson($idPerson: ID) {
        person(id: $idPerson){
            eyeColor
            hairColor
            skinColor
            birthYear
            vehicleConnection{
                vehicles{
                    id
                    name
                }
            }
        }
    }
    `

    const { loading, error, data } = useQuery(GET_PERSON, {
        variables: {idPerson}
    });

    return (
        <>
           {    
                error ?
                <div className="info__content"></div>
                :
                loading ?
                <div className="info__content"></div>
                :
                <div className="info__content">
                    <div className="info__general">
                        <h3>General Information</h3>
                        
                        <div className="info__field">
                            <h3 className="info__layer">
                                Eye Color
                            </h3>
                            
                            <h3 className="info__value">
                                {data.person.eyeColor}
                            </h3>
                        </div>

                        <div className="info__field">
                            <h3 className="info__layer">
                                Hair Color
                            </h3>
                            
                            <h3 className="info__value">
                                {data.person.hairColor}
                            </h3>
                        </div>

                        <div className="info__field">
                            <h3 className="info__layer">
                                Skin Color
                            </h3>
                            
                            <h3 className="info__value">
                                {data.person.skinColor}
                            </h3>
                        </div>

                        <div className="info__field">
                            <h3 className="info__layer">
                                Birth Year
                            </h3>
                            
                            <h3 className="info__value">
                                {data.person.birthYear}
                            </h3>
                        </div>
                    </div>
                    
                    <div className="info__vehicles">
                        <h3>Vehicles</h3>
                            {
                                data.person.vehicleConnection.vehicles.map((vehicle:any) => (
                                    <div key={vehicle.id} className="info__field">
                                        <h3 className="info__layer">
                                            {vehicle.name}
                                        </h3>
                                    </div>
                                ))
                            }
                    </div>
                </div>
           }

        </>
    )
}
