/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {RNCamera} from 'react-native-camera';
import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import Share from 'react-native-share';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/views/Home';

declare const global: {HermesInternal: null | {}};

class App extends React.Component{

  camera : any;
  public state = {
    path : "home",
    data : "",
    width: "",
    height: ""
  }

  

  home = () => {
    return (
      <>
        <View style={style.container}>
          <Button title="Prendre une photo" onPress={this.takePicture}/>
          <Text>{this.state.path}</Text>
        </View>
      </>
    );
  }

  shareEmail = () => {
    const shareOptions = {
      title: 'Share via',
      url: this.state.data,
      message: 'Contenu du message',
      social: Share.Social.EMAIL,
      filename: 'test' ,   
    }

    Share.shareSingle(shareOptions)
    .then((res) => { console.log(res) })
    .catch((err) => { err && console.log(err); });
  }

  gopicture = () => {
    this.setState({path : "pict"});
  }
  
  takePicture = async () => {
    if (this.camera) {
      
      const options = { 
        quality: 0.5,
        base64: true
        
      
      };
      const data = await this.camera.takePictureAsync(options);
      this.setState({data : data.uri})
      this.setState({height : data.height})
      this.setState({width : data.width})
      console.log(data.uri);
      
      this.setState({path: "home"});
    }
  };

  render()
  {
    const {path} = this.state;
    const {data} = this.state;
    const {width} = this.state;
    const {height} = this.state;
    if(path == "home"){
      return(
        
          <Home 
            data={data}
            gopicture={this.gopicture}
            width={width}
            height={height}
            shareEmail={this.shareEmail}
          />
        
      );
    }
    if(path == "pict")
    {
      return (
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={"back"}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              //console.log(barcodes);
            }}
          />
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  
};



const styles = StyleSheet.create({
  images : {
    height: 300,
    width: 300
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'cyan',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  }
});

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: 'gray'
  },
  text: {
    fontSize: 30
  },
  title: {
    color: 'red'
  },
  content: {
    color: 'black'
  }
});

export default App;
