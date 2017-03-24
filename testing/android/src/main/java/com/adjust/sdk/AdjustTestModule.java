//
//  AdjustAnalyzerModule.java
//  Adjust
//
//  Created by Abdullah Obaied on 2016-10-19.
//  Copyright (c) 2016 adjust GmbH. All rights reserved.
//  See the file MIT-LICENSE for copying permission.
//

package com.adjust.nativetestlibrary;

import java.util.Map;
import java.util.HashMap;
import java.util.Map.Entry;

import android.net.Uri;
import javax.annotation.Nullable;

import com.facebook.react.bridge.*;
import com.facebook.react.modules.core.*;

import com.adjust.testlibrary.*;

public class AdjustTestModule extends ReactContextBaseJavaModule {
    public AdjustTestModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "AdjustTestLibrary";
    }

    @ReactMethod
    public void initTestSession(String baseUrl, String clientSdk, final Callback callback) {
        new TestLibrary(baseUrl, 
                new ICommandRawJsonListener() {
                    @Override
                    public void executeCommand(String jsonString) {
                        callback.invoke(jsonString);
                    }
                }).initTestSession("rn4.10.0@android4.11.1");
    }

    //@ReactMethod
    //public void reportState(String callsite) {
    //AdjustAnalyzer.reportState(callsite);
    //}

    //@ReactMethod
    //public void terminate() {
    //AdjustAnalyzer.terminate();
    //}

    //@ReactMethod
    //public void executeCommands(final Callback callback) {
    //AdjustAnalyzer.executeCommands(new AdjustAnalyzer.AnalyzerCallback() {
    //@Override
    //public void onPostGetCommands(String commands) {
    //callback.invoke(commands);
    //}
    //});
    //}
}
