import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, CircularProgress, Paper, TextField, Typography } from '@mui/material';
import get from 'lodash/get';
import React from 'react';
import { Controller, FieldErrors, useForm } from 'react-hook-form';
import { useSnackbar } from "../../../../contexts";
import { DEFAULT_VALUES, FIELD_NAME_CUSTOMER_NAME, FIELD_NAME_ORDER_NUMBER, FIELD_NAME_SUPPLIER_NAME, FORM_FIELDS } from './upload-order-form.constants';
import { formSchema } from './upload-order-form.schema';
import { FormValues, UploadOrderFormProps } from './upload-order-form.types';
import { handleFileUpload } from './upload-order-form.utils';


export const UploadOrderForm = (props: UploadOrderFormProps) => {

  const [isUploading, setIsUploading] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { showSnackbar } = useSnackbar();

  const { control,
    formState: { errors },
    handleSubmit,
    reset, } = useForm<FormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    
    try {
      setIsSubmitting(true);
      props.onSubmit?.(data);
      console.log(data);
    } catch (error) {
      showSnackbar('Failed to submit order', 'error');
      console.error(error);
    }
    console.log("🚀 ~ onSubmit ~ data:", data)
    setIsSubmitting(false)
  };

  const onErrorSubmit = (errors: FieldErrors<Partial<FormValues>>) => {
    console.log(errors);
  }

  const onFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setIsUploading(true);
      const jsonResponse = await handleFileUpload(event);
      reset({
      ...DEFAULT_VALUES,
      ...jsonResponse
    })
    } catch (error) {
      showSnackbar('Failed to submit order', 'error');
      console.error(error);
    }
    setIsUploading(false);
  }

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6">Order information</Typography>
      <Box component="form"  autoComplete="off" onSubmit={handleSubmit(onSubmit, onErrorSubmit)}>
        <Controller
          name={FIELD_NAME_ORDER_NUMBER}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              role="textinput"
              aria-label={FORM_FIELDS.orderInformation.orderNumber.label}
              label={FORM_FIELDS.orderInformation.orderNumber.label}
              placeholder={FORM_FIELDS.orderInformation.orderNumber.placeholder}
              error={!!get(errors, field?.name)}
              helperText={FORM_FIELDS.orderInformation.orderNumber.error}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name={FIELD_NAME_CUSTOMER_NAME}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              aria-label={FORM_FIELDS.buyerInformation.contactName.label}
              label={FORM_FIELDS.buyerInformation.contactName.label}
              placeholder={FORM_FIELDS.buyerInformation.contactName.placeholder}
              error={!!get(errors, field?.name)}
              helperText={FORM_FIELDS.buyerInformation.contactName.error}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name={FIELD_NAME_SUPPLIER_NAME}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              aria-label={FORM_FIELDS.supplierInformation.supplierName.label}
              label={FORM_FIELDS.supplierInformation.supplierName.label}
              placeholder={FORM_FIELDS.supplierInformation.supplierName.placeholder}
              error={!!get(errors, field?.name)}
              helperText={FORM_FIELDS.supplierInformation.supplierName.error}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
          )}
        />
        <Button
          variant="contained"
          fullWidth
          component="label"
          aria-label="Upload file button"
          disabled={isUploading}
        >

         {isUploading ? <CircularProgress  color="primary"/> : 'Upload File' }
         <input
            type="file"
            hidden
            accept="application/document"
            aria-label="Upload file input"
            onChange={onFileUpload}
          />
        </Button>
        <Button
          variant="contained"
          type="submit"
          fullWidth
          aria-label="Submit order button"
          style={{ marginTop: 16 }}
        >
         {isSubmitting ? <CircularProgress  color="primary"/> : 'Submit' }
        </Button>
      </Box>
    </Paper>
  );
};
