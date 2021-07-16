import React from 'react';
import axios from 'axios';
import {TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import {Flex, Box, Input, Center, Icon, VStack, Text} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import  LastSearchItem from '../components/LastSearchItem';
import { GlobalContext } from '../provider/GlobalProvider';

export default class SearchPage extends React.Component{
    static contextType = GlobalContext;

    constructor(props){
        super(props);

        this.state = {
            proxies: [],
            instagram: false,
            searchResults: []
        }
        this.searchUsername = this.searchUsername.bind(this);
        this.saveHistory = this.saveHistory.bind(this);
    }

    componentWillMount = async () => {
        // let proxies = await this.context.global.actions.getRandomProxies();
        // let instagram = proxies.websites.instagram;
        // this.setState({proxies: proxies, instagram: instagram})
    }

    searchUsername = async (username) => {
        const data = await require('../fakeJson/search.json');
        this.setState({searchResults: data})
        // var options = {
        //     method: 'GET',
        //     url: `https://instagram85.p.rapidapi.com/account/search/${username}`,
        //     params: {by: 'username'},
        //     headers: {
        //         'x-rapidapi-key': '5a280654b8msh299b14289f70df3p11f0b5jsnd966d6617889',
        //         'x-rapidapi-host': 'instagram85.p.rapidapi.com'
        //     },
        // };

        // await axios.request(options).then(response => this.setState({searchResults: response.data})).catch(function (error) {
        //     console.error(error);
        // });
       
    }

    saveHistory = async (user) => {
        console.log(user);
    }

    render(){
        return(
            <>
            <ScrollView style={{backgroundColor: '#FFFFFF'}}>
                <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss} accessible={false}>
                    <Flex mt={5} flex={1} px={5} safeArea>
                        <Box shadow={1}>
                            <Input
                                placeholder="Rechercher"
                                variant="filled"
                                width="100%"
                                borderRadius={50}
                                py={5}
                                px={3}
                                fontFamily='CeraPro'
                                fontSize={18}
                                backgroundColor='white'
                                onBlur={(e) => this.searchUsername(e.target.value)}
                                InputLeftElement={<Icon size={5} ml={6} color='grey' as={<Ionicons name="ios-search" />} />} 
                                _focus={{
                                    borderColor: 'transparent'
                                }}
                                />
                            </Box>
                            {Object.keys(this.state.searchResults).length > 0 &&
                            <VStack mt={10}>
                                <Text mb={1} style={{
                                    fontFamily: 'CeraProBold',
                                    fontSize: 16
                                }}>Résultats de la recherche</Text>
                                <Box>
                                    {this.state.searchResults.data.map((item, i) => {
                                        return <LastSearchItem key={i} user={item} save={this.saveHistory}/>
                                    })}
                                </Box>
                            </VStack>
                            }
                        </Flex>
                    </TouchableWithoutFeedback>
            </ScrollView>

            </>
        )
    }
}