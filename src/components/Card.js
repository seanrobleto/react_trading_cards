import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Yugititle from './Title';
import Yugidescription from './Description';
import "./Card.css"

function Yugicard({
    cardinfo
}) {

    return (
        <Card className='cardContainer' sx={{ width: 400, height: 600 }}>


            <Yugititle
                title={cardinfo.title}
                image={cardinfo.card_type_image}
            />

            <img className='mainImage'
            src={cardinfo.card_main_image}
            />

            <Yugidescription
                description={cardinfo.description}
            />

        </Card>
    );
}

export default Yugicard;