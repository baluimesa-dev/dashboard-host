import { Paper, Typography } from "@mui/material"
import React from "react"

interface ChartContainerProps {
    title: string;
    children: React.ReactNode;
}

export const ChartContainer = ({ children, title }: ChartContainerProps) => {

    return <Paper
        sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '45%',
        }}

    ><Typography variant="h6">{title}</Typography>{children}</Paper>
}