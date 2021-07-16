import React from 'react';
import {Text} from 'react-native';
import {Center, Box} from 'native-base';

export default class SettingsPage extends React.Component{

    render(){
        return(
            <>
            <Center flex={1}>
                <Box>
                    <Text>Settings</Text>
                </Box>
            </Center>
            </>
        )
    }
}