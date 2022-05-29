import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";
import { COLORS } from "../../misc/assets/constants";
import { MainIcon } from "../../misc/assets/icons";
import { LinearGradient } from "expo-linear-gradient";

function Header() {
  return (
    <LinearGradient
      colors={["#00B0F0", "#00D8F9", "#00D8F9"]}
      style={styles.HeaderWrapper}
    >
      <StatusBar style="auto" />
      <Image style={styles.Image} source={MainIcon} />
    </LinearGradient>
  );
}

export default Header;

const styles = StyleSheet.create({
  HeaderWrapper: {
    backgroundColor: COLORS.activeText,
    height: "22%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {},
});
