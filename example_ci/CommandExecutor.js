'use strict';
let ReactNative = require('react-native');
let {
    NativeModules
} = ReactNative;
import { Adjust, AdjustEvent, AdjustConfig } from 'react-native-adjust';
let AdjustTest = NativeModules.AdjustTest;

class CommandExecutor {
    constructor() {
        this.adjustCommandExecutor = new AdjustCommandExecutor();
    }

    executeCommand(className, methodName, params) {
        switch (className) {
            case "Adjust":
                this.adjustCommandExecutor.executeCommand(methodName, params);
                break;
        }
    }
}

class AdjustCommandExecutor {
    constructor() {
        this.basePath = null;
    }

    executeCommand(methodName, params) {
        switch (methodName) {
            case "factory"                        : this.factory(params); break;
            case "config"                         : this.config(params); break;
            case "start"                          : this.start(params); break;
            case "event"                          : this.event(params); break;
            case "trackEvent"                     : this.trackEvent(params); break;
            case "resume"                         : this.resume(params); break;
            case "pause"                          : this.pause(params); break;
            case "setEnabled"                     : this.setEnabled(params); break;
            case "setOfflineMode"                 : this.setOfflineMode(params); break;
            case "sendFirstPackages"              : this.sendFirstPackages(params); break;
            case "addSessionCallbackParameter"    : this.addSessionCallbackParameter(params); break;
            case "addSessionPartnerParameter"     : this.addSessionPartnerParameter(params); break;
            case "removeSessionCallbackParameter" : this.removeSessionCallbackParameter(params); break;
            case "removeSessionPartnerParameter"  : this.removeSessionPartnerParameter(params); break;
            case "resetSessionCallbackParameters" : this.resetSessionCallbackParameters(params); break;
            case "resetSessionPartnerParameters"  : this.resetSessionPartnerParameters(params); break;
            case "setPushToken"                   : this.setPushToken(params); break;
            case "teardown"                       : this.teardown(params); break;
            case "openDeeplink"                   : this.openDeeplink(params); break;
            case "testBegin"                      : this.testBegin(params); break;
            case "testEnd"                        : this.testEnd(params); break;
            case default                          : this.default(methodName); break;
        }
    }

    factory(params) {
        if ('basePath' in params) {
            this.basePath = this.getFirstParameterValue(params, 'basePath');
        }

        if ('timerInterval' in params) {
            Adjust.setTimerInterval(parseFloat(this.getFirstParameterValue(params, 'timerInterval')));
        }

        if ('timerStart' in params) {
            Adjust.setTimerStart(parseFloat(this.getFirstParameterValue(params, 'timerStart')));
        }

        if ('sessionInterval' in params) {
            Adjust.setSessionInterval(parseFloat(this.getFirstParameterValue(params, 'sessionInterval')));
        }

        if ('subsessionInterval' in params) {
            Adjust.setSubsessionInterval(parseFloat(this.getFirstParameterValue(params, 'subsessionInterval')));
        }
    }

    teardown(params) {
        if ('deleteState' in params) {
            let deleteState = (this.getFirstParameterValue(params, 'deleteState') == 'true');
            Adjust.teardown(deleteState);
        }
    }

