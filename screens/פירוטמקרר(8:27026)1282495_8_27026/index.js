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
      <View style={styles.View_8_27027}>
        <Text style={styles.Text_8_27027}>עודכן לפני 2 דקות </Text>
      </View>
      <View style={styles.View_8_27028}>
        <View style={styles.View_I8_27028_12_1649} />
        <View style={styles.View_I8_27028_12_1650} />
        <View style={styles.View_I8_27028_12_1652}>
          <View style={styles.View_I8_27028_12_1653}>
            <Text style={styles.Text_I8_27028_12_1653}>
              מס. 135 חלבי 3#, אגף ג’
            </Text>
          </View>
          <View style={styles.View_I8_27028_12_1654}>
            <Text style={styles.Text_I8_27028_12_1654}>
              עודכן לפני 9 דקות ו27 שניות
            </Text>
          </View>
        </View>
        <View style={styles.View_I8_27028_12_1795} />
        <View style={styles.View_I8_27028_12_1796}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb02554f-933e-4885-860d-55254d365619"
            }}
            style={styles.ImageBackground_I8_27028_12_1797}
          />
        </View>
        <View style={styles.View_I8_27028_12_1801}>
          <View style={styles.View_I8_27028_12_1802}>
            <Text style={styles.Text_I8_27028_12_1802}>12</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a751a1ee-2911-4954-97de-5cc1b6d4572e"
            }}
            style={styles.ImageBackground_I8_27028_12_1803}
          />
        </View>
        <View style={styles.View_I8_27028_13_1467}>
          <View style={styles.View_I8_27028_13_1468} />
          <View style={styles.View_I8_27028_13_1469} />
          <View style={styles.View_I8_27028_13_1470}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6ffd2ce-7561-4593-94a8-62f2fcf55d8e"
              }}
              style={styles.ImageBackground_I8_27028_13_1471}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57c10a2b-a4c8-445e-ac67-3091070b457d"
        }}
        style={styles.ImageBackground_8_27029}
      />
      <View style={styles.View_8_27030}>
        <View style={styles.View_8_27031}>
          <TouchableOpacity
            style={styles.TouchableOpacity_8_27032}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("8_26277"))
            }
          >
            <View style={styles.View_8_27033}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/853673ab-fd3c-4d5a-9fdd-34d0ba7b8e8e"
                }}
                style={styles.ImageBackground_8_27034}
              />
            </View>
            <View style={styles.View_8_27037}>
              <Text style={styles.Text_8_27037}>סניפים</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_8_27038}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("8_26419"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4465c730-d2d9-4164-b07c-942a1e1cebc4"
              }}
              style={styles.ImageBackground_8_27039}
            />
            <View style={styles.View_8_27041}>
              <Text style={styles.Text_8_27041}>הגדרות</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_8_27042}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("8_27224"))
            }
          >
            <View style={styles.View_8_27043}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61207964-c39d-4a76-973f-c83ea0e9505b"
                }}
                style={styles.ImageBackground_8_27044}
              />
            </View>
            <View style={styles.View_8_27046}>
              <Text style={styles.Text_8_27046}>פרופיל</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_8_27047}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("8_26290"))
            }
          >
            <View style={styles.View_8_27048}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40af6b3c-3c02-4f41-93f6-a96aaea603be"
                }}
                style={styles.ImageBackground_8_27049}
              />
            </View>
            <View style={styles.View_8_27051}>
              <Text style={styles.Text_8_27051}>בית</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_8_27052}>
          <View style={styles.View_8_27053} />
        </View>
      </View>
      <View style={styles.View_8_27054} />
      <View style={styles.View_8_27055}>
        <View style={styles.View_8_27056}>
          <View style={styles.View_8_27057} />
          <TouchableOpacity
            style={styles.TouchableOpacity_8_27058}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("8_26290"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fa1d742-d185-4fc6-a064-12aac38c5a38"
              }}
              style={styles.ImageBackground_8_27059}
            />
          </TouchableOpacity>
          <View style={styles.View_8_27062} />
          <View style={styles.View_8_27063}>
            <View style={styles.View_8_27064}>
              <Text style={styles.Text_8_27064}>12</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cf62731-73db-4ce6-a51a-258021e9443e"
              }}
              style={styles.ImageBackground_8_27065}
            />
          </View>
          <View style={styles.View_8_27066}>
            <Text style={styles.Text_8_27066}>עודכן לפני 2 דקות</Text>
          </View>
          <View style={styles.View_8_27067}>
            <View style={styles.View_8_27068}>
              <Text style={styles.Text_8_27068}>מס. 2245</Text>
            </View>
            <View style={styles.View_8_27069}>
              <Text style={styles.Text_8_27069}>חלבי 3#, אגף ג’</Text>
            </View>
          </View>
          <View style={styles.View_8_27070}>
            <Text style={styles.Text_8_27070}>טמפ’ מינימלית: 10 מעלות</Text>
          </View>
          <View style={styles.View_8_27071}>
            <Text style={styles.Text_8_27071}>טמפ’ מקסימלית: 18 מעלות</Text>
          </View>
          <View style={styles.View_8_27072}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aad2ecde-64cf-4ec0-bee4-a7198344a13a"
              }}
              style={styles.ImageBackground_8_27073}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_8_27077}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("8_26580"))
          }
        >
          <View style={styles.View_8_27078}>
            <View style={styles.View_I8_27078_61_6432} />
            <View style={styles.View_I8_27078_61_6433}>
              <Text style={styles.Text_I8_27078_61_6433}>34% נותרו</Text>
            </View>
            <View style={styles.View_I8_27078_61_6434}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I8_27078_61_6435}
              />
            </View>
          </View>
          <View style={styles.View_8_27079}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0893415-ae14-488a-9ca4-2ad410fb4149"
              }}
              style={styles.ImageBackground_8_27080}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_8_29218}>
          <TouchableOpacity
            style={styles.TouchableOpacity_8_27082}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("8_26771"))
            }
          >
            <View style={styles.View_I8_27082_61_6432} />
            <View style={styles.View_I8_27082_61_6433}>
              <Text style={styles.Text_I8_27082_61_6433}>פעילה</Text>
            </View>
            <View style={styles.View_I8_27082_61_6434}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f4abbed-e5d0-4c13-b71c-130f09ba805d"
                }}
                style={styles.ImageBackground_I8_27082_61_6435}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_8_27083}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("8_26350"))
          }
        >
          <View style={styles.View_8_27084}>
            <View style={styles.View_I8_27084_61_6432} />
            <View style={styles.View_I8_27084_61_6433}>
              <Text style={styles.Text_I8_27084_61_6433}>תקלות אחרונות</Text>
            </View>
            <View style={styles.View_I8_27084_61_6434}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I8_27084_61_6435}
              />
            </View>
          </View>
          <View style={styles.View_8_27085}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2244600-648b-461f-acca-bf2e8272f751"
              }}
              style={styles.ImageBackground_8_27086}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_8_27089}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("8_26526"))
          }
        >
          <View style={styles.View_8_27090}>
            <View style={styles.View_I8_27090_61_6432} />
            <View style={styles.View_I8_27090_61_6433}>
              <Text style={styles.Text_I8_27090_61_6433}>עריכה\מחיקה</Text>
            </View>
            <View style={styles.View_I8_27090_61_6434} />
          </View>
          <View style={styles.View_8_27091}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2463096-6f2f-4ef6-bf64-e69850b85c0b"
              }}
              style={styles.ImageBackground_8_27092}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_8_27095} />
      <View style={styles.View_8_27096}>
        <View style={styles.View_I8_27096_70_9238}>
          <View style={styles.View_I8_27096_70_9239}>
            <View style={styles.View_I8_27096_70_9239_12_26}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bc72ff9-0a87-4c79-8dac-1ccf05e58c95"
                }}
                style={styles.ImageBackground_I8_27096_70_9239_12_27}
              />
            </View>
          </View>
          <View style={styles.View_I8_27096_70_9240}>
            <Text style={styles.Text_I8_27096_70_9240}>חינם פלוס, יקיר</Text>
          </View>
        </View>
        <View style={styles.View_I8_27096_70_9241}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45a4a020-dbb6-48db-89e7-fe7d8a4e6755"
            }}
            style={styles.ImageBackground_I8_27096_70_9242}
          />
          <View style={styles.View_I8_27096_70_9243}>
            <View style={styles.View_I8_27096_70_9243_12_43}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63eb3bf2-f10d-471d-b7e1-a2119a1f15e5"
                }}
                style={styles.ImageBackground_I8_27096_70_9243_12_44}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I8_27096_70_9244}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fd117a7-c863-42dd-a987-238324b9ba61"
            }}
            style={styles.ImageBackground_I8_27096_70_9245}
          />
          <View style={styles.View_I8_27096_70_9250}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5750b7a2-5ce0-45f5-8fe5-86066f05247d"
              }}
              style={styles.ImageBackground_I8_27096_70_9251}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38be96e3-14cc-4222-aafd-2e58bc7364fd"
              }}
              style={styles.ImageBackground_I8_27096_70_9255}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ae41cda-06fb-4edc-8614-2b30ed69cc95"
              }}
              style={styles.ImageBackground_I8_27096_70_9259}
            />
          </View>
          <View style={styles.View_I8_27096_70_9266}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee4a840f-b08e-495b-a6be-0a60daf50440"
              }}
              style={styles.ImageBackground_I8_27096_70_9267}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b42fba8e-b901-48af-b64e-5fcbe744f346"
          }}
          style={styles.ImageBackground_I8_27096_70_9269}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c17fe8cc-9509-439f-85b7-a88cab858bf3"
          }}
          style={styles.ImageBackground_I8_27096_70_9270}
        />
        <View style={styles.View_I8_27096_70_9271}>
          <View style={styles.View_I8_27096_70_9272}>
            <Text style={styles.Text_I8_27096_70_9272}>MozTemp</Text>
          </View>
        </View>
        <View style={styles.View_I8_27096_70_9284}>
          <Text style={styles.Text_I8_27096_70_9284}>שלום, אליהו</Text>
        </View>
      </View>
      <View style={styles.View_8_27097}>
        <View style={styles.View_I8_27097_61_11118} />
        <View style={styles.View_I8_27097_61_11119}>
          <View style={styles.View_I8_27097_61_11120}>
            <View style={styles.View_I8_27097_61_11120_12_54}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd94119f-9258-463d-9ba7-ee2fe437717c"
                }}
                style={styles.ImageBackground_I8_27097_61_11120_12_55}
              />
            </View>
          </View>
          <View style={styles.View_I8_27097_61_11121}>
            <Text style={styles.Text_I8_27097_61_11121}>חפש...</Text>
          </View>
        </View>
        <View style={styles.View_I8_27097_61_11122}>
          <View style={styles.View_I8_27097_61_11123} />
          <View style={styles.View_I8_27097_61_11124}>
            <View style={styles.View_I8_27097_61_11124_12_68}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48851f27-c38c-4e13-a383-13aaab32069f"
                }}
                style={styles.ImageBackground_I8_27097_61_11124_12_69}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 247, 247, 1)" },
  View_2: { height: hp("127%") },
  View_8_27027: {
    width: wp("45%"),
    top: hp("125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_8_27027: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_27028: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("117%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27028_12_1649: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(237, 237, 237, 1)"
  },
  View_I8_27028_12_1650: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("1%"),
    backgroundColor: "rgba(190, 190, 190, 1)"
  },
  View_I8_27028_12_1652: {
    flexGrow: 1,
    width: wp("56%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("1%")
  },
  View_I8_27028_12_1653: {
    width: wp("42%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_27028_12_1653: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27028_12_1654: {
    width: wp("45%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_I8_27028_12_1654: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27028_12_1795: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27028_12_1796: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  ImageBackground_I8_27028_12_1797: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_27028_12_1801: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("4%")
  },
  View_I8_27028_12_1802: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_27028_12_1802: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I8_27028_12_1803: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I8_27028_13_1467: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%")
  },
  View_I8_27028_13_1468: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(116, 116, 116, 1)"
  },
  View_I8_27028_13_1469: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27028_13_1470: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I8_27028_13_1471: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_8_27029: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_8_27030: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115%"),
    backgroundColor: "rgba(219, 219, 219, 1)",
    overflow: "hidden"
  },
  View_8_27031: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_8_27032: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_27033: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_27034: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27037: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_8_27037: {
    color: "rgba(74, 74, 81, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.44999999999999996,
    textTransform: "none"
  },
  TouchableOpacity_8_27038: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_27039: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_8_27041: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_8_27041: {
    color: "rgba(74, 74, 81, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.44999999999999996,
    textTransform: "none"
  },
  TouchableOpacity_8_27042: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_27043: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_27044: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27046: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_8_27046: {
    color: "rgba(74, 74, 81, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.44999999999999996,
    textTransform: "none"
  },
  TouchableOpacity_8_27047: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_27048: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_27049: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27051: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_8_27051: {
    color: "rgba(6, 20, 40, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.44999999999999996,
    textTransform: "none"
  },
  View_8_27052: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_27053: {
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
  View_8_27054: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("96%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_27055: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("34%")
  },
  View_8_27056: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_27057: {
    width: wp("87%"),
    height: hp("60%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(247, 247, 247, 1)",
    borderWidth: 1
  },
  TouchableOpacity_8_27058: {
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
  ImageBackground_8_27059: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27062: {
    width: wp("17%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    backgroundColor: "rgba(223, 223, 223, 1)"
  },
  View_8_27063: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_8_27064: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_27064: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_27065: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_8_27066: {
    width: wp("45%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    justifyContent: "flex-start"
  },
  Text_8_27066: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_27067: {
    width: wp("32%"),
    height: hp("7%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_8_27068: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_8_27068: {
    color: "rgba(66, 65, 65, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_27069: {
    width: wp("32%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_27069: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_27070: {
    width: wp("72%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_8_27070: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_27071: {
    width: wp("72%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_8_27071: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_27072: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_8_27073: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_8_27077: {
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
  View_8_27078: {
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
  View_I8_27078_61_6432: {
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
  View_I8_27078_61_6433: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_27078_61_6433: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27078_61_6434: {
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
  View_I8_27078_61_6435: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27079: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_8_27080: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_29218: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("33%")
  },
  TouchableOpacity_8_27082: {
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
  View_I8_27082_61_6432: {
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
  View_I8_27082_61_6433: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_27082_61_6433: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27082_61_6434: {
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
  ImageBackground_I8_27082_61_6435: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_8_27083: {
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
  View_8_27084: {
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
  View_I8_27084_61_6432: {
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
  View_I8_27084_61_6433: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_27084_61_6433: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27084_61_6434: {
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
  View_I8_27084_61_6435: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27085: {
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
  ImageBackground_8_27086: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_8_27089: {
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
  View_8_27090: {
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
  View_I8_27090_61_6432: {
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
  View_I8_27090_61_6433: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_27090_61_6433: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27090_61_6434: {
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
  View_8_27091: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_27092: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_27095: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_27096: {
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
  View_I8_27096_70_9238: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("19%")
  },
  View_I8_27096_70_9239: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27096_70_9239_12_26: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_27096_70_9239_12_27: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_27096_70_9240: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_27096_70_9240: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27096_70_9241: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%")
  },
  ImageBackground_I8_27096_70_9242: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_27096_70_9243: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27096_70_9243_12_43: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_27096_70_9243_12_44: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_27096_70_9244: {
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
  ImageBackground_I8_27096_70_9245: {
    width: wp("43%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%")
  },
  View_I8_27096_70_9250: {
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
  ImageBackground_I8_27096_70_9251: {
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
  ImageBackground_I8_27096_70_9255: {
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
  ImageBackground_I8_27096_70_9259: {
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
  View_I8_27096_70_9266: {
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
  ImageBackground_I8_27096_70_9267: {
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
  ImageBackground_I8_27096_70_9269: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%")
  },
  ImageBackground_I8_27096_70_9270: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_I8_27096_70_9271: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_I8_27096_70_9272: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_27096_70_9272: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27096_70_9284: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_I8_27096_70_9284: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_27097: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27097_61_11118: {
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
  View_I8_27097_61_11119: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2%")
  },
  View_I8_27097_61_11120: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27097_61_11120_12_54: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_27097_61_11120_12_55: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_27097_61_11121: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_27097_61_11121: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_27097_61_11122: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_27097_61_11123: {
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
  View_I8_27097_61_11124: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_27097_61_11124_12_68: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_27097_61_11124_12_69: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
