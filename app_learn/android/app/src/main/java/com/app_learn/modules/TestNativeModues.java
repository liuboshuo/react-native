package com.app_learn.modules;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by ls-mac on 2017/5/5.
 */

public class TestNativeModues extends ReactContextBaseJavaModule{


    public TestNativeModues(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {

        return "TestNativeModues";

    }

    @ReactMethod
    public void test(String text, Promise promise){
        promise.resolve(text);
    }


}
