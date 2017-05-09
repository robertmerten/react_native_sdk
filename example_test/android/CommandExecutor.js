'use strict';
var ReactNative = require('react-native');
var {
    NativeModules
} = ReactNative;
import { Adjust, AdjustEvent, AdjustConfig } from 'react-native-adjust';

class CommandExecutor {
    static executeCommand(className, methodName, params) {
        console.log('executeCommand[CommandExecutor]: >>>');
        switch (className) {
            case "Adjust":
                AdjustCommandExecutor.executeCommand(methodName, params);
                break;
        }
    }
}

class AdjustCommandExecutor {
    static executeCommand(methodName, params) {
        console.log('executeCommand[AdjustCommandExecutor]: >>>');
        switch (methodName) {
            case "foo": foo(params); break;
            case "factory": factory(params); break;
            //case "config": config(); break;
            //case "start": start(); break;
            //case "event": event(); break;
            //case "trackEvent": trackEvent(); break;
            //case "resume": resume(); break;
            //case "pause": pause(); break;
            //case "setEnabled": setEnabled(); break;
            //case "setReferrer": setReferrer(); break;
            //case "setOfflineMode": setOfflineMode(); break;
            //case "sendFirstPackages": sendFirstPackages(); break;
            //case "addSessionCallbackParameter": addSessionCallbackParameter(); break;
            //case "addSessionPartnerParameter": addSessionPartnerParameter(); break;
            //case "removeSessionCallbackParameter": removeSessionCallbackParameter(); break;
            //case "removeSessionPartnerParameter": removeSessionPartnerParameter(); break;
            //case "resetSessionCallbackParameters": resetSessionCallbackParameters(); break;
            //case "resetSessionPartnerParameters": resetSessionPartnerParameters(); break;
            //case "setPushToken": setPushToken(); break;
            //case "teardown": teardown(); break;
        }
    }

    private void foo(params) {
        console.log("foo: " + params['bunny'][0]);
        if ('bunny' in params) {
            console.log("Hello world: " + params['bunny'][0]);
        }
    }

    private void factory(params) {
        if ('basePath' in params) {
            this.basePath = params['basePath'][0];
        }
    }

    //private void config() {
        //String configName = null;
        //if (command.parameters.containsKey("configName")) {
            //configName = command.getFirstParameterValue("configName");
        //} else {
            //configName = DefaultConfigName;
        //}

        //AdjustConfig adjustConfig = null;
        //if (savedInstances.containsKey(configName)) {
            //adjustConfig = (AdjustConfig)savedInstances.get(configName);
        //} else {
            //String environment = command.getFirstParameterValue("environment");
            //String appToken = command.getFirstParameterValue("appToken");
            //Context context = this.context;
            //if ("null".equalsIgnoreCase(command.getFirstParameterValue("context"))) {
                //context = null;
            //}
            //adjustConfig = new AdjustConfig(context, appToken, environment);
            //savedInstances.put(configName, adjustConfig);
        //}

        //if (command.containsParameter("logLevel")) {
            //String logLevelS = command.getFirstParameterValue("logLevel");
            //LogLevel logLevel = null;
            //switch (logLevelS) {
                //case "verbose": logLevel = LogLevel.VERBOSE;
                    //break;
                //case "debug": logLevel = LogLevel.DEBUG;
                    //break;
                //case "info": logLevel = LogLevel.INFO;
                    //break;
                //case "warn": logLevel = LogLevel.WARN;
                    //break;
                //case "error": logLevel = LogLevel.ERROR;
                    //break;
                //case "assert": logLevel = LogLevel.ASSERT;
                    //break;
                //case "suppress": logLevel = LogLevel.SUPRESS;
                    //break;
            //}
            //adjustConfig.setLogLevel(logLevel);
        //}

        //if (command.containsParameter("defaultTracker")) {
            //String defaultTracker = command.getFirstParameterValue("defaultTracker");
            //adjustConfig.setDefaultTracker(defaultTracker);
        //}

        //if (command.containsParameter("delayStart")) {
            //String delayStartS = command.getFirstParameterValue("delayStart");
            //double delayStart = Double.parseDouble(delayStartS);
            //adjustConfig.setDelayStart(delayStart);
        //}

        //if (command.containsParameter("deviceKnown")) {
            //String deviceKnownS = command.getFirstParameterValue("deviceKnown");
            //boolean deviceKnown = "true".equals(deviceKnownS);
            //adjustConfig.setDeviceKnown(deviceKnown);
        //}

        //if (command.containsParameter("eventBufferingEnabled")) {
            //String eventBufferingEnabledS = command.getFirstParameterValue("eventBufferingEnabled");
            //boolean eventBufferingEnabled = "true".equals(eventBufferingEnabledS);
            //adjustConfig.setEventBufferingEnabled(eventBufferingEnabled);
        //}