    config(params) {
        let environment = this.getFirstParameterValue(params, 'environment');
        let appToken = this.getFirstParameterValue(params, 'appToken');

        let adjustConfig = new AdjustConfig(appToken, environment);

        if ('logLevel' in params) {
            let logLevelS = this.getFirstParameterValue(params, 'logLevel');
            let logLevel = null;

            switch (logLevelS) {
                case "verbose": logLevel = AdjustConfig.LogLevelVerbose;
                    break;
                case "debug": logLevel = AdjustConfig.LogLevelDebug;
                    break;
                case "info": logLevel = AdjustConfig.LogLevelInfo;
                    break;
                case "warn": logLevel = AdjustConfig.LogLevelWarn;
                    break;
                case "error": logLevel = AdjustConfig.LogLevelError;
                    break;
                case "assert": logLevel = AdjustConfig.LogLevelAssert;
                    break;
                case "suppress": logLevel = AdjustConfig.LogLevelSuppress;
                    break;
            }

            adjustConfig.setLogLevel(logLevel);
        }

        if ('defaultTracker' in params) {
            let defaultTracker = this.getFirstParameterValue(params, 'defaultTracker');
            adjustConfig.setDefaultTracker(defaultTracker);
        }

        if ('delayStart' in params) {
            let delayStartS = this.getFirstParameterValue(params, 'delayStart');
            let delayStart = parseFloat(delayStartS);
            adjustConfig.setDelayStart(delayStart);
        }

        if ('eventBufferingEnabled' in params) {
            let eventBufferingEnabledS = this.getFirstParameterValue(params, 'eventBufferingEnabled');
            let eventBufferingEnabled = (eventBufferingEnabledS == 'true');
            adjustConfig.setEventBufferingEnabled(eventBufferingEnabled);
        }

        if ('sendInBackground' in params) {
            let sendInBackgroundS = this.getFirstParameterValue(params, 'sendInBackground');
            let sendInBackground = (sendInBackgroundS == 'true');
            adjustConfig.setSendInBackground(sendInBackground);
        }

        if ('userAgent' in params) {
            let userAgent = this.getFirstParameterValue(params, 'userAgent');
            adjustConfig.setUserAgent(userAgent);
        }

        if ('attributionCallbackSendAll' in params) {
            adjustConfig.setAttributionCallbackListener(function(attribution) {
                AdjustTest.addInfoToSend("trackerToken", attribution.trackerToken);
                AdjustTest.addInfoToSend("trackerName", attribution.trackerName);
                AdjustTest.addInfoToSend("network", attribution.network);
                AdjustTest.addInfoToSend("campaign", attribution.campaign);
                AdjustTest.addInfoToSend("adgroup", attribution.adgroup);
                AdjustTest.addInfoToSend("creative", attribution.creative);
                AdjustTest.addInfoToSend("clickLabel", attribution.clickLabel);
                AdjustTest.addInfoToSend("adid", attribution.adid);

                AdjustTest.sendInfoToServer();
            });
        }

        if ('sessionCallbackSendSuccess' in params) {
            adjustConfig.setSessionTrackingSucceededCallbackListener(function(sessionSuccess) {
                AdjustTest.addInfoToSend("message", sessionSuccess.message);
                AdjustTest.addInfoToSend("timestamp", sessionSuccess.timestamp);
                AdjustTest.addInfoToSend("adid", sessionSuccess.adid);
                AdjustTest.addInfoToSend("jsonResponse", sessionSuccess.jsonResponse);

                AdjustTest.sendInfoToServer();
            });
        }

        if ('sessionCallbackSendFailure' in params) {
            adjustConfig.setSessionTrackingFailedCallbackListener(function(sessionFailed) {
                AdjustTest.addInfoToSend("message", sessionFailed.message);
                AdjustTest.addInfoToSend("timestamp", sessionFailed.timestamp);
                AdjustTest.addInfoToSend("adid", sessionFailed.adid);
                AdjustTest.addInfoToSend("willRetry", sessionFailed.willRetry);
                AdjustTest.addInfoToSend("jsonResponse", sessionFailed.jsonResponse);

                AdjustTest.sendInfoToServer();
            });
        }

        if ('eventCallbackSendSuccess' in params) {
            adjustConfig.setEventTrackingSucceededCallbackListener(function(eventSuccess) {
                AdjustTest.addInfoToSend("message", eventSuccess.message);
                AdjustTest.addInfoToSend("timestamp", eventSuccess.timestamp);
                AdjustTest.addInfoToSend("adid", eventSuccess.adid);
                AdjustTest.addInfoToSend("eventToken", eventSuccess.eventToken);
                AdjustTest.addInfoToSend("jsonResponse", eventSuccess.jsonResponse);

                AdjustTest.sendInfoToServer();
            });
        }

        if ('eventCallbackSendFailure' in params) {
            adjustConfig.setEventTrackingFailedCallbackListener(function(eventFailed) {
                AdjustTest.addInfoToSend("message", eventFailed.message);
                AdjustTest.addInfoToSend("timestamp", eventFailed.timestamp);
                AdjustTest.addInfoToSend("adid", eventFailed.adid);
                AdjustTest.addInfoToSend("eventToken", eventFailed.eventToken);
                AdjustTest.addInfoToSend("willRetry", eventFailed.willRetry);
                AdjustTest.addInfoToSend("jsonResponse", eventFailed.jsonResponse);

                AdjustTest.sendInfoToServer();
            });
        }

        return adjustConfig;
    }

    start(params) {
        let adjustConfig = this.config(params);

        adjustConfig.setBasePath(this.basePath);

        Adjust.create(adjustConfig);
    }

