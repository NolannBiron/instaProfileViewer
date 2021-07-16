import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { HStack, Image, Box, Text, Stack } from 'native-base';
import React, { useState } from 'react';
import { Touchable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

function LastSearchItem(props){

    const [user, setUser] = useState(props.user);
    props.save.bind(this);
    const navigation = useNavigation();

    return(
        <>
            <TouchableOpacity onPress={() => {navigation.navigate('UserDetails', {navigation: navigation, user: user}); props.save(user)}}>
                <Stack mt={6} alignItems="flex-start">
                    <HStack alignItems='center'>
                        <Image w="60" h="60" borderRadius={100} alt="" source={{uri: user.picture}} />
                        <Box ml={2} flex={1}>
                            <Text fontSize={14} fontFamily={'CeraProBold'}>{user.username}</Text>
                            <Text mt={1} fontSize={10} fontFamily={'CeraPro'}>{user.full_name}</Text>
                        </Box>
                        <Box ml={10}>
                            <FontAwesomeIcon icon={faBookmark} />
                        </Box>
                    </HStack>
                </Stack>
            </TouchableOpacity>
        </>
    )
}

export default LastSearchItem;