import { Stack,} from "@mui/material"

import React from 'react';
import {Toolbar, IconButton, Avatar } from '@mui/material';
import { Notifications as NotificationsIcon } from '@mui/icons-material';



const AppStyled = () => {

  return (
      <Stack
      justifyContent={"flex-end"}
      width={"100%"}
    //   border={1}
     >
        <Toolbar>
        <Stack
            // border={1}
            direction={"row"}
            justifyContent={"flex-end"}
            width={"100%"}
        >
            <Stack
            flexDirection={"row"}
            >
          {/* Notifications Icon */}
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Avatar
          src={""}
            sx={{
                width: 40,
                height: 40,
                // border: 1,
            }}
            variant='square'
          >

          </Avatar>
          </Stack>
          </Stack>
        </Toolbar>
    </Stack>
  );
};





export const LayoutContext = (props: {children: React.ReactNode}) => {
    return(
        <div id="main">
            <Stack
                minWidth={"100vw"}
                minHeight={"100vh"}
                // border={1}

            >
            <AppStyled/>
            { props.children }
            </Stack>
        </div>
    )

}