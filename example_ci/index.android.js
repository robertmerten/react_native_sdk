/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeEventEmitter,
} from 'react-native';

var ReactNative = require('react-native');
var {
    NativeModules
} = ReactNative;
var module_test = NativeModules.AdjustTest;
import CommandExecutor from './CommandExecutor.js';
import { Adjust, AdjustEvent, AdjustConfig } from 'react-native-adjust';

export default class exampleProject extends Component {
    constructor(props) {
        super(props);
        this.subscription = null;
    }

    componentWillMount() {
        var baseUrl = 'https://jenkins-1.adjust.com:8443';
        Adjust.setTestingMode(baseUrl);

        module_test.setTests("current/Test_SubsessionCount;current/Test_AttributionCallback;current/Test_DelayStart;current/Test_Event_Count");
        module_test.initTestSession(baseUrl);

        const adjustTestEventReceiver = new NativeEventEmitter(NativeModules.AdjustTest);
        var commandExecutor = new CommandExecutor();
        this.subscription = adjustTestEventReceiver.addListener(
            'command', (json) => {
                var commandDict = JSON.parse(json);
                var className = commandDict['className'];
                var functionName = commandDict['functionName'];
                var params = commandDict['params'];

                console.log('>>>>>>>>>> className: ' + className);
                console.log('>>>>>>>>>> functionName: ' + functionName);
                console.log('>>>>>>>>>> params: ' + params);

                //for (var key in params) {
                    //if (params.hasOwnProperty(key)) {
                        //var value = params[key];
                        //console.log(`key is ${key} and value is ${value}`);
                    //}
                //}

                commandExecutor.executeCommand(className, functionName, params);
            });
    }

    componentWillUnmount() {
        this.subscription.remove();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('Example', () => exampleProject);
