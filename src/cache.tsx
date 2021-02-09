import { InMemoryCache} from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allPeople: relayStylePagination(),
          
      }
    }
  }
});