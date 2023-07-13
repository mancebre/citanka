import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

type SubmitTextProps = {
    handleSubmit: (text: string) => void;
};

const SubmitText: React.FC<SubmitTextProps> = ({ handleSubmit }) => {
    const [text, setText] = useState('');

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleButtonClick = () => {
        handleSubmit(text);
    };

    const handleReset = () => {
        setText('');
    };

    const characterCount = text.length;
    const maxLength = 25000; // Maximum character count

    const counterStyle = {
        color: characterCount === maxLength ? 'red' : 'initial',
        fontWeight: characterCount === maxLength ? 'bold' : 'normal',
        fontSize: characterCount === maxLength ? '1.2rem' : 'inherit',
    };

    return (
        <Box>
            <TextField
                value={text}
                onChange={handleTextAreaChange}
                label="Enter your text here"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                margin="normal"
                inputProps={{
                    maxLength: maxLength,
                }}
            />
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                <Typography variant="caption" style={counterStyle}>
                    {characterCount}/{maxLength}
                </Typography>
                <Button variant="outlined" onClick={handleReset}>
                    Reset
                </Button>
            </Box>
            <Box mt={1}>
                <Button disabled={!text} onClick={handleButtonClick} variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default SubmitText;
