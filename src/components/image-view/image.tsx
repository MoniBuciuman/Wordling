import React from 'react';
import {Image} from 'react-native';

type ImageViewProps = {
  imageUri: string;
  size?: number;
};

export const ImageView = ({imageUri, size = 180}: ImageViewProps) => {
  if (!imageUri) {
    return null;
  }

  let source = require('../../assets/images/words/paper.png');

  switch (imageUri.replace(' ', '_')) {
    case 'blue':
      source = require('../../assets/images/words/blue.png');
      break;
    case 'boat':
      source = require('../../assets/images/words/boat.png');
      break;
    case 'clue':
      source = require('../../assets/images/words/clue.png');
      break;
    case 'coat':
      source = require('../../assets/images/words/coat.png');
      break;
    case 'cry':
      source = require('../../assets/images/words/cry.png');
      break;
    case 'dew':
      source = require('../../assets/images/words/dew.png');
      break;
    case 'die':
      source = require('../../assets/images/words/die.png');
      break;
    case 'elbow':
      source = require('../../assets/images/words/elbow.png');
      break;
    case 'food':
      source = require('../../assets/images/words/food.png');
      break;
    case 'frog':
      source = require('../../assets/images/words/frog.png');
      break;
    case 'fruit':
      source = require('../../assets/images/words/fruit.png');
      break;
    case 'glue':
      source = require('../../assets/images/words/glue.png');
      break;
    case 'goat':
      source = require('../../assets/images/words/goat.png');
      break;
    case 'high':
      source = require('../../assets/images/words/high.png');
      break;
    case 'house':
      source = require('../../assets/images/words/house.png');
      break;
    case 'lie':
      source = require('../../assets/images/words/lie.png');
      break;
    case 'light':
      source = require('../../assets/images/words/light.png');
      break;
    case 'moon':
      source = require('../../assets/images/words/moon.png');
      break;
    case 'new':
      source = require('../../assets/images/words/new.png');
      break;
    case 'night':
      source = require('../../assets/images/words/night.png');
      break;
    case 'pie':
      source = require('../../assets/images/words/pie.png');
      break;
    case 'pillow':
      source = require('../../assets/images/words/pillow.png');
      break;
    case 'road':
      source = require('../../assets/images/words/road.png');
      break;
    case 'rope':
      source = require('../../assets/images/words/rope.png');
      break;
    case 'soap':
      source = require('../../assets/images/words/soap.png');
      break;
    case 'tie':
      source = require('../../assets/images/words/tie.png');
      break;
    case 'tuesday':
      source = require('../../assets/images/words/tuesday.png');
      break;
    case 'windows':
      source = require('../../assets/images/words/windows.png');
      break;
    case 'yellow':
      source = require('../../assets/images/words/yellow.png');
      break;
    case 'zoo':
      source = require('../../assets/images/words/zoo.png');
      break;
    case 'one':
      source = require('../../assets/images/words/one.png');
      break;
    case 'two':
      source = require('../../assets/images/words/two.png');
      break;
    case 'three':
      source = require('../../assets/images/words/three.png');
      break;
    case 'four':
      source = require('../../assets/images/words/four.png');
      break;
    case 'five':
      source = require('../../assets/images/words/five.png');
      break;
    case 'six':
      source = require('../../assets/images/words/six.png');
      break;
    case 'seven':
      source = require('../../assets/images/words/seven.png');
      break;
    case 'eight':
      source = require('../../assets/images/words/eight.png');
      break;
    case 'nine':
      source = require('../../assets/images/words/nine.png');
      break;
    case 'ten':
      source = require('../../assets/images/words/ten.png');
      break;
    case 'red':
      source = require('../../assets/images/words/red.png');
      break;
    case 'orange':
      source = require('../../assets/images/words/orange.png');
      break;
    case 'green':
      source = require('../../assets/images/words/green.png');
      break;
    case 'purple':
      source = require('../../assets/images/words/purple.png');
      break;
    case 'pink':
      source = require('../../assets/images/words/pink.png');
      break;
    case 'white':
      source = require('../../assets/images/words/white.png');
      break;
    case 'grey':
      source = require('../../assets/images/words/grey.png');
      break;
    case 'black':
      source = require('../../assets/images/words/black.png');
      break;
    case 'brown':
      source = require('../../assets/images/words/brown.png');
      break;
    case 'ruler':
      source = require('../../assets/images/words/ruler.png');
      break;
    case 'pen':
      source = require('../../assets/images/words/pen.png');
      break;
    case 'book':
      source = require('../../assets/images/words/book.png');
      break;
    case 'rubber':
      source = require('../../assets/images/words/rubber.png');
      break;
    case 'pencil_case':
      source = require('../../assets/images/words/pencil_case.png');
      break;
    case 'pencil':
      source = require('../../assets/images/words/pencil.png');
      break;
    case 'desk':
      source = require('../../assets/images/words/desk.png');
      break;
    case 'notebook':
      source = require('../../assets/images/words/notebook.png');
      break;
    case 'bag':
      source = require('../../assets/images/words/bag.png');
      break;
    case 'paper':
      source = require('../../assets/images/words/paper.png');
      break;
    default:
      source = require('../../assets/images/words/paper.png');
      break;
  }
  return (
    <Image
      style={{height: size, width: size, borderRadius: size / 2}}
      resizeMode="contain"
      source={source}
    />
  );
};
