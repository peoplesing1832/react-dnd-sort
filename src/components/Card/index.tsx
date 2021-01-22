import React, { useRef, useState } from 'react';
import useDrag from '../../hooks/useDrag';
import useDrop from '../../hooks/useDrop';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './index.css';

type CharacterCardProps = {
  index: number;
  move: (dropIndex: number, dragIndex: number) => void;
  img: string;
  name: string;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CharacterCard: React.FC<CharacterCardProps> = (props) => {
  const {index, move, img, name } = props;
  const classes = useStyles();

  const ref = useRef<HTMLDivElement>(null)
  const [isDraging, setIsDraging] = useState(false)

  const hover = (data: any, e: globalThis.DragEvent) => {
    const dropIndex = index;
    const { index: dragIndex } = data;
    if (dropIndex === dragIndex) {
      return;
    }
    if (!ref.current) {
      return;
    }
    const dropRect = ref.current?.getBoundingClientRect();
    const dropMiddY = (dropRect.bottom - dropRect.top) / 2;
    const dropY = e.pageY - dropRect.top;
    if (dragIndex < dropIndex && dropY < dropMiddY) {
      return
    }
    if (dragIndex > dropIndex && dropY > dropMiddY) {
      return
    }
    move(dropIndex, dragIndex);
    data.index = dropIndex;
  };

  useDrag(ref, { index }, {
    dragstart: () => {
      setIsDraging(true);
    },
    dragend: () => {
      setIsDraging(false);
    }
  });
  useDrop(ref, {
    hover,
  });

  const mergeStyle: React.CSSProperties = {};
  if (isDraging) {
    mergeStyle.opacity = 0.4;
  } else {
    mergeStyle.opacity = 1;
  }

  return (
    <div
      ref={ref}
      style={mergeStyle}
      className="card"
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              { name }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    
  );
};

export default CharacterCard;
