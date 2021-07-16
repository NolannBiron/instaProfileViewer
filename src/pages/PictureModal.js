import { Container, Image, Text, Flex } from "native-base";
import React from "react";
import { View } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import { Dimensions, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default class PictureModal extends React.Component{

    constructor(props){
        super(props);

        const params = this.props.route.params;
        var data = params.image;
        this.state = {
            image: data,
        }
    }
    
    render(){
        return(
            <>
                <View style={styles.modalWrapper}>
                    <View style={{ height: "92%" ,width: '100%', backgroundColor:"#fff"}}>
                        <Flex top={3} position='absolute' w={'100%'} flexDirection={'row'} justifyContent={'center'}>
                            <FontAwesomeIcon size={30} icon={faChevronDown} />
                        </Flex>
                        <ImageZoom 
                            cropWidth={Dimensions.get('window').width}
                            cropHeight={Dimensions.get('window').height - 70}
                            imageWidth={Dimensions.get('window').width}
                            imageHeight={Dimensions.get('window').height}>
                                <Image size={'100%'} resizeMode={"contain"} source={{uri: this.state.image}} />
                        </ImageZoom>
                    </View>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    modalWrapper:{
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
        shadowColor: '#F7F7F7', 
        shadowColor: 'rgba(52, 52, 52, 100)',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 1,
    }
})