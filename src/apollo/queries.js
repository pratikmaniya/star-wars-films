import { gql } from '@apollo/client';

export const GET_FILMS = gql`
  query GetFilms {
    allFilms {
      films {
        id
        title
        releaseDate
        director
        episodeID
      }
    }
  }
`;

export const GET_FILM_DETAILS = gql`
  query GetFilmDetails($id: ID!) {
    film(id: $id) {
      title
      releaseDate
      director
      episodeID
      openingCrawl
      characterConnection {
        characters {
          name
        }
      }
    }
  }
`;
