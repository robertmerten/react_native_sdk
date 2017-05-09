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

import static com.adjust.examples.CommandListener.debug;

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
    public void initTestSession(String baseUrl, final Callback callback) {
        Log.d(TAG, "initTestSession() with baseUrl[" + baseUrl + "]");

        TestLibrary testLibrary = new TestLibrary(baseUrl, 
                new CommandListener(getReactApplicationContext(), callback));
        testLibrary.initTestSession("rn4.10.0@android4.11.1");
    }
}
