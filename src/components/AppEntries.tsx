import { AppEntry } from './AppEntry'

export const AppEntries = () => {
    return (
        <div className="items__entries">
            <AppEntry />
            <AppEntry />
            <AppEntry />
            <AppEntry />
            <AppEntry />
            <div className="items__entries-loading">
                <i className="fas fa-spinner fa-spin"></i>
                <h1>Loading...</h1> 
            </div>
            
        </div>
    )
}
