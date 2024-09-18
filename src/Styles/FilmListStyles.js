import { styled } from '@mui/system';
import { Card, Button, Box } from '@mui/material';

// Styled Button Container
export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

// Styled Card for Films
export const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
}));

// Styled Button for Sorting
export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  padding: theme.spacing(1, 3),
  fontSize: '0.875rem',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));
