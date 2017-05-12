package com.adjust.examples;

import android.content.Context;
import android.util.Log;

import com.facebook.react.bridge.*;
import com.facebook.react.modules.core.*;

import com.adjust.testlibrary.ICommandRawJsonListener;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public class CommandListener implements ICommandRawJsonListener {
    private ReactContext mReactContext;

    public CommandListener(ReactContext reactContext) {
        mReactContext = reactContext;
    }

    @Override
    public void executeCommand(String json) {
        mReactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
            .emit("command", json);
    }
}
