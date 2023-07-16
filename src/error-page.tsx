import { useSearchParams } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import React from "react";

const ErrorPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const error = searchParams.get('error');

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Box width="400px">
                <Typography variant="h4" gutterBottom>
                    Error
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {error || 'Oops! Something went wrong.'}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => window.history.back()}>
                    Go Back
                </Button>
            </Box>
        </Box>
    );
};

export default ErrorPage;
