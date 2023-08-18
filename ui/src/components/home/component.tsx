import { HomeContext } from "../../contexts/home.context"
import { Button, IconButton, TextField, Typography } from "@mui/material"
import { Stack, Box } from "@mui/system"
import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



export const Component = () => {
    const {handleChange, handleSubmit, searchString} = React.useContext(HomeContext);
    return(
        <Stack
            alignItems={"center"}
            minHeight={"80vh"}
            >
                <Box
                minWidth={"430px"}
                padding={2}
                >
                    <Stack
                    spacing={2}
                    >
                        <TextField
                            // label="Search"
                            onChange={handleChange}
                            value={searchString}
                            placeholder="Search for Artists, Albums, Songs, Playlists, Podcasts"
                            InputProps={{
                                type: 'search',

                            }}
                        />
                    </Stack>
                </Box>
                <Box>
                <IconButton
                    size="small"
                    onClick={handleSubmit}
                    sx={{
                        borderRadius: 5,
                        backgroundColor: "#130050",
                        "&:hover": {
                            backgroundColor: "#0c0018",
                        },
                        padding: 1,
                        width: "130px",
                    }}
                >
                    <SearchOutlinedIcon />
                    <Typography>Search</Typography>
                    </IconButton>
                </Box>
                <Box
                minWidth={"430px"}
                // border={1}
                padding={2}
                >
                    <Stack
                        alignItems={"center"}
                    >
                        <Stack
                        className="deezer-premium"
                        width={"60%"}
                        alignItems={"center"}
                        padding={3}
                        spacing={2}
                        sx={{
                            borderRadius: 3,
                            textAlign: "center",
                        }}
                        >
                            <Typography variant={"h3"}>Music player</Typography>
                            <Typography variant={"body2"}>Pick and play any track ad-free, plus download your favourites and listen offline. Enjoy High Fidelity sound and stream across all your devices.</Typography>

                            <Button
                            variant={"contained"}
                            sx={{
                                borderRadius: 5,
                                backgroundColor: "#4c0196",
                                "&:hover": {
                                    backgroundColor: "#0c0018",
                                },
                                padding: 1,
                                width: "160px",
                            }}
                            > Click </Button>

                            <Typography variant={"h4"}>1 month free</Typography>
                            <Typography variant={"body2"}>then $10.99/month.</Typography>
                            <Typography variant={"body2"}>No commitment, cancel anytime.</Typography>
                        </Stack>
                    </Stack>
                </Box>
                </Stack>
    )
}