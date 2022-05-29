import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../misc/assets/constants";

export function MainBtn(props) {
  return (
    <LinearGradient
      colors={["#00B0F0", "#00D8F9", "#00D8F9"]}
      style={styles.MainBtn}
    >
      <Text style={styles.MainBtnTextLeft}>{props.firstText}</Text>
      <Text style={styles.MainBtnTextRight}>{props.secondText}</Text>
    </LinearGradient>
  );
}

export function BtnWithIcon(props) {
  const { text, icon, active, borderRadius } = props;
  return (
    <TouchableHighlight style={styles.BtnWithIcon}>
      <View
        style={dynamicStyles({ borderRadius: borderRadius }).BtnWithIconWrapper}
      >
        <Image style={styles.BtnWithIconIcon} source={icon} />
        <Text style={dynamicStyles({ active: active }).BtnWithIconText}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

const dynamicStyles = (props) =>
  StyleSheet.create({
    BtnWithIconText: {
      flex: 1,
      fontSize: 10,
      marginLeft: 5,
      color: props.active ? COLORS.activeText : COLORS.informativeText,
    },
    BtnWithIconWrapper: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "white",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      borderRadius: props.borderRadius,
    },
  });

const styles = StyleSheet.create({
  MainBtn: {
    flexDirection: "row",
    alignSelf: "center",
    width: "80%",
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  MainBtnTextLeft: {
    color: "white",
  },
  MainBtnTextRight: {
    color: "white",
  },
  BtnWithIcon: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "space-between",
  },

  BtnWithIconText: {
    flex: 1,
    fontSize: 10,
    marginLeft: 5,
    color: COLORS.activeText,
  },
  BtnWithIconIcon: {
    height: 31,
    width: 31,
  },
});
