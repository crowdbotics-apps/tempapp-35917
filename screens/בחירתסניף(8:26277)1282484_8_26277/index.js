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
      <View style={styles.View_8_26278}>
        <Text style={styles.Text_8_26278}>עודכן לפני 2 דקות </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e4cc8d9-5754-4a8f-a5a5-08314f6c2b94"
        }}
        style={styles.ImageBackground_8_26279}
      />
      <View style={styles.View_8_26280}>
        <Text style={styles.Text_8_26280}>בחר סניף</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_26281}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_26290"))
        }
      >
        <View style={styles.View_I8_26281_61_9057}>
          <View style={styles.View_I8_26281_61_9058}>
            <View style={styles.View_I8_26281_61_9059} />
            <View style={styles.View_I8_26281_61_9060}>
              <Text style={styles.Text_I8_26281_61_9060}>סניף יקיר</Text>
            </View>
          </View>
          <View style={styles.View_I8_26281_61_9061}>
            <Text style={styles.Text_I8_26281_61_9061}>34 מקררים</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/904feb67-5e90-4b7c-b48f-9d68e589e009"
          }}
          style={styles.ImageBackground_I8_26281_61_9062}
        />
        <View style={styles.View_I8_26281_61_9066}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98eca510-be67-411e-987a-7f9e06e0e8bb"
            }}
            style={styles.ImageBackground_I8_26281_61_9070}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_26282}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_26290"))
        }
      >
        <View style={styles.View_I8_26282_60_7477}>
          <View style={styles.View_I8_26282_60_7478}>
            <View style={styles.View_I8_26282_60_7479} />
            <View style={styles.View_I8_26282_60_7493}>
              <Text style={styles.Text_I8_26282_60_7493}>סניף קדימה</Text>
            </View>
          </View>
          <View style={styles.View_I8_26282_60_7495}>
            <Text style={styles.Text_I8_26282_60_7495}>40 מקררים</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21537186-4330-4044-8493-833c37d3aeea"
          }}
          style={styles.ImageBackground_I8_26282_60_7500}
        />
        <View style={styles.View_I8_26282_60_7456}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/897d7dcf-b678-4767-9269-ee36425fb4dc"
            }}
            style={styles.ImageBackground_I8_26282_60_7457}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_26283}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_26290"))
        }
      >
        <View style={styles.View_I8_26283_60_7555}>
          <View style={styles.View_I8_26283_60_7556}>
            <View style={styles.View_I8_26283_60_7557} />
            <View style={styles.View_I8_26283_60_7558}>
              <Text style={styles.Text_I8_26283_60_7558}>סניף קרני שומרון</Text>
            </View>
          </View>
          <View style={styles.View_I8_26283_60_7559}>
            <Text style={styles.Text_I8_26283_60_7559}>15 מקררים</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d969392-732e-412e-b82c-aa2ebf048d42"
          }}
          style={styles.ImageBackground_I8_26283_60_7560}
        />
        <View style={styles.View_I8_26283_61_10403}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b59cb4a-f0d6-477f-8a49-2633917a00a7"
            }}
            style={styles.ImageBackground_I8_26283_61_10404}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_26284}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_26290"))
        }
      >
        <View style={styles.View_I8_26284_60_7477}>
          <View style={styles.View_I8_26284_60_7478}>
            <View style={styles.View_I8_26284_60_7479} />
            <View style={styles.View_I8_26284_60_7493}>
              <Text style={styles.Text_I8_26284_60_7493}>סניף שוהם</Text>
            </View>
          </View>
          <View style={styles.View_I8_26284_60_7495}>
            <Text style={styles.Text_I8_26284_60_7495}>34 מקררים</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ad74d5f-99e8-4693-8a78-ff4ccdb1e1a1"
          }}
          style={styles.ImageBackground_I8_26284_60_7500}
        />
        <View style={styles.View_I8_26284_60_7456}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62a2d075-ccca-4866-94a8-badd22eac4d3"
            }}
            style={styles.ImageBackground_I8_26284_60_7457}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_26285}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_26290"))
        }
      >
        <View style={styles.View_I8_26285_61_9057}>
          <View style={styles.View_I8_26285_61_9058}>
            <View style={styles.View_I8_26285_61_9059} />
            <View style={styles.View_I8_26285_61_9060}>
              <Text style={styles.Text_I8_26285_61_9060}>סניף תנובות</Text>
            </View>
          </View>
          <View style={styles.View_I8_26285_61_9061}>
            <Text style={styles.Text_I8_26285_61_9061}>22 מקררים</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/140bf712-b213-4931-b553-4eac88580169"
          }}
          style={styles.ImageBackground_I8_26285_61_9062}
        />
        <View style={styles.View_I8_26285_61_9066}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b993148-694c-401b-a049-51a17fca0ab6"
            }}
            style={styles.ImageBackground_I8_26285_61_9070}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_26286}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_26290"))
        }
      >
        <View style={styles.View_I8_26286_60_7477}>
          <View style={styles.View_I8_26286_60_7478}>
            <View style={styles.View_I8_26286_60_7479} />
            <View style={styles.View_I8_26286_60_7493}>
              <Text style={styles.Text_I8_26286_60_7493}>סניף בורגתה</Text>
            </View>
          </View>
          <View style={styles.View_I8_26286_60_7495}>
            <Text style={styles.Text_I8_26286_60_7495}>34 מקררים</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f9aa57a-418c-4644-a2ee-083686a67655"
          }}
          style={styles.ImageBackground_I8_26286_60_7500}
        />
        <View style={styles.View_I8_26286_60_7456}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da89b9a8-bd7e-4cf6-8413-e88100c14fff"
            }}
            style={styles.ImageBackground_I8_26286_60_7457}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_8_26287}>
        <View style={styles.View_I8_26287_122_128} />
      </View>
      <View style={styles.View_8_26288}>
        <View style={styles.View_I8_26288_70_9238}>
          <View style={styles.View_I8_26288_70_9239}>
            <View style={styles.View_I8_26288_70_9239_12_26}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f2aa8ba-cec2-4f29-a63b-e684ecc567d4"
                }}
                style={styles.ImageBackground_I8_26288_70_9239_12_27}
              />
            </View>
          </View>
          <View style={styles.View_I8_26288_70_9240}>
            <Text style={styles.Text_I8_26288_70_9240}>רשת חינם פלוס</Text>
          </View>
        </View>
        <View style={styles.View_I8_26288_70_9241}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78e0069f-f32c-4b4e-a695-47b57e3b84d9"
            }}
            style={styles.ImageBackground_I8_26288_70_9242}
          />
          <View style={styles.View_I8_26288_70_9243}>
            <View style={styles.View_I8_26288_70_9243_12_43}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe3d5d31-5527-4104-a9aa-028d323f66ed"
                }}
                style={styles.ImageBackground_I8_26288_70_9243_12_44}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I8_26288_70_9244}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03d16ecd-e013-46c6-b1ec-ff1233a6bb95"
            }}
            style={styles.ImageBackground_I8_26288_70_9245}
          />
          <View style={styles.View_I8_26288_70_9250}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d78478d-3aea-40ee-b0c9-4ccd74a76ca9"
              }}
              style={styles.ImageBackground_I8_26288_70_9251}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5095c5e3-0ea9-489a-bed2-a123ccaa94af"
              }}
              style={styles.ImageBackground_I8_26288_70_9255}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4263e16-e63f-434d-ba25-8eb49bae0982"
              }}
              style={styles.ImageBackground_I8_26288_70_9259}
            />
          </View>
          <View style={styles.View_I8_26288_70_9266}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd8d06b7-f3e5-41d4-ae1d-f1ab1356f10a"
              }}
              style={styles.ImageBackground_I8_26288_70_9267}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8fe4a10-4aaf-4591-941e-47f7770d87f5"
          }}
          style={styles.ImageBackground_I8_26288_70_9269}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c86ca1d-f4d3-4a5b-841f-c0ccd4915338"
          }}
          style={styles.ImageBackground_I8_26288_70_9270}
        />
        <View style={styles.View_I8_26288_70_9271}>
          <View style={styles.View_I8_26288_70_9272}>
            <Text style={styles.Text_I8_26288_70_9272}>MozTemp</Text>
          </View>
        </View>
        <View style={styles.View_I8_26288_70_9284}>
          <Text style={styles.Text_I8_26288_70_9284}>שלום, אליהו</Text>
        </View>
      </View>
      <View style={styles.View_8_26289}>
        <View style={styles.View_I8_26289_61_11118} />
        <View style={styles.View_I8_26289_61_11119}>
          <View style={styles.View_I8_26289_61_11120}>
            <View style={styles.View_I8_26289_61_11120_12_54}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fdc27542-0aaa-4eb4-8ed6-ce3fecc1ec9a"
                }}
                style={styles.ImageBackground_I8_26289_61_11120_12_55}
              />
            </View>
          </View>
          <View style={styles.View_I8_26289_61_11121}>
            <Text style={styles.Text_I8_26289_61_11121}>חפש...</Text>
          </View>
        </View>
        <View style={styles.View_I8_26289_61_11122}>
          <View style={styles.View_I8_26289_61_11123} />
          <View style={styles.View_I8_26289_61_11124}>
            <View style={styles.View_I8_26289_61_11124_12_68}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/beb1cc37-38c5-496e-a8e4-8f8c91364eb1"
                }}
                style={styles.ImageBackground_I8_26289_61_11124_12_69}
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
  View_8_26278: {
    width: wp("45%"),
    top: hp("125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_8_26278: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_26279: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_8_26280: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_8_26280: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_8_26281: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_26281_61_9057: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_26281_61_9058: {
    width: wp("37%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_26281_61_9059: {
    width: wp("37%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(247, 247, 247, 1)",
    borderWidth: 1
  },
  View_I8_26281_61_9060: {
    width: wp("33%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I8_26281_61_9060: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_26281_61_9061: {
    width: wp("29%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I8_26281_61_9061: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I8_26281_61_9062: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%")
  },
  View_I8_26281_61_9066: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I8_26281_61_9070: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_8_26282: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("69%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_26282_60_7477: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_26282_60_7478: {
    width: wp("37%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_26282_60_7479: {
    width: wp("37%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(247, 247, 247, 1)",
    borderWidth: 1
  },
  View_I8_26282_60_7493: {
    width: wp("33%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I8_26282_60_7493: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_26282_60_7495: {
    width: wp("29%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I8_26282_60_7495: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I8_26282_60_7500: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%")
  },
  View_I8_26282_60_7456: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I8_26282_60_7457: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_8_26283: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_26283_60_7555: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_26283_60_7556: {
    width: wp("37%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_26283_60_7557: {
    width: wp("37%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(247, 247, 247, 1)",
    borderWidth: 1
  },
  View_I8_26283_60_7558: {
    width: wp("32%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I8_26283_60_7558: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_26283_60_7559: {
    width: wp("29%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I8_26283_60_7559: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I8_26283_60_7560: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%")
  },
  View_I8_26283_61_10403: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I8_26283_61_10404: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_8_26284: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("96%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_26284_60_7477: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_26284_60_7478: {
    width: wp("37%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_26284_60_7479: {
    width: wp("37%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(247, 247, 247, 1)",
    borderWidth: 1
  },
  View_I8_26284_60_7493: {
    width: wp("33%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I8_26284_60_7493: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_26284_60_7495: {
    width: wp("29%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I8_26284_60_7495: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I8_26284_60_7500: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%")
  },
  View_I8_26284_60_7456: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I8_26284_60_7457: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_8_26285: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("69%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_26285_61_9057: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_26285_61_9058: {
    width: wp("37%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_26285_61_9059: {
    width: wp("37%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(247, 247, 247, 1)",
    borderWidth: 1
  },
  View_I8_26285_61_9060: {
    width: wp("33%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I8_26285_61_9060: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_26285_61_9061: {
    width: wp("29%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I8_26285_61_9061: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I8_26285_61_9062: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%")
  },
  View_I8_26285_61_9066: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I8_26285_61_9070: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_8_26286: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("96%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_26286_60_7477: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_26286_60_7478: {
    width: wp("37%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_26286_60_7479: {
    width: wp("37%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(247, 247, 247, 1)",
    borderWidth: 1
  },
  View_I8_26286_60_7493: {
    width: wp("33%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I8_26286_60_7493: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_26286_60_7495: {
    width: wp("29%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I8_26286_60_7495: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I8_26286_60_7500: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%")
  },
  View_I8_26286_60_7456: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I8_26286_60_7457: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_26287: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("122%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_I8_26287_122_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_8_26288: {
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
  View_I8_26288_70_9238: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("19%")
  },
  View_I8_26288_70_9239: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_26288_70_9239_12_26: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_26288_70_9239_12_27: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_26288_70_9240: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_26288_70_9240: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_26288_70_9241: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%")
  },
  ImageBackground_I8_26288_70_9242: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_26288_70_9243: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_26288_70_9243_12_43: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_26288_70_9243_12_44: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_26288_70_9244: {
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
  ImageBackground_I8_26288_70_9245: {
    width: wp("43%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%")
  },
  View_I8_26288_70_9250: {
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
  ImageBackground_I8_26288_70_9251: {
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
  ImageBackground_I8_26288_70_9255: {
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
  ImageBackground_I8_26288_70_9259: {
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
  View_I8_26288_70_9266: {
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
  ImageBackground_I8_26288_70_9267: {
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
  ImageBackground_I8_26288_70_9269: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%")
  },
  ImageBackground_I8_26288_70_9270: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_I8_26288_70_9271: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_I8_26288_70_9272: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_26288_70_9272: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_26288_70_9284: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_I8_26288_70_9284: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_26289: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_26289_61_11118: {
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
  View_I8_26289_61_11119: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2%")
  },
  View_I8_26289_61_11120: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_26289_61_11120_12_54: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_26289_61_11120_12_55: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_26289_61_11121: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_26289_61_11121: {
    color: "rgba(116, 116, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_26289_61_11122: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_26289_61_11123: {
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
  View_I8_26289_61_11124: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_26289_61_11124_12_68: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I8_26289_61_11124_12_69: {
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
