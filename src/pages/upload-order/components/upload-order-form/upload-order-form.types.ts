import { z } from "zod";
import { formSchema } from "./upload-order-form.schema";

export type FormValues = z.infer<typeof formSchema>;

export interface UploadOrderFormProps {
    onSubmit?: (data: FormValues) => void;
}