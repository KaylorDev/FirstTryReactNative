import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { BtnWithIcon } from "./Buttons";

export function MenuRow(props) {
  const {
    placeHolderText,
    firstText,
    firstIcon,
    secondText,
    secondIcon,
    onPress,
  } = props;

  return (
    <SafeAreaView style={styles.Row}>
      <TouchableWithoutFeedback
        onPress={onPress}
        style={styles.TouchebleWrapper}
      >
        <View style={styles.TouchebleWrapper}>
          <View style={styles.IconWrapper}>
            <Image style={styles.Icon} source={firstIcon} />
          </View>
          <View
            style={
              secondText ? styles.TextWrapper : styles.textWrapperFullWidth
            }
          >
            <Text
              style={
                (styles.placeHolderText,
                firstText ? { fontSize: 10 } : { fontSize: 12 })
              }
            >
              {placeHolderText}
            </Text>
            {firstText ? (
              <Text style={styles.firstText}>{firstText}</Text>
            ) : null}
          </View>
          <View style={styles.secondWrapper}>
            {secondText && secondIcon ? (
              <BtnWithIcon
                active={false}
                borderRadius={10}
                icon={secondIcon}
                text={secondText}
              />
            ) : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Row: {
    flexDirection: "row",
    margin: 15,
  },
  TouchebleWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  placeHolderText: {
    flex: 1,
    color: "#00000029",
  },
  firstText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  TextWrapper: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
    maxWidth: Dimensions.get("window").width,
    justifyContent: "center",
  },
  textWrapperFullWidth: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    width: "83%",
  },
  IconWrapper: {
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  Icon: {
    height: 31,
    width: 31,
  },
  secondWrapper: {
    flex: 1,
  },
});
