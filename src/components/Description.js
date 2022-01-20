import { Typography } from '@material-ui/core';

function Yugidescription({
    description
}) {
    return (
        <div className='description'>
            <Typography>
                {description}
            </Typography>
        </div>
    );
}

export default Yugidescription;