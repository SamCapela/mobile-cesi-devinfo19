import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface HomeProps {
    data: string,
    width: string,
    height : string,
    shareEmail : () =>  void,
    gopicture : () => void,
    
}

export default class Home extends React.Component<HomeProps>{


    
    render() {
        
        return(
            <>
              <View style={style.center}>
                {this.props.data != null && <Image
                                    style={styles.images}
                                    source = {{uri: this.props.data}}         
                                  />
                }
                
              </View>
              <View style={{paddingTop:30, margin:10}}>
                {this.props.data == "" && <Text style={{textAlign:"center"}}>Il n'y a pas de photo !</Text>}
                {this.props.data != "" && <Text style={style.title}>URI: <Text style={style.content}>{this.props.data}</Text></Text>}
                {this.props.data != "" && <Text style={style.title}>Width: <Text style={style.content}>{this.props.width}px</Text></Text>}
                {this.props.data != "" && <Text style={style.title}>Height: <Text style={style.content}>{this.props.height}px</Text></Text>}
    
                
              </View>
              {this.props.data != "" && <Button title='Partager par Email' onPress={this.props.shareEmail}/>}
              <View style={style.container}>
                
                <Button title='Prendre une photo' onPress={this.props.gopicture}/>
                
              </View>
            </>
        );
    }

    
}
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