'use strict';

import { DeviceEventEmitter } from 'react-native';
var ReactNative = require('react-native');
var {
    NativeModules
} = ReactNative;

var module_adjust = NativeModules.Adjust;
var Adjust = {};

Adjust.create = function(adjustConfig) {
    module_adjust.create(adjustConfig);
};

Adjust.trackEvent = function (adjustEvent) {
    module_adjust.trackEvent(adjustEvent);
};

Adjust.setEnabled = function(enabled) {
    module_adjust.setEnabled(enabled);
};

Adjust.isEnabled = function(callback) {
    module_adjust.isEnabled(callback);
};

Adjust.setOfflineMode = function(enabled) {
    module_adjust.setOfflineMode(enabled);
};

Adjust.setPushToken = function(token) {
    module_adjust.setPushToken(token);
};

Adjust.appWillOpenUrl = function(uri) {
    module_adjust.appWillOpenUrl(uri);
};

Adjust.sendFirstPackages = function() {
    module_adjust.sendFirstPackages();
};

Adjust.addSessionCallbackParameter = function(key, value) {
    module_adjust.addSessionCallbackParameter(key, value);
};

Adjust.addSessionPartnerParameter = function(key, value) {
    module_adjust.addSessionPartnerParameter(key, value);
};

Adjust.removeSessionCallbackParameter = function(key) {
    module_adjust.removeSessionCallbackParameter(key);
};

Adjust.removeSessionPartnerParameter = function(key) {
    module_adjust.removeSessionPartnerParameter(key);
};

Adjust.resetSessionCallbackParameters = function() {
    module_adjust.resetSessionCallbackParameters();
};

Adjust.resetSessionPartnerParameters = function() {
    module_adjust.resetSessionPartnerParameters();
};

Adjust.getIdfa = function(callback) {
    module_adjust.getIdfa(callback);
};

Adjust.getGoogleAdId = function(callback) {
    module_adjust.getGoogleAdId(callback);
};

Adjust.getAdid = function(callback) {
    module_adjust.getAdid(callback);
};

Adjust.getAttribution = function(callback) {
    module_adjust.getAttribution(callback);
};

Adjust.setTestingMode = function(baseUrl) {
    module_adjust.setTestingMode(baseUrl);
};

Adjust.teardown = function (deleteState) {
    if (undefined != AdjustConfig.AttributionSubscription) {
        AdjustConfig.AttributionSubscription.remove();
        AdjustConfig.AttributionSubscription = undefined;
    }

    if (undefined != AdjustConfig.EventTrackingSucceededSubscription) {
        AdjustConfig.EventTrackingSucceededSubscription.remove();
        AdjustConfig.EventTrackingSucceededSubscription = undefined;
    }

    if (undefined != AdjustConfig.EventTrackingFailedSubscription) {
        AdjustConfig.EventTrackingFailedSubscription.remove();
        AdjustConfig.EventTrackingFailedSubscription = undefined;   
    }

    if (undefined != AdjustConfig.SessionTrackingSucceededSubscription) {
        AdjustConfig.SessionTrackingSucceededSubscription.remove();
        AdjustConfig.SessionTrackingSucceededSubscription = undefined;   
    }

    if (undefined != AdjustConfig.SessionTrackingFailedSubscription) {
        AdjustConfig.SessionTrackingFailedSubscription.remove();
        AdjustConfig.SessionTrackingFailedSubscription = undefined;   
    }

    if (undefined != AdjustConfig.DeferredDeeplinkSubscription) {
        AdjustConfig.DeferredDeeplinkSubscription.remove();
        AdjustConfig.DeferredDeeplinkSubscription = undefined;   
    }

    module_adjust.teardown(deleteState);
};

Adjust.setReferrer = function(referrer) {
    module_adjust.setReferrer(referrer);
}

Adjust.onResume = function () {
    module_adjust.onResume();
};

Adjust.onPause = function () {
    module_adjust.onPause();
};

