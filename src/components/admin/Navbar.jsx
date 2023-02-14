import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Typography ,Stack, Button, Badge, Avatar, Drawer, Box} from '@mui/material'

export const Navbar = () => {
    const navigate = useNavigate()
    const [isDrawOpen,setIsDrawOpen] = useState(false)
    const openSidebar = () => {
        setIsDrawOpen(true)
    }
    const handleDrawerClose = () =>{
        setIsDrawOpen(false)
    }
    return(
        <>
            <AppBar position="static" sx={{bgcolor:'black'}} >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow:1,color:'white'}} >Machine Test</Typography>
                    <Stack direction="row" spacing={2} >
                        <Button  sx={{color:'#a8aaae'}} onClick={() => navigate('/admin')} >Logout</Button>
                        <Badge variant="dot" color="success" anchorOrigin={{vertical:'bottom',horizontal:'right'}} >
                            <Avatar onClick={openSidebar} src='https://randomuser.me/api/portraits/men/51.jpg' />
                        </Badge>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isDrawOpen} onClose={handleDrawerClose}   >
                <Box p={2} width="250px" textAlign="center" role="presentation"  >
                    <Typography variant="h6"  component="div">
                        FUNCTIONS
                    </Typography>
                </Box>
                <Stack direction='column' spacing={5} p={5} textAlign='center' >
                    <Typography  sx={{  fontSize:'16px'}} component='div' >
                        <Button onClick={() => navigate('/admin/course') } >Courses</Button>
                    </Typography>
                    <Typography  sx={{  fontSize:'16px'}} component='div' >
                        <Button onClick={() => navigate('/admin/class') } > Class</Button>
                    </Typography>
                    <Typography  sx={{  fontSize:'16px'}} component='div' >
                        <Button onClick={() => navigate('/admin/clients') } >Clients</Button>
                    </Typography>
                    <Typography  sx={{  fontSize:'16px'}} component='div' >
                        <Button onClick={() => navigate('/admin/applications') } >Applications</Button>
                    </Typography>
                    <Typography  sx={{  fontSize:'16px'}} component='div' >
                        <Button onClick={() => navigate('/admin/restoreCourse') } >Restore Course</Button>
                    </Typography>
                </Stack>
            </Drawer>
        </>
    )
}