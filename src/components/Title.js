import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';


function Yugititle({
    title,
    image
}) {
    return (
        <div className='titleContainer'>
            <Typography>
                {title}
            </Typography>
            <Avatar className='typeIcon' src={image}
                sx={{ width: 24, height: 24 }}>
            </Avatar>


        </div>

    );
}

export default Yugititle;