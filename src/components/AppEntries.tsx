import { gql, useQuery } from '@apollo/client'
import { AppEntry } from './AppEntry'

import {
    AllPeople,
    AllPeopleData} from '../interfaces/appPeople';

const ALL_PEOPLE = gql`
    query getAllPeople($cursor: String){
        allPeople(first: 5, after: $cursor){
            edges{
                cursor
                node{
                    id
                    name
                    homeworld{
                        name
                    }
                    species{
                        name
                    }
                } 
            }
            pageInfo{
                hasNextPage
                endCursor
            }
        }
    }

`

export const AppEntries = () => {
    
    const { loading, error, data, fetchMore } = useQuery<AllPeopleData, AllPeople>(ALL_PEOPLE);
    const hasNext = data?.allPeople.pageInfo.hasNextPage;

    if(loading) return (
        <div className="items__entries-loading">
            <i className="fas fa-spinner fa-spin"></i>
            <h1>Loading...</h1>
        </div>)
    if(error) return (
        <div className="sidebar__failed">
            <h1>Failed to Load Data</h1>
        </div>)
    if(!data) return (
        <div className="sidebar__failed">
            <h1>Not fount</h1>
        </div>)
        
    return (
        <div className="items__entries">
            {
                data.allPeople && data.allPeople.edges &&
                data.allPeople.edges.map( (people:any) => (
                    
                    <AppEntry key={people.cursor} {...people.node} onLoadMore={fetchMore({
                        variables: {
                            cursor: data.allPeople.pageInfo.endCursor
                        },

                    })}/>
                ))
            }
            {
                hasNext ?
                <div className="items__entries-loading">
                    <i className="fas fa-spinner fa-spin"></i>
                    <h1>Loading...</h1>
                </div>
                :
                <p></p>
            }
            
        </div>
    )
}
