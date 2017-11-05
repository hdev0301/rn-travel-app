import React from 'react';
import Debug from 'skydreamer/utils/debugger';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { authActions } from 'skydreamer/redux/actions';
import Scaling from 'skydreamer/utils/scaling';
import Images from 'skydreamer/images';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScaleSheet from 'react-native-scalesheet';
import {
  CardSection,
  Spinner,
  Input,
} from 'skydreamer/components/common';

const {
  background,
  logo,
} = Images.login;

console.log('logo', logo);

const styles = ScaleSheet.create({
  containerStyle: {
    flex: 1,
  },
  containerLogoStyle: {
    flex: 4,
    marginTop: 25,
  },
  loginFormContainerStyle: {
    flex: 7,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  facebookBtn: {
    width: 250,
  },
  facebookBtnLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: 'white',
    marginRight: 35,
  },
  facebookBtnIcon: {
    marginLeft: 45,
  },
});

class LoginScreen extends React.Component {

  facebookLogin = () => {
    this.props.startFacebookAuth((error) => {
      Debug.error(error); // TODO: Resolve authentication error properly.
    });
  }

  render() {
    return (
      /*
      <Image style={{ flex: 1 }} resizeMode="cover" source={background}>
        <View style={styles.facebookBtn}>
          <Icon.Button
            style={styles.facebookBtn}
            name="facebook"
            backgroundColor="#3b579d"
            onPress={this.facebookLogin}
            borderRadius={Scaling.vertical(25)}
            iconStyle={styles.facebookBtnIcon}
          >
            <Text style={styles.facebookBtnLabel}>Login with Facebook</Text>
          </Icon.Button>
        </View>
      </Image> */
      <View style={styles.containerStyle}>
        <StatusBar
          hidden
        />
        <Image
          source={background}
          style={{
            flex: 1,
            width: null,
            height: null,
          }}>

          <View style={styles.containerLogoStyle}>
            <Image
              style={{ alignSelf: 'center', width: 70, height: 70 }}
              source={logo}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <Text
                style={{
                  fontSize: 45,
                  alignSelf: 'center',
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                  lineHeight: 65,
                }}
              >
                SkyDreamer
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'Poppins-Regular',
                }}
              >
              G R O U P   T R A V E L L I N G
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  textAlign: 'center',
                  color: 'white',
                  lineHeight: 16,
                  fontFamily: 'Poppins-Regular',
                }}
              >
              T O  T H E  N E X T  L E V E L
              </Text>
            </View>
          </View>

          <View style={styles.loginFormContainerStyle}>

            {/*
            <CardSection style={{ paddingTop: 10 }}>
              <FacebookLoginButton onPress={actions.loginUserViaFacebook} />
            </CardSection>
            */}

            <Icon.Button
              style={styles.facebookBtn}
              name="facebook"
              backgroundColor="#3b579d"
              onPress={this.facebookLogin}
              borderRadius={Scaling.vertical(25)}
              iconStyle={styles.facebookBtnIcon}
            >
              <Text style={styles.facebookBtnLabel}>Login with Facebook</Text>
            </Icon.Button>


          </View>
        </Image>
      </View>
    );
  }
}

/*
const styles = Scaling.newStylesheet({
  facebookBtn: {
    width: 250,
  },
  facebookBtnLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: 'white',
    marginRight: 35,
  },
  facebookBtnIcon: {
    marginLeft: 45,
  },
});
*/

const mapDispatch = {
  startFacebookAuth: authActions.startFacebookAuth,
};

export default connect(null, mapDispatch)(LoginScreen);
