import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "minHeight": 2000,
        "paddingTop": 70
    },
    "navbar-default": {
        "backgroundColor": "#90BE42"
    },
    "navbar-default navbar-nav>li>a": {
        "color": "white"
    },
    "logo": {
        "height": "150%",
        "width": "auto"
    }
});