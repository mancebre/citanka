import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface ConfirmationDialogProps {
    open: boolean;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
                                                                   open,
                                                                   message,
                                                                   onConfirm,
                                                                   onCancel,
                                                               }) => {
    const handleConfirm = () => {
        onConfirm();
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <Dialog open={open} onClose={handleCancel} >
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent>
                <p>{message}</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleConfirm} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;
