import { Snackbar, Alert } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

type SnackbarContextType = {
    showSnackbar: (message: string, severity?: 'success' | 'info' | 'warning' | 'error') => void;
  };
  
  const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);
  
  export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) {
      throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return context;
  };
  
  export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState<'success' | 'info' | 'warning' | 'error'>('info');
  
    const showSnackbar = (message: string, severity: 'success' | 'info' | 'warning' | 'error' = 'info') => {
      setMessage(message);
      setSeverity(severity);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <SnackbarContext.Provider value={{ showSnackbar }}>
        {children}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </SnackbarContext.Provider>
    );
  };
  