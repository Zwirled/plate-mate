import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import './style.css';

function Footer() {
    return (
        <footer>
            <Container maxWidth="lg">
                <Grid container spacing={2} >
                    <Grid xs={12}>
                        <p>Created by <a href="https://github.com/HarryUnderscore13/" target="_blank">Harry Holder</a>, <a href="https://github.com/seacrest3/" target="_blank">Lee, Kwok Leung</a> & <a href="https://github.com/Zwirled/" target="_blank">Amelia Bramwell</a></p>
                        <p>© 2023 PlateMate. All Rights Reserved.</p>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;