package com.adjust.examples;

import com.adjust.testlibrary.TestLibrary;

import android.util.Log;

import com.facebook.react.bridge.*;
import com.facebook.react.modules.core.*;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

public class AdjustTest extends ReactContextBaseJavaModule {
    private static final String TAG = "AdjustTest";

    public AdjustTest(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "AdjustTest";
    }

    @ReactMethod
    public void initTestSession(String baseUrl) {
        Log.d(TAG, "initTestSession() with baseUrl[" + baseUrl + "]");

        TestLibrary testLibrary = new TestLibrary(baseUrl, 
                new CommandListener(getReactApplicationContext()));
        testLibrary.initTestSession("rn4.11.1@android4.11.0");
    }
}
