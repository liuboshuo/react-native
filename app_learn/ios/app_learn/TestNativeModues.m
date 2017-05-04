//
//  TestNativeModues.m
//  app_learn
//
//  Created by ls-mac on 2017/5/1.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestNativeModues.h"

@implementation TestNativeModues


RCT_EXPORT_MODULE(TestNativeModues);


RCT_EXPORT_METHOD(test:(NSString *)text
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject){
 
  
  resolve(@"test");
  
}

@end
