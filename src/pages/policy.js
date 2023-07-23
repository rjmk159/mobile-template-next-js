import { jsx } from "theme-ui";
import { Container, Flex, Box, Heading, Text, Image, Button } from "theme-ui";
import React, { useState } from "react";
import Privacy from "assets/privacy.svg";
export default function Policy() {

    return (
        <Container sx={styles.banner.container}>
            <Box sx={styles.banner.contentBox}>
                <Heading as="h1" variant="heroPrimary">
                    Privacy Policy
                </Heading>
                {/* <Flex> */}
                <Image src={Privacy} sx={styles.img} />
                {/* </Flex> */}
            </Box>

        </Container>
    )
}

const styles = {
    banner: {
        overflow: ["hidden", "initial", null, "hidden"],
        backgroundSize: "cover",
        borderBottomRightRadius: [100, 150, null, null, null, 250],
        pt: ["150px", null, null, null, null, null, "140px", "130px"],
        pb: ["100px", null, null, "110px", null, 10, "150px"],
        backgroundColor: "primary",
        container: {
            display: "flex",
        },
        contentBox: {
            width: ["100%", null, "85%", "55%", "50%", "55%"],
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexShrink: 0,
            pt: [0, null, null, null, null, null, 5, 7],
        },


    },
    sponsorTitle: {
        color: "white",
        fontSize: [1, 2],
        opacity: 0.6,
        pr: 20,
        flexShrink: 0,
        pb: [2, null, 0],
    },
    sponsorBox: {
        pt: ["35px", null, null, null, null, "45px"],
        flexDirection: ["column", null, "row"],
        sponsor: {
            display: "flex",
            alignItems: "center",
            "> a": {
                mr: [5, null, null, 4, 6],
                display: "flex",
                "&:last-of-type": {
                    mr: 0,
                },
            },
        },
    },
};