import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Grid2, CardContent } from '@mui/material';

import { GET_FILMS } from '../apollo/queries';
import { ButtonContainer, StyledCard, StyledButton } from '../Styles/FilmListStyles';

const FilmList = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_FILMS, {
    fetchPolicy: 'cache-first', // Use cached data if available
  });
  const [sortKey, setSortKey] = useState('title');

  if (loading) return <Typography align="center" variant="h6">Loading...</Typography>;
  if (error) {
    console.error("GraphQL Error:", error);
    return <Typography align="center" color="error">There was a problem fetching films. Please try again later.</Typography>;
  }

  const sortFilms = (films) => {
    return [...films].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
      return 0;
    });
  };

  const onFilmClick = (id) => {
    navigate(`/films/${id}`);
  };

  return (
    <Container maxWidth="lg" style={{ paddingTop: '40px' }}>
      {/* Button Container for Sorting Options */}
      <ButtonContainer>
        <StyledButton onClick={() => setSortKey('title')}>
          Sort by Title
        </StyledButton>
        <StyledButton onClick={() => setSortKey('releaseDate')}>
          Sort by Release Date
        </StyledButton>
        <StyledButton onClick={() => setSortKey('episodeID')}>
          Sort by Episode
        </StyledButton>
      </ButtonContainer>

      <Grid2 container spacing={4}>
        {
          sortFilms && sortFilms.length
            ?
            sortFilms(data.allFilms.films).map((film) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={film.id}>
                <StyledCard onClick={() => onFilmClick(film.id)}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {film.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Episode {film.episodeID}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Release Date: {film.releaseDate}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Director: {film.director}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid2>
            ))
            :
            <Typography variant="h5" gutterBottom>
              No Films Found
            </Typography>
        }
      </Grid2>
    </Container>
  );
};

export default FilmList;