        //if (command.containsParameter("sendInBackground")) {
            //String sendInBackgroundS = command.getFirstParameterValue("sendInBackground");
            //boolean sendInBackground = "true".equals(sendInBackgroundS);
            //adjustConfig.setSendInBackground(sendInBackground);
        //}

        //if (command.containsParameter("userAgent")) {
            //String userAgent = command.getFirstParameterValue("userAgent");
            //adjustConfig.setUserAgent(userAgent);
        //}
        //// XXX add listeners
    //}

    //private void start() {
        //config();
        //String configName = null;
        //if (command.parameters.containsKey("configName")) {
            //configName = command.getFirstParameterValue("configName");
        //} else {
            //configName = DefaultConfigName;
        //}

        //AdjustConfig adjustConfig = (AdjustConfig)savedInstances.get(configName);

        //adjustConfig.setBasePath(basePath);
        //Adjust.onCreate(adjustConfig);
    //}

    //private void event() throws NullPointerException {
        //String eventName = null;
        //if (command.parameters.containsKey("eventName")) {
            //eventName = command.getFirstParameterValue("eventName");
        //} else {
            //eventName = DefaultEventName;
        //}

        //AdjustEvent adjustEvent = null;
        //if (savedInstances.containsKey(eventName)) {
            //adjustEvent = (AdjustEvent)savedInstances.get(eventName);
        //} else {
            //String eventToken = command.getFirstParameterValue("eventToken");
            //adjustEvent = new AdjustEvent(eventToken);
            //savedInstances.put(eventName, adjustEvent);
        //}

        //if (command.parameters.containsKey("revenue")) {
            //List<String> revenueParams = command.parameters.get("revenue");
            //String currency = revenueParams.get(0);
            //double revenue = Double.parseDouble(revenueParams.get(1));
            //adjustEvent.setRevenue(revenue, currency);
        //}

        //if (command.parameters.containsKey("callbackParams")) {
            //List<String> callbackParams = command.parameters.get("callbackParams");
            //for (int i = 0; i < callbackParams.size(); i = i + 2) {
                //String key = callbackParams.get(i);
                //String value = callbackParams.get(i + 1);
                //adjustEvent.addCallbackParameter(key, value);
            //}
        //}
        //if (command.parameters.containsKey("partnerParams")) {
            //List<String> partnerParams = command.parameters.get("partnerParams");
            //for (int i = 0; i < partnerParams.size(); i = i + 2) {
                //String key = partnerParams.get(i);
                //String value = partnerParams.get(i + 1);
                //adjustEvent.addPartnerParameter(key, value);
            //}
        //}
        //if (command.parameters.containsKey("orderId")) {
            //String orderId = command.getFirstParameterValue("orderId");
            //adjustEvent.setOrderId(orderId);
        //}

////        Adjust.trackEvent(adjustEvent);
    //}

    //private void trackEvent() {
        //event();
        //String eventName = null;
        //if (command.parameters.containsKey("eventName")) {
            //eventName = command.getFirstParameterValue("eventName");
        //} else {
            //eventName = DefaultEventName;
        //}
        //AdjustEvent adjustEvent = (AdjustEvent)savedInstances.get(eventName);
        //Adjust.trackEvent(adjustEvent);
    //}

    //private void setReferrer() {
        //String referrer = command.getFirstParameterValue("referrer");
        //Adjust.setReferrer(referrer);
    //}

    //private void pause() {
        //Adjust.onPause();
    //}

    //private void resume() {
        //Adjust.onResume();
    //}

    //private void setEnabled() {
        //Boolean enabled = Boolean.valueOf(command.getFirstParameterValue("enabled"));
        //Adjust.setEnabled(enabled);
    //}

    //private void setOfflineMode() {
        //Boolean enabled = Boolean.valueOf(command.getFirstParameterValue("enabled"));
        //Adjust.setOfflineMode(enabled);
    //}

    //private void sendFirstPackages() {
        //Adjust.sendFirstPackages();
    //}

    //private void addSessionCallbackParameter() {
        //for (List<String> keyValuePairs: command.parameters.values()) {
            //String key = keyValuePairs.get(0);
            //String value = keyValuePairs.get(1);
            //Adjust.addSessionCallbackParameter(key, value);
        //}
    //}

    //private void addSessionPartnerParameter() {
        //for (List<String> keyValuePairs: command.parameters.values()) {
            //String key = keyValuePairs.get(0);
            //String value = keyValuePairs.get(1);
            //Adjust.addSessionPartnerParameter(key, value);
        //}
    //}

    //private void removeSessionCallbackParameter() {
        //String key = command.getFirstParameterValue("key");
        //Adjust.removeSessionCallbackParameter(key);
    //}

