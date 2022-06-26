import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_8_26974}>
        <Text style={styles.Text_8_26974}>עודכן לפני 2 דקות </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11dd8049-2790-4560-900d-b0257594fd2d"
        }}
        style={styles.ImageBackground_8_26975}
      />
      <View style={styles.View_8_26976}>
        <View style={styles.View_8_26977}>
          <View style={styles.View_8_26978} />
        </View>
      </View>
      <View style={styles.View_8_26979}>
        <View style={styles.View_8_26980} />
        <View style={styles.View_8_26981}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88dada90-7ee0-4178-a3cb-8de68c47647c"
            }}
            style={styles.ImageBackground_8_26982}
          />
        </View>
        <View style={styles.View_8_26985} />
        <View style={styles.View_8_26986}>
          <View style={styles.View_8_26987}>
            <Text style={styles.Text_8_26987}>12</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a78f384-eac5-4c33-8c5a-4ea2f0fcd411"
            }}
            style={styles.ImageBackground_8_26988}
          />
        </View>
        <View style={styles.View_8_26989}>
          <Text style={styles.Text_8_26989}>עודכן לפני 2 דקות</Text>
        </View>
        <View style={styles.View_8_26990}>
          <View style={styles.View_8_26991}>
            <Text style={styles.Text_8_26991}>מס. 2245</Text>
          </View>
          <View style={styles.View_8_26992}>
            <Text style={styles.Text_8_26992}>חלבי 3#, אגף ג’</Text>
          </View>
        </View>
        <View style={styles.View_8_26993}>
          <Text style={styles.Text_8_26993}>טמפ’ מינימלית: 10 מעלות</Text>
        </View>
        <View style={styles.View_8_26994}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac5fe200-c105-4dec-922b-85661b7235d4"
            }}
            style={styles.ImageBackground_8_26995}
          />
        </View>
        <View style={styles.View_8_26999}>
          <Text style={styles.Text_8_26999}>טמפ’ מקסימלית: 18 מעלות</Text>
        </View>
        <View style={styles.View_8_27000}>
          <View style={styles.View_8_27001}>
            <View style={styles.View_I8_27001_61_6432} />
            <View style={styles.View_I8_27001_61_6433}>
              <Text style={styles.Text_I8_27001_61_6433}>34% נותרו</Text>
            </View>
            <View style={styles.View_I8_27001_61_6434}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I8_27001_61_6435}
              />
            </View>
          </View>
          <View style={styles.View_8_27002}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a1c5220-9f0a-48d9-ba7a-6a5e6bd0d89a"
              }}
              style={styles.ImageBackground_8_27003}
            />
          </View>
        </View>
        <View style={styles.View_8_27005}>
          <View style={styles.View_I8_27005_61_6432} />
          <View style={styles.View_I8_27005_61_6433}>
            <Text style={styles.Text_I8_27005_61_6433}>פעילה</Text>
          </View>
          <View style={styles.View_I8_27005_61_6434}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1199a790-4539-4b16-9704-462ae26abc7d"
              }}
              style={styles.ImageBackground_I8_27005_61_6435}
            />
          </View>
        </View>
        <View style={styles.View_8_27006}>
          <View style={styles.View_8_27007}>
            <View style={styles.View_I8_27007_61_6432} />
            <View style={styles.View_I8_27007_61_6433}>
              <Text style={styles.Text_I8_27007_61_6433}>תקלות אחרונות</Text>
            </View>
            <View style={styles.View_I8_27007_61_6434}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I8_27007_61_6435}
              />
            </View>
          </View>
          <View style={styles.View_8_27008}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/316f14de-3e23-43b5-8515-c06cd8b1e3fa"
              }}
              style={styles.ImageBackground_8_27009}
            />
          </View>
        </View>
        <View style={styles.View_8_27012}>
          <View style={styles.View_8_27013}>
            <View style={styles.View_I8_27013_61_6432} />
            <View style={styles.View_I8_27013_61_6433}>
              <Text style={styles.Text_I8_27013_61_6433}>פעולות מנהל</Text>
            </View>
            <View style={styles.View_I8_27013_61_6434} />
          </View>
          <View style={styles.View_8_27014}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90111cc9-d525-4d08-8c08-56959be8336d"
              }}
              style={styles.ImageBackground_8_27015}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_8_27018}>
        <View style={styles.View_I8_27018_61_8787}>
          <View style={styles.View_I8_27018_61_8788}>
            <View style={styles.View_I8_27018_61_8788_12_26}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09cd1327-6d7f-4066-b19c-90653a18cc14"
                }}
                style={styles.ImageBackground_I8_27018_61_8788_12_27}
              />
            </View>
          </View>
          <View style={styles.View_I8_27018_61_8789}>
            <Text style={styles.Text_I8_27018_61_8789}>חינם פלוס, יקיר</Text>
          </View>
        </View>
        <View style={styles.View_I8_27018_61_8790}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbc510e6-5c97-4a5b-88a4-72e6a05adaf1"
            }}
            style={styles.ImageBackground_I8_27018_61_8791}
          />
          <View style={styles.View_I8_27018_61_8792}>
            <View style={styles.View_I8_27018_61_8792_12_43}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05adfdd3-8fdf-478a-b9fb-cb6440f43f78"
                }}
                style={styles.ImageBackground_I8_27018_61_8792_12_44}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I8_27018_61_8805}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4653fdcd-1e50-4d2d-b26e-d1ac79d82ada"
            }}
            style={styles.ImageBackground_I8_27018_61_8806}
          />
          <View style={styles.View_I8_27018_61_8811}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/156de1a3-e470-43e9-9498-d59b60cd42c4"
              }}
              style={styles.ImageBackground_I8_27018_61_8812}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fd8f6e2-add1-4689-a64d-d449558bce4d"
              }}
              style={styles.ImageBackground_I8_27018_61_8816}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1497f6f6-9b12-4620-90c6-685c67755333"
              }}
              style={styles.ImageBackground_I8_27018_61_8820}
            />
          </View>
          <View style={styles.View_I8_27018_61_8827}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bca69186-a3f5-451e-88c5-b262ad6f59ee"
              }}
              style={styles.ImageBackground_I8_27018_61_8828}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e396606c-8f7d-41ec-9906-c994368c7a1e"
          }}
          style={styles.ImageBackground_I8_27018_61_8830}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18a9da0d-07cb-4882-b232-0e70b6dc9b7a"
          }}
          style={styles.ImageBackground_I8_27018_70_7931}
        />
        <View style={styles.View_I8_27018_70_7932}>
          <View style={styles.View_I8_27018_70_7933}>
            <Text style={styles.Text_I8_27018_70_7933}>MozTemp</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_8_27019}>
        <View style={styles.View_I8_27019_61_11118} />
        <View style={styles.View_I8_27019_61_11119}>
          <View style={styles.View_I8_27019_61_11120}>
            <View style={styles.View_I8_27019_61_11120_12_54}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6685946-53fc-4023-8004-431d1a6da691"
                }}
                style={styles.ImageBackground_I8_27019_61_11120_12_55}
              />
            </View>
          </View>
          <View style={styles.View_I8_27019_61_11121}>
            <Text style={styles.Text_I8_27019_61_11121}>חפש...</Text>
          </View>
        </View>
        <View style={styles.View_I8_27019_61_11122}>
          <View style={styles.View_I8_27019_61_11123} />
          <View style={styles.View_I8_27019_61_11124}>
            <View style={styles.View_I8_27019_61_11124_12_68}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84399783-1d24-46ad-b8da-e15dd04b753f"
                }}
                style={styles.ImageBackground_I8_27019_61_11124_12_69}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_8_27020} />
      <View style={styles.View_8_27021}>
        <View style={styles.View_8_27022} />
        <TouchableOpacity
          style={styles.TouchableOpacity_8_27023}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("8_27026"))
          }
        />
        <View style={styles.View_8_27024}>
          <Text style={styles.Text_8_27024}>אינך מורשה לבצע פעולה זאת!</Text>
        </View>
        <View style={styles.View_8_27025}>
          <Text style={styles.Text_8_27025}>אישור</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 247, 247, 1)" },
  View_2: { height: hp("127%") },
  View_8_26974: {
    width: wp("45%"),
    top: hp("125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_8_26974: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_26975: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_8_26976: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("121%"),
    backgroundColor: "rgba(219, 219, 219, 1)",
    overflow: "hidden"
  },
  View_8_26977: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_26978: {
    width: wp("31%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("3%"),
    backgroundColor: "rgba(11, 7, 18, 1)"
  },
  View_8_26979: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("35%")
  },
  View_8_26980: {
    width: wp("87%"),
    height: hp("60%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_26981: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_26982: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_26985: {
    width: wp("17%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    backgroundColor: "rgba(223, 223, 223, 1)"
  },
  View_8_26986: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_8_26987: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_26987: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_26988: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_8_26989: {
    width: wp("45%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    justifyContent: "flex-start"
  },
  Text_8_26989: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_26990: {
    width: wp("32%"),
    height: hp("7%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_8_26991: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_8_26991: {
    color: "rgba(66, 65, 65, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_26992: {
    width: wp("32%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_26992: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_26993: {
    width: wp("72%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_8_26993: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_26994: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_8_26995: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_26999: {
    width: wp("72%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_8_26999: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_27000: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("42%")
  },
  View_8_27001: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27001_61_6432: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(237, 237, 237, 1)",
    borderColor: "rgba(116, 116, 116, 1)",
    borderWidth: 1
  },
  View_I8_27001_61_6433: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_27001_61_6433: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27001_61_6434: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I8_27001_61_6435: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27002: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_8_27003: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27005: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27005_61_6432: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(237, 237, 237, 1)",
    borderColor: "rgba(116, 116, 116, 1)",
    borderWidth: 1
  },
  View_I8_27005_61_6433: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_27005_61_6433: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27005_61_6434: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I8_27005_61_6435: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27006: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("33%")
  },
  View_8_27007: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27007_61_6432: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(237, 237, 237, 1)",
    borderColor: "rgba(116, 116, 116, 1)",
    borderWidth: 1
  },
  View_I8_27007_61_6433: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_27007_61_6433: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27007_61_6434: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I8_27007_61_6435: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27008: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_27009: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27012: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("42%")
  },
  View_8_27013: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27013_61_6432: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(237, 237, 237, 1)",
    borderColor: "rgba(116, 116, 116, 1)",
    borderWidth: 1
  },
  View_I8_27013_61_6433: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_27013_61_6433: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27013_61_6434: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_27014: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_27015: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27018: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27018_61_8787: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("19%")
  },
  View_I8_27018_61_8788: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27018_61_8788_12_26: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_27018_61_8788_12_27: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_27018_61_8789: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_27018_61_8789: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27018_61_8790: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("13%")
  },
  ImageBackground_I8_27018_61_8791: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_27018_61_8792: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27018_61_8792_12_43: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_27018_61_8792_12_44: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_27018_61_8805: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I8_27018_61_8806: {
    width: wp("43%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%")
  },
  View_I8_27018_61_8811: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  ImageBackground_I8_27018_61_8812: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_I8_27018_61_8816: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_I8_27018_61_8820: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_27018_61_8827: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  ImageBackground_I8_27018_61_8828: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_27018_61_8830: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%")
  },
  ImageBackground_I8_27018_70_7931: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_I8_27018_70_7932: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_I8_27018_70_7933: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_27018_70_7933: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_27019: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27019_61_11118: {
    flexGrow: 1,
    width: wp("64%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I8_27019_61_11119: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2%")
  },
  View_I8_27019_61_11120: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27019_61_11120_12_54: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_27019_61_11120_12_55: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_27019_61_11121: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_27019_61_11121: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27019_61_11122: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_27019_61_11123: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I8_27019_61_11124: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27019_61_11124_12_68: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_27019_61_11124_12_69: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27020: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110%"),
    minHeight: hp("110%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(98, 98, 98, 1)",
    opacity: 0.03999999910593033
  },
  View_8_27021: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("56%")
  },
  View_8_27022: {
    width: wp("65%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  TouchableOpacity_8_27023: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("10%"),
    backgroundColor: "rgba(241, 241, 241, 1)",
    borderColor: "rgba(116, 116, 116, 1)",
    borderWidth: 1
  },
  View_8_27024: {
    width: wp("63%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_8_27024: {
    color: "rgba(66, 65, 65, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_27025: {
    width: wp("29%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "flex-start"
  },
  Text_8_27025: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
