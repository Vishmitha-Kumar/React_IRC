
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import tree from './Images/Tree.jpg'
export default function MediaCard() {
  return (
    <Card>
      <CardMedia
        image={tree}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Nature
        </Typography>
        <Typography variant="body2" color="text.secondary">
            In the embrace of nature,the symphony of chirping birds and the gentle carees of a breeze paint a erene canvas of tranquility
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}