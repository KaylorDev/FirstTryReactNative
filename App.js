import { useState } from "react";
import Main from "./components/Main/Main";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import Header from "./components/Header/Header";
import { WidthHeight } from "./misc/assets/constants";

function App() {
  const [showMain, setShowMain] = useState(false);
  return (
    <SafeAreaView
      style={{ height: WidthHeight.height, width: WidthHeight.width }}
    >
      <Header />
      {showMain ? (
        <Main />
      ) : (
        <View
          style={{
            justifyContent: "center",
            height: WidthHeight.height,
            width: WidthHeight.width,
          }}
        >
          <Button onPress={() => setShowMain(true)} title="Начать" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
