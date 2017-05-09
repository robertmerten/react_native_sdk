package com.adjust.examples;

import android.content.Context;
import android.util.Log;

import com.facebook.react.bridge.*;
import com.facebook.react.modules.core.*;

import com.adjust.testlibrary.ICommandJsonListener;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public class CommandListener implements ICommandJsonListener {
    final Callback mCallback;

    public CommandListener(Context context, final Callback callback) {
        mCallback = callback;
    }

    @Override
    public void executeCommand(String className, String methodName, String jsonParameters) {
        mCallback.invoke(className, methodName, jsonParameters);

        //switch (className) {
            //case "Adjust":
                //adjustCommandExecutor.executeCommand(new Command(className, methodName, parameters));
                //break;
            //default:
                //debug("Could not find %s class to execute", className);
                //break;
        //}
    }

    static void debug(String message, Object... parameters) {
        try {
            Log.d("TestApp", String.format(Locale.US, message, parameters));
        } catch (Exception e) {
            Log.e("TestApp", String.format(Locale.US, "Error formating log message: %s, with params: %s"
                    , message, Arrays.toString(parameters)));
        }
    }
}
