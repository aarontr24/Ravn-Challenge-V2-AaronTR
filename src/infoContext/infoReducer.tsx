
export const infoReducer = (state={}, action: any) => {
    switch (action.type) {
        case 'activeInfo':

            return {
                ...action.payload,
                idPerson: action.payload.idPerson
            }
    
        default:
            return state;
    }
}
