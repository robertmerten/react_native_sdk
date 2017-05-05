package com.adjust.examples;

import com.adjust.sdk.AdjustFactory;
import com.adjust.sdk.Constants;
import com.adjust.sdk.UtilNetworking;
import com.adjust.testlibrary.TestLibrary;

import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

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
    public void initTestSession(String baseUrl) {
        Log.d(TAG, "initTestSession() with baseUrl[" + baseUrl + "]");
        AdjustFactory.setBaseUrl(baseUrl);
        AdjustFactory.setConnectionOptions(new ConnectionOptions());

        TestLibrary testLibrary = new TestLibrary(baseUrl, new CommandListener(getReactApplicationContext()));
        testLibrary.initTestSession("rn4.10.0@android4.11.1");
    }

    private static class ConnectionOptions implements UtilNetworking.IConnectionOptions {
        @Override
        public void applyConnectionOptions(HttpsURLConnection connection, String clientSdk) {
            connection.setRequestProperty("Client-SDK", clientSdk);
            connection.setConnectTimeout(Constants.ONE_MINUTE);
            connection.setReadTimeout(Constants.ONE_MINUTE);
            // XXX disable ssl checks for tests, temporary!
            try {
                SSLContext sc = SSLContext.getInstance("TLS");
                sc.init(null, new TrustManager[]{
                        new X509TrustManager() {
                            public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                                //getLogger().verbose("getAcceptedIssuers");

                                return null;
                            }
                            public void checkClientTrusted(
                                    java.security.cert.X509Certificate[] certs, String authType) {
                                //getLogger().verbose("checkClientTrusted %s", certs);
                            }
                            public void checkServerTrusted(
                                    java.security.cert.X509Certificate[] certs, String authType) {
                                //getLogger().verbose("checkServerTrusted %s", certs);
                            }
                        }
                }, new java.security.SecureRandom());
                connection.setSSLSocketFactory(sc.getSocketFactory());

                connection.setHostnameVerifier(new HostnameVerifier() {
                    @Override
                    public boolean verify(String hostname, SSLSession session) {
                        //getLogger().verbose("verify hostname %s", hostname);
                        return true;
                    }
                });
            } catch (Exception e) {
                debug("applyConnectionOptions %s", e.getMessage());
            }

        }
    }
}
