import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    minWidth: 200,
    margin: '10px'
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Title of book:</b> {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Author:</b>{props.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>First publish year:</b>{props.firstPublichYear}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={props.onClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}