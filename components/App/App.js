import { useState } from "react";
import Main from "../Main/Main";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { WidthHeight } from "../../misc/assets/constants";

function App() {
  const [showMain, setShowMain] = useState(false);
  return (
    <SafeAreaView>
      <Header />
      <View
        style={{
          justifyContent: "center",
          height: WidthHeight.height,
          width: WidthHeight.width,
        }}
      >
        <Button onPress={() => setShowMain(true)} title="Начать" />
      </View>
      {showMain ? <Main /> : null}
    </SafeAreaView>
  );
}
