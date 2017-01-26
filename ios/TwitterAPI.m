//
//  TwitterAPI.m
//  Sociall
//
//  Created by Fernando Pires on 26/01/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "TwitterAPI.h"


@implementation TwitterAPI

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(postTweet:(NSString *)msg withUser:(NSString *)userName) {
  
  NSURL *requestURL = [NSURL URLWithString:@"https://api.twitter.com/1.1/statuses/update.json"];
  NSDictionary *message = @{@"status" : msg};

  SLRequest *postRequest = [SLRequest
                            requestForServiceType:SLServiceTypeTwitter
                            requestMethod:SLRequestMethodPOST
                            URL:requestURL parameters:message];

  postRequest.account = [[AccountsManager class] performSelector:@selector(getTwitterAccount:)];
 
  [postRequest
    performRequestWithHandler:^(NSData *responseData,
                             NSHTTPURLResponse *urlResponse, NSError *error)
    {
      NSLog(@"Twitter HTTP response: %i", [urlResponse statusCode]);
    }
  ];
}

@end
