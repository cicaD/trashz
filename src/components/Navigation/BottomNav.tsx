import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {Route} from '../../router'

import styles from './BottomNav.module.css'

const BottomNav = () => {
    const [value, setValue] = useState(0)
    const navigate = useNavigate()

    return (
        <Box className={styles.Container}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                    switch (newValue) {
                        case 0:
                            navigate(Route.HOME)
                            break
                        case 1:
                            navigate(Route.LOCATION)
                            break
                        case 2:
                            navigate(Route.IMAGES)
                            break
                        case 3:
                            navigate(Route.DESCRIPTION)
                            break
                        case 4:
                            navigate(Route.RECIPIENT)
                            break
                        case 5:
                            navigate(Route.SEND)
                            break
                        case 6:
                            navigate(Route.ACCOUNT)
                            break 
                    }
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Location" icon={<PersonIcon />} />
               {/** <BottomNavigationAction label="Images" icon={<FavoriteIcon />}/>
                <BottomNavigationAction label="Description" icon={<FavoriteIcon />}/>
                <BottomNavigationAction label="Recipient" icon={<FavoriteIcon />}/>
                <BottomNavigationAction label="Send" icon={<FavoriteIcon />}/>
            <BottomNavigationAction label="Account" icon={<PersonIcon />} /> **/}
            </BottomNavigation>
        </Box>
    )
}

export default BottomNav
