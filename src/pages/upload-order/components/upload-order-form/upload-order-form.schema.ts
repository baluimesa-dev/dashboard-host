import { z } from "zod";
import { Order } from "../../../../../bff/generated/graphql";
import { FORM_FIELDS } from "./upload-order-form.constants";

export interface FormOder extends Partial<Order> {}

export const formSchema = z.object({
    orderInformation: z.object({
        orderNumber: z.string().min(1, FORM_FIELDS.orderInformation.orderNumber.error),
    }),
    buyerInformation: z.object({   
        contactName: z.string().min(1, FORM_FIELDS.buyerInformation.contactName.error),
    }),
    supplierInformation: z.object({
        supplierName: z.string().min(1, FORM_FIELDS.supplierInformation.supplierName.error),
    }),
});