Adjust.setTimerInterval = function (timerInterval) {
    module_adjust.setTimerInterval(timerInterval);
};

Adjust.setTimerStart = function (timerStart) {
    module_adjust.setTimerStart(timerStart);
};

Adjust.setSessionInterval = function (sessionInterval) {
    module_adjust.setSessionInterval(sessionInterval);
};

Adjust.setSubsessionInterval = function (subsessionInterval) {
    module_adjust.setSubsessionInterval(subsessionInterval);
};

var AdjustEvent = function (eventToken) {
    this.eventToken = eventToken;
    this.revenue = null;
    this.currency = null;
    this.transactionId = null;
    this.callbackParameters = {};
    this.partnerParameters = {};

    this.setRevenue = function(revenue, currency) {
        this.revenue = revenue;
        this.currency = currency;
    };

    this.addCallbackParameter = function(key, value) {
        this.callbackParameters[key] = value;
    };

    this.addPartnerParameter = function(key, value) {
        this.partnerParameters[key] = value;
    };

    this.setTransactionId = function(transactionId) {
        this.transactionId = transactionId;
    };

    this.clone = function(rhs) {
        this.eventToken         = rhs.eventToken;
        this.revenue            = rhs.revenue;
        this.currency           = rhs.currency;
        this.transactionId      = rhs.transactionId;

        for (var attr in rhs.callbackParameters) {
            if (rhs.callbackParameters.hasOwnProperty(attr)) this.callbackParameters[attr] = rhs.callbackParameters[attr];
        }

        for (var attr in rhs.partnerParameters) {
            if (rhs.partnerParameters.hasOwnProperty(attr)) this.partnerParameters[attr] = rhs.partnerParameters[attr];
        }
    };
};

var AdjustConfig = function(appToken, environment) {
    this.appToken = appToken;
    this.environment = environment;

    this.sdkPrefix = "react_native4.11.3";
    this.logLevel = null;

    this.eventBufferingEnabled = null;
    this.shouldLaunchDeeplink = null;
    this.sendInBackground = null;

    this.delayStart = null;

    this.defaultTracker = null;
    this.referrer = null;
    this.userAgent = null;

    this.basePath = null;

    // Android only
    this.processName = null;
};

AdjustConfig.EnvironmentSandbox                   = "sandbox";
AdjustConfig.EnvironmentProduction                = "production";

AdjustConfig.LogLevelVerbose                      = "VERBOSE";
AdjustConfig.LogLevelDebug                        = "DEBUG";
AdjustConfig.LogLevelInfo                         = "INFO";
AdjustConfig.LogLevelWarn                         = "WARN";
AdjustConfig.LogLevelError                        = "ERROR";
AdjustConfig.LogLevelAssert                       = "ASSERT";
AdjustConfig.LogLevelSuppress                     = "SUPPRESS";
<<<<<<< HEAD
AdjustConfig.AttributionSubscription              = undefined;
AdjustConfig.EventTrackingSucceededSubscription   = undefined;
AdjustConfig.EventTrackingFailedSubscription      = undefined;
AdjustConfig.SessionTrackingSucceededSubscription = undefined;
AdjustConfig.SessionTrackingFailedSubscription    = undefined;
AdjustConfig.DeferredDeeplinkSubscription         = undefined;
=======

AdjustConfig.AttributionSubscription              = undefined;
AdjustConfig.EventTrackingSucceededSubscription   = undefined;
AdjustConfig.EventTrackingFailedSubscription      = undefined;
AdjustConfig.SessionTrackingSucceededSubscription = undefined;
AdjustConfig.SessionTrackingFailedSubscription    = undefined;
AdjustConfig.DeferredDeeplinkSubscription         = undefined;
>>>>>>> Properly tearing down things by removing all existing listeners

AdjustConfig.prototype.setEventBufferingEnabled = function(isEnabled) {
    this.eventBufferingEnabled = isEnabled;
};

