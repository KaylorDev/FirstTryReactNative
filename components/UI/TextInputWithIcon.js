import { View, StyleSheet, TextInput, Image, Text } from "react-native";

export function TextInputWithIcon(props) {
  const { icon, placeHolder, onChange, value, setSum } = props;
  return (
    <>
      <View style={styles.TextInputWrapper}>
        <View style={styles.ImageWrapper}>
          <Image style={styles.Image} source={icon} />
        </View>

        <TextInput
          keyboardType="number-pad"
          onChangeText={(value) => setSum(value)}
          autoFocus={true}
          style={styles.TextInput}
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  TextInputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  Image: {
    height: 30,
    width: 30,
  },
  ImageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: "white",
  },
  TextInput: {
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
  },
});
