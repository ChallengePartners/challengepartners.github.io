import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "height": 100 * vh,
        "paddingTop": 100
    },
    "navbar-default": {
        "backgroundColor": "#90BE42"
    },
    "navbar-default navbar-nav>li>a": {
        "color": "white"
    },
    "navbar-header": {
        "minHeight": 90
    },
    "nav divcontainer": {
        "minHeight": 90
    },
    "logo": {
        "height": "280%",
        "width": "auto"
    },
    "nav ul": {
        "fontSize": 1.4
    },
    "footer": {
        "position": "absolute",
        "bottom": 0,
        "width": "100%",
        "height": 60,
        "backgroundColor": "#90BE42"
    }
});