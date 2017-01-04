//
//  TwitterKitAPI.m
//  Sociall
//
//  Created by Fernando Pires on 27/12/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "TwitterKitAPI.h"

@implementation TwitterKitAPI

/* TwitterKit is required to run on the main thread */
- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getTweetById:(NSString *)id :(RCTResponseSenderBlock)callback) {

  TWTRAPIClient *client = [[TWTRAPIClient alloc] init];
  [client loadTweetWithID:id completion:^(TWTRTweet *res, NSError *error) {
    if (res) {
      TWTRTweet *tweet=res;
      callback(@[[NSNull null], tweet.text]);
    } else {
      callback(@[@"Dei merda no twwet", [NSNull null]]);
    }
  }];
}

@end
