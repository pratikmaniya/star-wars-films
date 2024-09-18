import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container, Grid2, CardContent, Box } from '@mui/material';

import { GET_FILM_DETAILS } from '../apollo/queries';
import { StyledCard, CharacterBox, BackButton } from '../Styles/FilmDetailsStyles';

const FilmDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_FILM_DETAILS, { variables: { id } });

  if (loading) return <Typography align="center" variant="h6">Loading...</Typography>;
  if (error) {
    console.error("GraphQL Error:", error);
    return <Typography align="center" color="error">There was a problem fetching film details. Please try again later.</Typography>;
  }

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="md" style={{ paddingTop: '40px' }}>
      <BackButton variant="contained" color="primary" onClick={handleBackClick}>
        Back to Films
      </BackButton>

      <StyledCard>
        {
          data && data.film
            ?
            <CardContent>
              <Typography variant="h3" gutterBottom>
                {data.film.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Episode {data.film.episodeID} | Release Date: {data.film.releaseDate} | Director: {data.film.director}
              </Typography>

              <Box mt={4}>
                <Typography variant="h5" gutterBottom>Opening Crawl</Typography>
                <Typography variant="body1" paragraph>
                  {data.film.openingCrawl}
                </Typography>
              </Box>

              <Box mt={4}>
                <Typography variant="h5" gutterBottom>Characters</Typography>
                <Grid2 container spacing={2}>
                  {data.film.characterConnection.characters.map((character) => (
                    <Grid2 size={{ xs: 6, sm: 4, md: 3 }} key={character.name}>
                      <CharacterBox>
                        <Typography variant="body1" align="center">
                          {character.name}
                        </Typography>
                      </CharacterBox>
                    </Grid2>
                  ))}
                </Grid2>
              </Box>
            </CardContent>
            :
            <Typography variant="h5" gutterBottom>
              No data Found
            </Typography>
        }
      </StyledCard>
    </Container>
  );
};

export default FilmDetails;
