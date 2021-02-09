
interface Nodes {
    id: String,
    name: String,
    homeworld: {
        name: String,
    },
    species: {
        name: String,
    },
    
}

interface Edges {
    cursor: string | number | null | undefined,
    node: Node
}

interface AllPeople {
    edges: [Edges],
    pageInfo: {
        hasNextPage: true,
        endCursor: String
    }
}

interface AllPeopleData {
    allPeople: AllPeople;
}

interface AllPeopleVars {
    cursor: String;
}

export type{
    Nodes,
    AllPeople,
    AllPeopleData,
    AllPeopleVars
}
