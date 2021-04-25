import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const CustomCard = ({ content: {title = '', subTitle= '', description= '', technologies=[], color, html_url, image}}) => {
  const classes = makeStyles(() => ({
    root: {
      maxWidth: 345,
      width: 345,
      marginTop: 40,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    avatar: {
      backgroundColor: color,
    },
  }))();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {title[0] && title[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <i className="fa fa-github" aria-hidden="true"></i>
          </IconButton>
        }
        title={title}
        subheader={subTitle}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {
            technologies.map((item, i) => 
                (<Button key={i} size="small" color="primary">
                   {item}
                </Button>))
        }
      </CardActions>
    </Card>
  );
}

export default CustomCard;