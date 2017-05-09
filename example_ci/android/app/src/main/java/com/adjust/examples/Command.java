package com.adjust.examples;

import java.util.List;
import java.util.Map;

public class Command {
    String className;
    String methodName;
    Map<String, List<String>> parameters;

    public Command(String className, String methodName, Map<String, List<String>> parameters) {
        this.className = className;
        this.methodName = methodName;
        this.parameters = parameters;
    }

    public String getFirstParameterValue(String parameterKey) {
        List<String> parameterValues = this.parameters.get(parameterKey);
        if (parameterValues == null || parameterValues.size() == 0) {
            return null;
        }
        return parameterValues.get(0);
    }

    public boolean containsParameter(String parameterKey) {
        return this.parameters.get(parameterKey) != null;
    }
}
