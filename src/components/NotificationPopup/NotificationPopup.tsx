import React, { useState } from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface NotificationProps {
    message: string;
}

const NotificationPopup: React.FC<NotificationProps> = ({ message }) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <SnackbarContent
                message={message}
                action={
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </Snackbar>
    );
};

export default NotificationPopup;
