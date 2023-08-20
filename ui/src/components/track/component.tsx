import { Avatar, Chip, Container, IconButton, Stack, Table, TableCell, TableHead, TableRow, ThemeProvider, Typography, createTheme } from "@mui/material";
import { format, set } from "date-fns";
import React from "react";
import { TrackContext} from "src/contexts/track.context"



const Header = () => {
    const {
        artist
    } = React.useContext(TrackContext);
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
                justifyContent={"flex-start"}
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
                fontSize: "1rem",


            }
        }
    },
    },
  });


const Tracks = () => {

    const [albumYear, setAlbumYear] = React.useState<any>({})
    const [albumFans, setAlbumFans] = React.useState<any>({})
    const [albumDuration, setAlbumDuration] = React.useState<any>({})
    const [albumGenre, setAlbumGenre] = React.useState<any>({})

    const {
            tracks,
            getAlbumDetails
        } = React.useContext(TrackContext);


    React.useEffect(()=>{
        if(!tracks || tracks.length === 0){
            return;
        }

        for (const track of tracks) {
            const id = parseInt(track?.album?.id?.toString() || "-1");
            console.log(id)
            if(id > 0){
                getAlbumDetails(id).then((res)=>{
                    // console.log(res);
                    const year = res.release_date;
                    const trackId = track.id?.toString();

                    setAlbumYear((prev: any)=>{
                        if (trackId){
                            return {
                                ...prev,
                                [trackId]: year
                            }
                        }
                    })
                    setAlbumFans((prev: any)=>{
                        if (trackId){
                            return {
                                ...prev,
                                [trackId]: res.fans
                            }
                        }
                    })

                    setAlbumDuration((prev: any)=>{
                        if (trackId){
                            return {
                                ...prev,
                                [trackId]: res.duration
                            }
                        }
                    })

                    setAlbumGenre((prev: any)=>{
                        if (trackId){
                            return {
                                ...prev,
                                [trackId]: res.genres
                            }
                        }
                    })





                // setAlbum(res);
            }).catch((err)=>{
                console.log(err);
            })
        }
        }

        console.log(albumYear)
    }, [tracks])


    const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    
    
    

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
                        {windowWidth > 700 && <TableCell>
                            <Typography variant={"body1"}>Album title</Typography>
                        </TableCell>}

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
                    {windowWidth > 700 && <TableCell>
                            <Typography variant={"body1"}>
                                {
                                track.album.title
                                }
                            </Typography>
                    <Stack
                    direction={"row"}
                    // spacing={2}
                    flexWrap={"wrap"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    alignContent={"flext-start"}
                    >
                        {albumYear[track.id] && <Chip
                        variant="outlined"
                        color="primary"
                        label={`${albumYear[track.id]}`}/> }
                        {albumFans[track.id] && <Chip
                        color="primary"
                        variant="outlined"
                        label={`fans: ${albumFans[track.id]}`}/> }

                        {albumDuration[track.id] && <Chip
                        color="primary"
                        variant="outlined"
                        label={`${formatSecondsToMinutesAndSeconds(albumDuration[track.id])}`}/>}
                        {
                            albumGenre[track.id] && albumGenre[track.id].data?.map((genre: any)=>{
                                return(
                                    <Chip 
                                    color="primary"
                                    variant="outlined"
                                    label={`${genre.name}`}/>
                                )
                            }
                            )
                        }
 
                    </Stack>

                    </TableCell>}
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