import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { BtnWithIcon, MainBtn } from "../UI/Buttons";
import { MenuRow } from "../UI/MenuRow";
import Modal from "react-native-modal";
import { TextInputWithIcon } from "../UI/TextInputWithIcon";
import { LinearGradient } from "expo-linear-gradient";
import {
  BagIcon,
  ConverIcon,
  BoxIcon,
  ArrowIcon,
  PhotoIcon,
  PostICon,
  RubleIcon,
  PlusIcon,
  ListIcon,
  LocationIcon,
  TimeIcon,
} from "../../misc/assets/icons";
import { COLORS } from "../../misc/assets/constants";

function Main() {
  const [showSumModal, setShowSumModal] = useState(false);
  const [sum, setSum] = useState("");
  const [sumValidation, setSumValidation] = useState(false);
  const [step, setStep] = useState(1);
  const [showImageMenu, setShowImageMenu] = useState(false);
  const [detailsText, setDetailsText] = useState("");

  function showCashModal() {
    setShowSumModal(!showSumModal);
  }

  function acceptSum() {
    setShowSumModal(false);
    setStep(2);
  }

  useEffect(() => {
    if (sum > 6000) {
      setSumValidation(false);
    } else {
      setSumValidation(true);
    }
  }, [sum]);

  return (
    <View style={styles.Main}>
      <View style={styles.ButtonGroup}>
        <BtnWithIcon active={false} icon={BagIcon} text="Помощник покупок" />
        <BtnWithIcon active={false} icon={ConverIcon} text="Просто курьер" />
        <BtnWithIcon active={true} icon={BoxIcon} text="Доставщик заказов" />
      </View>
      <MenuRow placeHolderText="Где забрать?" firstIcon={PostICon} />
      <MenuRow
        onPress={step === 1 ? showCashModal : null}
        placeHolderText="Точная сумма оплаты?"
        firstIcon={RubleIcon}
        firstText={sum > 0 ? sum : ""}
        secondText="Добавить точку"
        secondIcon={PlusIcon}
      />
      <MenuRow
        onPress={step === 2 ? showCashModal : null}
        placeHolderText="Детали получения"
        firstIcon={ListIcon}
        firstText={detailsText.length > 0 ? detailsText : ""}
      />
      <MenuRow placeHolderText="Адрес доставки" firstIcon={LocationIcon} />
      <MenuRow placeHolderText="Время доставки" firstIcon={TimeIcon} />
      <View style={styles.MainBtnWrapper}>
        <MainBtn firstText="Далее" secondText="от 345Р" />
      </View>
      <Modal
        onBackdropPress={showCashModal}
        style={styles.ModalWindowUpperWrapper}
        isVisible={showSumModal}
        avoidKeyboard={true}
      >
        {step === 1 ? (
          <View
            style={{
              backgroundColor: COLORS.mainBackground,
              height: "30%",
              padding: 15,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => showCashModal()}
                style={{ width: 20, height: 20 }}
              >
                <Image style={{ height: 20, width: 20 }} source={ArrowIcon} />
              </TouchableWithoutFeedback>
              <Text
                style={{
                  color: sumValidation
                    ? COLORS.activeText
                    : COLORS.informativeText,
                }}
                onPress={sumValidation ? acceptSum : null}
              >
                Готово
              </Text>
            </View>
            <View style={styles.validationTextWrapper}>
              <Text style={styles.validationText}>
                {sumValidation
                  ? "Точная сумма оплаты"
                  : "Не более 6 000 в одном заказе!"}
              </Text>
            </View>
            <TextInputWithIcon
              setSum={setSum}
              icon={RubleIcon}
              placeHolder="Укажи сумму"
              value={sum}
            />
          </View>
        ) : (
          <View
            style={{
              backgroundColor: COLORS.mainBackground,
              height: showImageMenu ? "70%" : "45%",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => showCashModal()}
                style={{ width: 20, height: 20 }}
              >
                <Image style={{ height: 20, width: 20 }} source={ArrowIcon} />
              </TouchableWithoutFeedback>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Как получить заказ?
              </Text>
              <Text
                style={{ color: COLORS.activeText }}
                onPress={sumValidation ? acceptSum : null}
              >
                Готово
              </Text>
            </View>
            <LinearGradient
              style={{
                height: 40,
                paddingLeft: 15,
                paddingRight: 15,
                justifyContent: "center",
              }}
              colors={["#00B0F0", "#00D8F9", "#00D8F9"]}
            >
              <Text style={{ fontSize: 12, color: "white" }}>
                Контакты курьера придут по СМС. Можно не указывать сейчас и
                сообщить детали позже.
              </Text>
            </LinearGradient>
            <View style={{ padding: 15 }}>
              <TextInput
                multiline={true}
                placeholder="Напиши здесь детали (необязательно)"
                onChangeText={(text) => setDetailsText(text)}
                numberOfLines={6}
                style={{
                  backgroundColor: "white",
                  textAlignVertical: "top",
                  borderRadius: 10,
                  padding: 10,
                }}
              ></TextInput>
              <TouchableWithoutFeedback
                style={{ flex: 1, height: 50, width: 50 }}
                onPress={() => setShowImageMenu(!showImageMenu)}
              >
                <LinearGradient
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                  colors={["#00B0F0", "#00D8F9", "#00D8F9"]}
                >
                  <Image style={{ width: 30, height: 30 }} source={PhotoIcon} />
                </LinearGradient>
              </TouchableWithoutFeedback>
              {showImageMenu ? (
                <View
                  style={{
                    marginTop: 20,
                    height: "40%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Text style={{ color: COLORS.informativeText }}>
                      Выбери
                    </Text>
                  </View>
                  <TouchableWithoutFeedback
                    style={{
                      width: "100%",
                      alignItems: "center",
                      padding: 10,
                      borderWidth: 1,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                    }}
                  >
                    <Text style={{ color: COLORS.activeText }}>
                      Галерея фото
                    </Text>
                  </TouchableWithoutFeedback>
                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                      padding: 10,
                    }}
                  >
                    <Text style={{ color: COLORS.activeText }}>
                      Сделать фото
                    </Text>
                  </View>
                  <TouchableWithoutFeedback
                    style={{
                      width: "100%",
                      alignItems: "center",
                      padding: 10,
                    }}
                    onPress={() => setShowImageMenu(false)}
                  >
                    <Text
                      style={{ color: COLORS.activeText, fontWeight: "bold" }}
                    >
                      Отменить
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              ) : null}
            </View>
          </View>
        )}
      </Modal>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: COLORS.mainBackground,
    paddingTop: 30,
    width: "100%",
    height: "100%",
  },

  ButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
  },
  MainBtnWrapper: {
    height: 100,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  ModalWindowUpperWrapper: {
    justifyContent: "flex-end",
    margin: 0,
  },
  validationTextWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  validationText: {
    color: COLORS.activeText,
    fontSize: 10,
  },
});
