import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoButtonDelete from "../components/CupertinoButtonDelete";
import MaterialMessageTextbox2 from "../components/MaterialMessageTextbox2";
import RNTesseractOcr from 'react-native-tesseract-ocr';
import ImagePicker from 'react-native-image-picker';
import RNPickerSelect from 'react-native-picker-select';

class IndexScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ocrResult: '',
      value: 'LANG_VIETNAMESE'
    }
  }

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
       // console.log('response', JSON.stringify(response));
        this.proccessText(response.path);
      }
    });
  }

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
       // console.log('response', JSON.stringify(response));
        this.proccessText(response.path);
      }
    });

  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
       // console.log('response', JSON.stringify(response));
        this.proccessText(response.path);
      }
    }); 
  } 

  proccessText = (imgPath) => {
    const tessOptions = {
      whitelist: null, 
      blacklist: null
    };
    var lang = this.state.value;
    console.log(lang);
    RNTesseractOcr.recognize(imgPath, lang, tessOptions)
    .then((result) => {
      result = JSON.stringify(result);
      this.setState({ ocrResult: result });
      console.log("OCR Result: ", result);
    })
    .catch((err) => {
      console.log("OCR Error: ", err);
    })
    .done();
  }
  
  render() {
        return (
            <View style={styles.container}>
            <RNPickerSelect
            onValueChange={(value) => this.state.value = value}
            items={[
                { label: 'ENGLISH', value: 'LANG_ENGLISH' },
                { label: 'VIETNAMESE', value: 'LANG_VIETNAMESE' }
            ]}
        />
            <CupertinoButtonDelete
                icon1Name="ios-camera"
                onPress={()=>this.chooseImage()}
                style={styles.cupertinoButtonDelete}
            ></CupertinoButtonDelete>
            <MaterialMessageTextbox2
                textInput1=""
                editable={false}
                text1=""
                value={this.state.ocrResult}
                style={styles.materialMessageTextbox2}
            ></MaterialMessageTextbox2>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoButtonDelete: {
    width: 111,
    height: 114,
    borderRadius: 13,
    marginTop: 60,
    alignSelf: "center"
  },
  materialMessageTextbox2: {
    width: 339,
    height: 324,
    marginTop: 40,
    alignSelf: "center"
  }
});

export default IndexScreen;
