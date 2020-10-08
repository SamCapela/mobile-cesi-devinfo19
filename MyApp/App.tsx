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


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

class App extends React.Component{

  camera : any;
  public state = {
    path : "home",
    data : ""
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
      console.log(data.uri);
      this.setState({path: "home"});
    }
  };

  render()
  {
    const {path} = this.state;
    const {data} = this.state;
    if(path == "home"){
      return(
        <>
        <View style={style.center}>
          {data != null && <Image
                              style={styles.images}
                              source = {{uri: data}}         
                            />
          }

          {data != "" && <Text>URI: {data}</Text>}
          {data == "" && <Text>Il n'y a pas de photo !</Text>}
        </View>
        <View style={style.container}>
          
          <Button title='Prendre une photo' onPress={this.gopicture}/>
          
        </View>
      </>
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
    backgroundColor: '#fff',
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
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});

export default App;
