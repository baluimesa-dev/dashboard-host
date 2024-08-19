export const MOCK_PARSED_RESPONSE = {
    orderInformation: {
        orderNumber: "12345",
        orderDate: "2024-08-15",
        deliveryDate: "2024-08-22",
        purchaseOrderNumber: "PO-987654"
    },
    buyerInformation: {
        companyName: "Tech Solutions Inc.",
        contactName: "John Doe",
        address: "1234 Innovation Drive, Suite 100, Silicon Valley, CA 94025",
        coordinates: {
            latitude: 37.38605,
            longitude: -122.08385
        },
        phoneNumber: "(555) 123-4567",
        emailAddress: "johndoe@techsolutions.com"
    },
    supplierInformation: {
        supplierName: "ElectroParts Co.",
        contactName: "Jane Smith",
        address: "5678 Circuit Lane, Austin, TX 73301",
        phoneNumber: "(555) 987-6543",
        emailAddress: "janesmith@electroparts.com"
    },
    itemDetails: [
        {
            itemNumber: "001",
            description: "Resistor 10k Ohm 1/4W",
            quantity: 500,
            unitPrice: 0.1,
            totalPrice: 50,
            manufacturerPartNumber: "RES-10K-1/4W",
            leadTime: "2 days",
            countryOfOrigin: "USA"
        },
        {
            itemNumber: "002",
            description: "Capacitor 100uF 25V",
            quantity: 300,
            unitPrice: 0.15,
            totalPrice: 45,
            manufacturerPartNumber: "CAP-100UF-25V",
            leadTime: "3 days",
            countryOfOrigin: "China"
        },
        {
            itemNumber: "003",
            description: "Diode 1N4007",
            quantity: 200,
            unitPrice: 0.08,
            totalPrice: 16,
            manufacturerPartNumber: "DIO-1N4007",
            leadTime: "2 days",
            countryOfOrigin: "Taiwan"
        },
        {
            itemNumber: "004",
            description: "MOSFET N-Channel 60V 30A",
            quantity: 100,
            unitPrice: 1.5,
            totalPrice: 150,
            manufacturerPartNumber: "MOS-N60V30A",
            leadTime: "5 days",
            countryOfOrigin: "South Korea"
        },
        {
            itemNumber: "005",
            description: "IC 555 Timer",
            quantity: 150,
            unitPrice: 0.75,
            totalPrice: 112.5,
            manufacturerPartNumber: "IC-555TIMER",
            leadTime: "4 days",
            countryOfOrigin: "Malaysia"
        }
    ],
    orderTotals: {
        subtotal: 373.5,
        shippingCosts: 20,
        tax: 29.88,
        totalOrderCost: 423.38
    },
    paymentInformation: {
        paymentTerms: "Net 30 days",
        totalAmountDue: 423.38,
        dueDate: "2024-09-14"
    },
    shippingAndDeliveryInformation: {
        shippingMethod: "Ground Shipping (5-7 business days)",
        deliveryAddress: "Tech Solutions Inc., 1234 Innovation Drive, Suite 100, Silicon Valley, CA 94025",
        specialInstructions: "Please ensure all components are packed in anti-static bags.",
        trackingNumber: "[To be provided by the supplier]"
    },
    additionalInformation: {
        comments: "Please include a certificate of compliance for all components.",
        certificationRequirements: [
            "RoHS Compliance",
            "ISO 9001 Certification"
        ],
        warrantyInformation: "1-year warranty on all components",
        inspectionRequirements: "All items must be inspected for damage upon delivery."
    },
    approvalAndSignatures: {
        authorizedBuyerSignature: "John Doe",
        dateOfApprovalBuyer: "2024-08-15",
        authorizedSupplierSignature: "Jane Smith",
        dateOfApprovalSupplier: "2024-08-15"
    }
}