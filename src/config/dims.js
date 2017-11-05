/**
* @providesModule skydreamer/config/dims
*/

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class Dims {
  constructor() {
    this.SCREEN_WIDTH = width;
    this.SCREEN_HEIGHT = height;
    this.slidePadding = 15;
    this.headerFontSize = 25;
    this.titleFontSize = 20;
    this.labelFontSize = 16;
    this.textFontSize = 16;
    this.pageFontSize = 20;
    this.actionFontSize = 36;
    this.valueFontSize = 60;
    this.subtitleFontSize = 16;
    this.chatFontSize = 15;
    this.mainContainerPadding = 10;
    this.mainContainerMargin = 5;
    this.cardPadding = 15;
    this.chatUserPadding = 5;
    this.chatFriendMargin = 10;
    this.iconSize = {
      small: 20,
      medium: 30,
      large: 45,
    };
    this.topTabBar = 50;
    this.simpleLabelFontSize = 14;
  }
}

export default new Dims();
