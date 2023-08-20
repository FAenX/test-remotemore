import { HomeContext } from "../../contexts/home.context"
import { Avatar, Button, Container, IconButton, Table, TableCell, TableHead, TableRow, TextField, ThemeProvider, Typography, createTheme } from "@mui/material"
import { Stack, Box } from "@mui/system"
import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { BallTriangle } from "react-loader-spinner";
import { format } from 'date-fns';
import { Track } from 'src/types/home';

function formatSecondsToMinutesAndSeconds(seconds: number) {
    return format(seconds * 1000, "mm:ss");
  }

const theme = createTheme({
    components: {
      MuiTable: {
        styleOverrides: {
            root: {
                // border: "1px solid rgba(255, 255, 255, 0.1)",
                // maxWidth: "80%",
                elevation: 1,
                "border-radius": "5px",
            },
        }
      },
      MuiTableRow: {
        styleOverrides: {
            root: {
                border: "none",
                // maxWidth: "700px",
                elevation: 1,
                "border-radius": "5px",
                "&:hover": {
                    backgroundColor: "#009933",
                }
            },
        }
    },
    MuiTableCell: {
        styleOverrides: {
            root: {
                border: "none",
                // variant: "outlined",
                padding: "0.5rem",
                color: "white",
                maxWidth: "300px",
                fontSize: "0.8rem",
                fontWeight: 300,
                // width: "100%",
                // borderRadius: "5px",
            }
        }
    },
    MuiTypography: {
        styleOverrides: {
            root: {
                // color: "yellow",
                fontWeight: 600,
                fontSize: "1rem",


            }
        }
    },
    },
  });


const Tracks = () => {
    const {
        results, handleSelect} = React.useContext(HomeContext);

    const handleClicked = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
        const curtar = event.currentTarget;
        const track = results?.data?.find((track: Track) => track.id === parseInt(curtar.id));
        track && handleSelect(track);
    }

    return (
            <ThemeProvider theme={theme}>
            <Container
                sx={{
                    padding: 2,
                    borderColor: "grey.800",
                    // border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}

            >
            <Table>
            <TableHead>
                        <TableCell>
                            <IconButton color="inherit">
                                <Typography variant={"body1"}>No.</Typography>
                            </IconButton>
                        </TableCell>
                        <TableCell>
                            <Typography variant={"body1"}>Track title</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant={"body1"}>Artist title</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant={"body1"}>Album title</Typography>
                        </TableCell>

                        <TableCell>
                            <Typography variant={"body1"}>Track duration</Typography>
                        </TableCell>
                        


                    </TableHead>
            {results 
            && results.data 
            && results.data.length > 0 
            && results.data.map((result: any, index) => {
            return(
                <TableRow
                key={result.id}
                id = {result.id}
                onClick={handleClicked}
                >
                    <TableCell>
                        <IconButton color="inherit">
                            <Typography variant={"body1"}>{index + 1}</Typography>
                        </IconButton>
                    </TableCell>
                    <TableCell>
                        <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={2}
                        >
                            <Avatar
                            variant="square"
                            >
                                <img src={result.album.cover_medium} alt={result.title} />
                            </Avatar>
                            <Typography
                            variant={"body1"}
                            sx={{
                                // marginRight: 2,
                                textTransform: "capitalize",
                                // width: "200px",
                                // border: 1,
                            }}
                            >
                                {result.title}
                            </Typography>

                        </Stack>
                    </TableCell>
                    <TableCell>
                            <Typography variant={"body1"}>{result.artist.name}</Typography>
                    </TableCell>
                    <TableCell>
                            <Typography variant={"body1"}>{result.album.title}</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant={"body1"}>
                        {formatSecondsToMinutesAndSeconds(result.duration)}
                        </Typography>
                    </TableCell>

                </TableRow>
                 )})}
            </Table>
            </Container>
            </ThemeProvider>
)}


const Ad = () => {
    return(
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
    )
}


const Loader = () => {
    return(
        <Stack
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"430px"}
        minWidth={"430px"}
        // border={1}
        >
        <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="white"
        ariaLabel="ball-triangle-loading"
        visible={true}
        />
        </Stack>
    )
}



export const Component = () => {
    const {
        handleChange,
        loading,
        results,
        err,
        handleSubmit, searchString} = React.useContext(HomeContext);
        console.log(err);
    return(
        <Stack
            alignItems={"center"}
            // minHeight={"80vh"}
            // border={1}s
            margin={1}
            spacing={3}
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
                <Button
                    size="small"
                    variant={"contained"}
                    
                    onClick={handleSubmit}
                    disabled = {searchString.length < 1}
                    sx={{
                        borderRadius: 5,
                        backgroundColor: "#4c0196",
                        "&:hover": {
                            backgroundColor: "#0c0018",
                        },
                        padding: 1,
                        width: "130px",
                        
                    }}
                >
                    <SearchOutlinedIcon />
                    <Typography>Search</Typography>
                    </Button>
                </Box>

                {loading && <Loader/> }


                {results?.data && <Tracks />}
                {!loading
                && results
                && results.data && results.data.length === 0 ?
                <Stack
                alignItems={"center"}
                justifyContent={"center"}
                minHeight={"430px"}
                minWidth={"430px"}
                // border={1}

                >
                <Typography variant={"body2"}>No results</Typography>
                </Stack>
                : null
                }
                {!!err && !loading && <Typography variant={"body2"}>Something went wrong</Typography>}
                {!err && !results?.data && !loading && <Ad/>}
                
                </Stack>
    )
}