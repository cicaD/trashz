import {Box, TextField, Typography} from '@mui/material'

const DescriptionPage = () => {
    return (
        <Box className="PageContainer">
            <TextField
                id="outlined-multiline-flexible"
                label="Description"
                color='info'
                multiline
                fullWidth
                maxRows={20}
            />
        </Box>
    )
}

export default DescriptionPage;