    //private void removeSessionPartnerParameter() {
        //String key = command.getFirstParameterValue("key");

        //Adjust.removeSessionPartnerParameter(key);
    //}

    //private void resetSessionCallbackParameters() {
        //Adjust.resetSessionCallbackParameters();
    //}

    //private void resetSessionPartnerParameters() {
        //Adjust.resetSessionPartnerParameters();
    //}

    //private void setPushToken() {
        //String token = command.getFirstParameterValue("pushToken");

        //Adjust.setPushToken(token);
    //}

    //private void teardown() throws NullPointerException {
        //String deleteStateString = command.getFirstParameterValue("deleteState");
        //boolean deleteState = Boolean.parseBoolean(deleteStateString);

        //Log.d("TestApp", "calling teardown with delete state");
        //AdjustFactory.teardown(this.context, deleteState);
    //}
}

//class Dictionary {
    //static getParam(params, paramName) {
        //for(var i = 0; i < params.length; i++) {
            //if(params[i].name == paramName) {
                //return params[i].value;
            //}
        //}

        //return null;
    //}

    //static sleep(ms) {
        //return new Promise(resolve => setTimeout(resolve, ms));
    //}

    //static async executeCommand(methodName, params) {
        //console.log("translateAndExecuteCommands(): >>>>>>>");
        //console.log("translateAndExecuteCommands(): " + commands.length);

        //for (var i = 0; i < commands.length; i++) {
            //var className = commands[i].className;
            //var functionName = commands[i].functionName;
            //var params = commands[i].params;

            //console.log("command #" + i + ": class: " + className);

            //switch (className) {
                //case "AdjustAnalyzer":
                    //Dictionary_AdjustAnalyzer.receiveCommand(functionName, params);
                    //break;
                    ////case "AdjustFactory":
                    ////Dictionary_AdjustFactory.receiveCommand(functionName, params);
                    ////break;
                //case "Adjust":
                    //Dictionary_Adjust.receiveCommand(functionName, params);
                    //break;
                //case "System":
                    //console.log("Dictionary_system: receivecommand: >>>>>>");
                    //switch (functionName) {
                        //case "sleep":
                            //console.log("sleeping...")
                            //var mills = parseInt(AnalyzerDictionary.getParam(params, "mills"));
                            //await this.sleep(mills);
                            //console.log("slept...")
                            //break;
                    //}
                    //break;
                //case "Foo":
                    //Dictionary_Foo.receiveCommand(functionName, params);
                    //break;
            //}
        //}
    //}
//}

//class Dictionary_Foo {
    //static receiveCommand(functionName, params) {
        //console.log("Dictionary_foo: receivecommand: >>>>>>");
        //switch (functionName) {
            //case "fooTest":
                //console.log("Footest is running successfully");
                //break;
        //}
    //}
//}

////class Dictionary_System {
////static sleep(ms) {
////return new Promise(resolve => setTimeout(resolve, ms));
////}

////static receiveCommand(functionName, params) {
////console.log("Dictionary_system: receivecommand: >>>>>>");
////switch (functionName) {
////case "sleep":
////console.log("sleeping...")
////var mills = parseInt(AnalyzerDictionary.getParam(params, "mills"));
////await this.sleep(5000);
////console.log("slept...")
////break;
////}
////}
////}



////class Dictionary_AdjustFactory {
////static receiveCommand(functionName, params) {
////console.log("Dictionary_adjustfactory: receivecommand: >>>>>>");
////switch (functionName) {
////case "tearDown":
////AdjustFactory.tearDown(callsite);
////break;
////}
////}
////}

//class Dictionary_AdjustAnalyzer {
    //static receiveCommand(functionName, params) {
        //console.log("Dictionary_adjustAnalyzer: receivecommand: >>>>>>");
        //switch (functionName) {
            //case "reportState":
                //var callsite = AnalyzerDictionary.getParam(params, "callSite");
                //AdjustAnalyzer.reportState(callsite);
                //break;
            //case "terminate":
                //AdjustAnalyzer.terminate();
                //break;
        //}
    //}
//}

//class Dictionary_Adjust {
    //static receiveCommand(functionName, params) {
        //console.log("Dictionary_adjust: receivecommand: >>>>>>");
        //switch (functionName) {
            //case "onCreate":
                //var appToken = AnalyzerDictionary.getParam(params, "appToken");
                //var environment = AnalyzerDictionary.getParam(params, "environment");
                //var adjustConfig = new AdjustConfig(appToken, environment);
                //Adjust.create(adjustConfig);
                //break;
            //case "onResume":
                //Adjust.onResume();
                //break;
            //case "onPause":
                //Adjust.onPause();
                //break;
        //}
    //}
//}

export default CommandExecutor;
