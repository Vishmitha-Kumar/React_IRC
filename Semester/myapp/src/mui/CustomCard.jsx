import {Button,Card,CardActions,CardContent,CardMedia,Typography} from '@mui/material'
import Tree from './Images/Tree.jpg'

function CustomCard(){
    return(
        <Card>
            <CardMedia>
                {Tree}
            </CardMedia>
            <CardContent>
                <Typography>
                    Nature
                </Typography>
                <Typography>
                    In the embrace of Nature
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