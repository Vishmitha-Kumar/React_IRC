import {Button,Card,CardActions,CardContent,CardMedia,Typography} from '@mui/material'
import Tree from './Images/Tree.jpg'

function CustomCard(){
    return(
    <Card>
        <CardMedia
            image={Tree}
        />
        <CardContent>
            <Typography>
                Nature
            </Typography>
            <Typography>
                <p>Birds,animals,along with humans</p>
            </Typography>
        </CardContent>
        <CardActions>
            <Button>Share</Button>
            <Button>Learn More</Button>
        </CardActions>
    </Card>
    )
}
export default CustomCard