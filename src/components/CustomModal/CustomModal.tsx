import React from 'react';
import { Modal, Backdrop, Fade, Box, Typography, IconButton, Button, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const StickyCloseWrapper = styled('div')({
    position: 'sticky',
    top: '0',
    right: '0',
    zIndex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
});

const StickyIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: 'white',
}));

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
            >
            <Fade in={isOpen}>
                <Box
                    sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '60%',
                    maxHeight: '80vh',
                    width: '100%',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    overflowY: 'auto',
                    }}
                >
                    <StickyCloseWrapper>
                        <StickyIconButton
                            edge="end"
                            color="inherit"
                            onClick={onClose}
                            aria-label="close"
                            >
                            <CloseIcon />
                        </StickyIconButton>
                    </StickyCloseWrapper>
                    <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
                        {title}
                    </Typography>
                    <div id="modal-description">{content}</div>
                    <Button onClick={onClose} variant="contained" color="primary" sx={{ marginTop: 3 }}>
                        Close
                    </Button>
                </Box>
            </Fade>
        </Modal>
  );
};

export default CustomModal;
