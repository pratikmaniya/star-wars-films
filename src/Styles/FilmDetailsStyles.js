import { styled } from '@mui/system';
import { Card, Box, Button } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
}));

export const CharacterBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
}));

export const BackButton = styled(Button)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));