AdjustConfig.prototype.setLogLevel = function(logLevel) {
    this.logLevel = logLevel;
};

AdjustConfig.prototype.setProcessName = function(processName) {
    this.processName = processName;
};

AdjustConfig.prototype.setDefaultTracker = function(defaultTracker) {
    this.defaultTracker = defaultTracker;
};

AdjustConfig.prototype.setUserAgent = function(userAgent) {
    this.userAgent = userAgent;
};

AdjustConfig.prototype.setDelayStart = function(delayStart) {
    this.delayStart = delayStart;
};

AdjustConfig.prototype.setReferrer = function(referrer) {
    this.referrer = referrer;
};

AdjustConfig.prototype.setSendInBackground = function(sendInBackground) {
    this.sendInBackground = sendInBackground;
};

AdjustConfig.prototype.setShouldLaunchDeeplink = function(shouldLaunchDeeplink) {
    this.shouldLaunchDeeplink = shouldLaunchDeeplink;
};

AdjustConfig.prototype.setBasePath = function(basePath) {
    this.basePath = basePath;
};

AdjustConfig.prototype.setSdkPrefix = function(sdkPrefix) {
    this.sdkPrefix = sdkPrefix;
}

AdjustConfig.prototype.setAttributionCallbackListener = function(attributionCallbackListener) {
    if (null == AdjustConfig.AttributionSubscription) {
        module_adjust.setAttributionCallbackListener();
        AdjustConfig.AttributionSubscription = DeviceEventEmitter.addListener('adjust_attribution', attributionCallbackListener);
    }
};

AdjustConfig.prototype.setEventTrackingSucceededCallbackListener = function(eventTrackingSucceededCallbackListener) {
    if (null == AdjustConfig.EventTrackingSucceededSubscription) {
        module_adjust.setEventTrackingSucceededCallbackListener();
        AdjustConfig.EventTrackingSucceededSubscription = DeviceEventEmitter.addListener('adjust_eventTrackingSucceeded', eventTrackingSucceededCallbackListener);
    }
};

AdjustConfig.prototype.setEventTrackingFailedCallbackListener = function(eventTrackingFailedCallbackListener) {
    if (null == AdjustConfig.EventTrackingFailedSubscription) {
        module_adjust.setEventTrackingFailedCallbackListener();
        AdjustConfig.EventTrackingFailedSubscription = DeviceEventEmitter.addListener('adjust_eventTrackingFailed', eventTrackingFailedCallbackListener);
    }
};

AdjustConfig.prototype.setSessionTrackingSucceededCallbackListener = function(sessionTrackingSucceededCallbackListener) {
    if (null == AdjustConfig.SessionTrackingSucceededSubscription) {
        module_adjust.setSessionTrackingSucceededCallbackListener();
        AdjustConfig.SessionTrackingSucceededSubscription = DeviceEventEmitter.addListener('adjust_sessionTrackingSucceeded', sessionTrackingSucceededCallbackListener);
    }
};

AdjustConfig.prototype.setSessionTrackingFailedCallbackListener = function(sessionTrackingFailedCallbackListener) {
    if (null == AdjustConfig.SessionTrackingFailedSubscription) {
        module_adjust.setSessionTrackingFailedCallbackListener();
        AdjustConfig.SessionTrackingFailedSubscription = DeviceEventEmitter.addListener('adjust_sessionTrackingFailed', sessionTrackingFailedCallbackListener);
    }
};

AdjustConfig.prototype.setDeferredDeeplinkCallbackListener = function(deferredDeeplinkCallbackListener) {
    if (null == AdjustConfig.DeferredDeeplinkSubscription) {
        module_adjust.setDeferredDeeplinkCallbackListener();
        AdjustConfig.DeferredDeeplinkSubscription = DeviceEventEmitter.addListener('adjust_deferredDeeplink', deferredDeeplinkCallbackListener);
    }
};

module.exports = { Adjust, AdjustEvent, AdjustConfig }
