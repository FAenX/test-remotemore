import { HomeContext } from "src/contexts/home.context";
import { Avatar, Chip, Container, IconButton, Stack, Table, TableCell, TableHead, TableRow, ThemeProvider, Typography, createTheme } from "@mui/material";
import { intervalToDuration, formatDuration, format } from "date-fns";
import React from "react";
import { TrackContext} from "src/contexts/track.context"



const Header = () => {
    const {
        tracks,
        artist
    } = React.useContext(TrackContext);
    console.log(artist);
    return(
        <Stack
         id="artist-headline"
         direction={"row"}
         spacing={2}
         minHeight={"350px"}
         alignContent={"center"}
            alignItems={"flex-end"}
         >
            <Avatar 
            src={artist?.picture_big} 
            alt={artist?.name}
            sx={{ width: 300, height: 300 }}
            variant="square"
            />

            <Stack
            spacing={2}
            width={"100%"}
            >
                <Typography>Artist</Typography>
                <Typography
                typography={"h2"}
                >{artist?.name}</Typography>
                <Stack
                direction={"row"}
                justifyContent={"flex-end"}
                alignContent={"center"}
                alignItems={"center"}
                spacing={2}
                >
                    <Stack 
                    direction={"row"}
                    alignContent={"center"}
                    alignItems={"center"}
                    spacing={2}
                    >
                        <Typography>Fans: </Typography>
                        <Chip label = {artist?.nb_fan}/>

                    </Stack>

                    <Stack 
                    direction={"row"}
                    spacing={2}
                    alignItems={"center"}
                    >
                        <Typography>Albums: </Typography>
                        <Chip label = {artist?.nb_album}/>

                    </Stack>

                </Stack>

            </Stack>


        </Stack>
    )
}



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
                fontSize: "0.7rem",


            }
        }
    },
    },
  });


const Tracks = () => {
    
    const {
            tracks,
            artist
        } = React.useContext(TrackContext);

        console.log(tracks);


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
                    // border: 1,
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

            {tracks && tracks.length > 0 && tracks.map((track: any, index) => {
            return(
                <TableRow
                key={track.id}
                id = {track.id}
                onClick={()=>{}}
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
                            <Typography
                            variant={"body1"}
                            sx={{
                                // marginRight: 2,
                                textTransform: "capitalize",
                                // width: "200px",
                                // border: 1,
                            }}
                            >
                                {track.title}
                            </Typography>

                        </Stack>
                    </TableCell>
                    <TableCell>
                            <Typography variant={"body1"}>{track.artist.name}</Typography>
                    </TableCell>
                    <TableCell>
                            <Typography variant={"body1"}>{track.album.title}</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant={"body1"}>
                        {formatSecondsToMinutesAndSeconds(track.duration)}
                        </Typography>
                    </TableCell>

                </TableRow>
                 )})}
            </Table>
            </Container>
            </ThemeProvider>
)}


export default function Component() {
    return(
        <>
        <Header />
        <Tracks />
        </>

    )
}