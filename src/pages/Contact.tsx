import { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, Typography, Box, Select, MenuItem, Button, FormHelperText, Alert } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Contact = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [inputContact, setInputContact] = useState<string>('');
    const [request, setRequest] = useState<string>('');
    const [isFilled, setIsFilled] = useState<boolean>(true);
    const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    const handleChange = (event: any) => {
        setRequest(event.target.value as string);
    };

    useEffect(() => {
        document.title = "Contact";
    }, [])

    useEffect(() => {
        const validaeForm = () => {

            setName(name.replace(/[^a-zA-z]/g, ""));

            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                setIsValidEmail(false);
            }
            let value = inputContact.replace(/\D/g, "");
            if (value.length > 0 && value.length <= 2) {
                value = `+${value}`;
            } else if (value.length > 0 && value.length <= 6) {
                value = `+${value.slice(0, 2)}-${value.slice(2)}`;
            } else if (value.length > 0 && value.length <= 12) {
                value = `+${value.slice(0, 2)}-${value.slice(2, 6)}-${value.slice(6, 12)}`;
            }
            setInputContact(value);
            if (name !== "" && isValidEmail === false && inputContact !== "" && request !== "") {
                setIsFilled(false);
            }
        }

        validaeForm();
    }, [name, email, inputContact, request]);

    const handleSubmission = () => {
        setName("");
        setEmail("");
        setInputContact("");
        setRequest("");
        setIsFilled(true);
        setFormSubmitted(true);
    }

    return (
        <Box gap={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: 3 }}>
            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant='h3'>Fill out the form and lets get connected</Typography>
            </Grid>
            <Grid gap={8} sx={{ width: { xs: "100%", sm: "400px", md: "800px" }, padding: "15px", borderRadius: "8px", transition: "box-shadow 0.3s ease", backgroundColor: "#FFFFFF", boxShadow: "0 4px 8px rgba(128, 128, 128, 0.4), 0 2px 4px rgba(128, 128, 128, 0.3)" }}>
                <FormControl fullWidth required sx={{ marginBottom: 3 }}>
                    <InputLabel htmlFor="inputName">Name</InputLabel>
                    <Input value={name} onChange={(e) => { setName(e.target.value) }} aria-describedby="my-helper-text" />
                    <FormHelperText>Enter your full name.</FormHelperText>
                </FormControl>
                <FormControl fullWidth required sx={{ marginBottom: 3 }}>
                    <InputLabel htmlFor="inputEmail">Email address</InputLabel>
                    <Input error={isValidEmail} value={email} onChange={(e) => { setEmail(e.target.value) }} id="inputEmail" aria-describedby="my-helper-text" />
                    <FormHelperText>Enter a valid email address</FormHelperText>
                </FormControl>
                <FormControl fullWidth required sx={{ marginBottom: 3 }}>
                    <InputLabel htmlFor="inputContact">Contact Number</InputLabel>
                    <Input inputProps={{ maxLength: 15 }} placeholder="+xx -xxxx-xxxxxx" value={inputContact} onChange={(e) => { setInputContact(e.target.value) }} id="inputContact" aria-describedby="my-helper-text" />
                    <FormHelperText>Enter your contact number</FormHelperText>
                </FormControl>
                <FormControl fullWidth sx={{ marginBottom: 3 }}>
                    <InputLabel id="demo-simple-select-label">Request</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={request}
                        label="Request"
                        onChange={handleChange}
                    >
                        <MenuItem value="Speak to Sales Team">Speak to Sales Team</MenuItem>
                        <MenuItem value="request-for-website-audit">Request for Website Audit</MenuItem>
                        <MenuItem value="general-inquiry">General Inquiry</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth required>
                    <Button variant="contained" onClick={handleSubmission} disabled={isFilled} sx={{ color: "white", backgroundColor: "#4A4A4F", '&:hover': { backgroundColor: "#5C5C60" } }}>Submit</Button>
                </FormControl>
                {formSubmitted &&
                    <Alert severity="success">Form has been submitted successfully</Alert>
                }

            </Grid>
        </Box>

    )
}

export default Contact;