    event(params) {
        let eventToken = this.getFirstParameterValue(params, 'eventToken');
        let adjustEvent = new AdjustEvent(eventToken);

        if ('revenue' in params) {
            let revenueParams = this.getValueFromKey(params, 'revenue');
            let currency = revenueParams[0];
            let revenue = parseFloat(revenueParams[1]);

            adjustEvent.setRevenue(revenue, currency);
        }

        if ('callbackParams' in params) {
            let callbackParams = this.getValueFromKey(params, "callbackParams");
            for (let i = 0; i < callbackParams.length; i = i + 2) {
                let key = callbackParams[i];
                let value = callbackParams[i + 1];

                adjustEvent.addCallbackParameter(key, value);
            }
        }

        if ('partnerParams' in params) {
            let partnerParams = this.getValueFromKey(params, "partnerParams");
            
            for (let i = 0; i < partnerParams.length; i = i + 2) {
                let key = partnerParams[i];
                let value = partnerParams[i + 1];

                adjustEvent.addPartnerParameter(key, value);
            }
        }
        
        if ('orderId' in params) {
            let orderId = this.getFirstParameterValue(params, 'orderId');
            adjustEvent.setTransactionId(orderId);
        }

        return adjustEvent;
    }

    trackEvent(params) {
        let adjustEvent = this.event(params);
        Adjust.trackEvent(adjustEvent);
    }

    setReferrer(params) {
        let referrer = this.getFirstParameterValue(params, 'referrer');
        Adjust.setReferrer(referrer);
    }

    pause(params) {
        Adjust.onPause();
    }

    resume(params) {
        Adjust.onResume();
    }

    setEnabled(params) {
        let enabled = this.getFirstParameterValue(params, "enabled") == 'true';
        Adjust.setEnabled(enabled);
    }

    setOfflineMode(params) {
        let enabled = this.getFirstParameterValue(params, "enabled") == 'true';
        Adjust.setOfflineMode(enabled);
    }

    sendFirstPackages(params) {
        Adjust.sendFirstPackages();
    }

    addSessionCallbackParameter(params) {
        let list = this.getValueFromKey(params, "KeyValue");

        for (let i = 0; i < list.length; i = i+2) {
            let key = list[i];
            let value = list[i+1];

            console.log(`[*RN*] addSessionCallbackParameter: key ${key} value ${value}`);

            Adjust.addSessionCallbackParameter(key, value);
        }
    }

    addSessionPartnerParameter(params) {
        let list = this.getValueFromKey(params, "KeyValue");

        for (let i = 0; i < list.length; i = i+2) {
            let key = list[i];
            let value = list[i+1];

            console.log(`[*RN*] addSessionPartnerParameter: key ${key} value ${value}`);

            Adjust.addSessionPartnerParameter(key, value);
        }
    }

    removeSessionCallbackParameter(params) {
        if ('key' in params) {
            let list = this.getValueFromKey(params, 'key');

            for (let i = 0; i < list.length; i++) {
                Adjust.removeSessionCallbackParameter(list[i]);
            }
        }
    }

    removeSessionPartnerParameter(params) {
        if ('key' in params) {
            let list = this.getValueFromKey(params, 'key');

            for (let i = 0; i < list.length; i++) {
                Adjust.removeSessionPartnerParameter(list[i]);
            }
        }
    }

    resetSessionCallbackParameters(params) {
        Adjust.resetSessionCallbackParameters();
    }

    resetSessionPartnerParameters(params) {
        Adjust.resetSessionPartnerParameters();
    }

    setPushToken(params) {
        let token = this.getFirstParameterValue(params, 'pushToken');
        Adjust.setPushToken(token);
    }

    openDeeplink(params) {
        console.log("[*RN*] openDeeplink");

        let deeplink = this.getFirstParameterValue(params, "deeplink");
        Adjust.appWillOpenUrl(deeplink);
    }

    sendReferrer(params) {
        console.log("[*RN*] sendReferrer");

        let referrer = this.getFirstParameterValue(params, 'referrer');
        Adjust.setReferrer(referrer);
    }

    testBegin(params) {
        console.log("[*RN*] testBegin");

        if ('basePath' in params) {
            this.basePath = this.getFirstParameterValue(params, "basePath");
        }

        Adjust.teardown(true);
        Adjust.setTimerInterval(-1);
        Adjust.setTimerStart(-1);
        Adjust.setSessionInterval(-1);
        Adjust.setSubsessionInterval(-1);
    }

    testEnd(params) {
        console.log("[*RN*] testEnd");

        Adjust.teardown(true);
    }

    default(methodName) {
        console.log("[*RN*] " + methodName + " not defined for Adjust instance");
    }

    getValueFromKey(params, key) {
        if (key in params) {
            return params[key];
        }

        return null;
    }

    getFirstParameterValue(params, key) {
        if (key in params) {
            let param = params[key];

            if (param != null || param.length >= 1) {
                return param[0];
            }
        }

        return null;
    }
}

export default CommandExecutor;
