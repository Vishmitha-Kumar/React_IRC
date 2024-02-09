import {Button,Card,CardActions,CardContent,CardMedia,Typography} from '@mui/material'

function CustomCard(){
    return(
        <Card>
            <CardContent>
                <Typography>
                    Nature
                </Typography>
                <Typography>
                In the embrace of nature, the symphony of chirping birds and the gentle caress of a breeze paint a serene canvas of tranquility.
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