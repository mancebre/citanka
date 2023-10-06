import React, { useState } from 'react';
import { Typography, Box, Container } from '@mui/material';
import SubmitText from '../../components/SubmitText/SubmitText';
import ProcessText from '../../components/ProcessText/ProcessText';
import { detectWritingSystem } from '../../utils/utils';
import SyllableBreaker from "../../services/SyllableBreaker";
import CustomModal from '../../components/CustomModal/CustomModal';

const PlainTextConvert: React.FC = () => {
    const [storyText, setStoryText] = useState('');
    const [storyWritingSystem, setStoryWritingSystem] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (text: string) => {
        setStoryText(text);
        setStoryWritingSystem(detectWritingSystem(text));
        openModal();

        const syllableBreaker = new SyllableBreaker(text, 'Цареве Уши');
        const syllables = syllableBreaker.getTextBody();
        console.log(syllables);
    };

    const handleReset = () => {
        setStoryText('');
        setStoryWritingSystem('');
    }

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    

    // let processedStory = <ProcessText text={storyText} />;
    let processedStory = <CustomModal
        isOpen={modalOpen}
        onClose={closeModal}
        title=""
        content={<ProcessText text={storyText} />} // Pass the component as content
    />;
    if (storyWritingSystem !== 'Cyrillic' && storyText.length > 0) {
        processedStory = (
            <Typography variant="h6" color="error" align="center">
                We currently support parsing Cyrillic texts exclusively.
            </Typography>
        );
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#f5f5f5"
        >
            <Container maxWidth="sm">
                <Typography variant="h3" align="center" gutterBottom>
                    Colored Overlays Convert
                </Typography>
                <SubmitText handleSubmit={handleSubmit} handleReset={handleReset} />
                <Box mt={4}>{processedStory}</Box>
            </Container>
        </Box>
    );
};

export default PlainTextConvert;
