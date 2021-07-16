import React from "react";
import { Image, Text, Flex, Box, Center } from "native-base";
import { useNavigation } from "@react-navigation/core";
import ImageZoom from "react-native-image-pan-zoom";
import { Dimensions, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


export default class UserPage extends React.Component{

    constructor(props){
        super(props);

        const params = this.props.route.params;
        var data = params.user;
        this.state = {
            user: data,
            modalVisible: false
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render(){

        return(
            <>
            <Flex backgroundColor={'#FFFFFF'} flex={1} safeArea>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
                    <Flex left={4} w={'100%'} zIndex={1000} position='absolute' top={20}>
                        <Flex flexDirection={'row'} alignItems={'center'}>
                            <FontAwesomeIcon size={35} icon={faChevronLeft} color='black'/>
                            <Text fontSize={20} fontFamily={'CeraProBold'} ml={2}>Retour</Text>
                        </Flex>
                    </Flex>
                </TouchableWithoutFeedback>
                <Center flex={1}>
                    <Box>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('UserModal', {image: this.state.user.picture})}>
                            <Image size={'2xl'} alt='' resizeMode="cover" source={{uri: this.state.user.picture}} />
                        </TouchableHighlight>
                    </Box>
                    <Text fontSize={18} mt={5} fontFamily={'CeraProBold'}>@{this.state.user.username}</Text>
                </Center>
            </Flex>
            </>
        )
    }
}
