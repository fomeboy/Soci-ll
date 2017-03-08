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
  
  /*
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
  ];*/
  
}

//RCT_EXPORT_METHOD(getHomeTimelineForAccount:(NSString * _Nonnull) totalTweets:(NSString * _Nullable)count sinceId:(NSString * _Nullable)sinceId maxId:(NSString * _Nullable)maxId)

RCT_EXPORT_METHOD(getHomeTimelineForUser:(NSString * _Nonnull)userName totalTweets:(NSString * _Nullable)count sinceId:(NSString * _Nullable)sinceId maxId:(NSString * _Nullable)maxId returns:(RCTResponseSenderBlock)callback) {

  __block ACAccount *twitterAccount;
  ACAccountStore *account = [[ACAccountStore alloc] init];
  ACAccountType *accountType = [account accountTypeWithAccountTypeIdentifier: ACAccountTypeIdentifierTwitter];
  
  [account requestAccessToAccountsWithType:accountType options:nil completion:^(BOOL granted, NSError *error) {
    
    if (granted)
    {
      NSArray *arrayOfAccounts = [account
                                  accountsWithAccountType:accountType];
  
      if ([arrayOfAccounts count] > 1) {
        [arrayOfAccounts enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL *stop) {
          ACAccount *acc=obj;
          if([acc.username isEqual:userName]){
            twitterAccount = [arrayOfAccounts objectAtIndex:idx];
            *stop = YES;
          }
        }];
      } else {
        twitterAccount = [arrayOfAccounts firstObject];
      }
      
      NSURL *requestURL = [NSURL URLWithString:@"https://api.twitter.com/1.1/statuses/home_timeline.json"];
      // NSDictionary *params = @{@"count" : count, @"since_id" : sinceId, @"max_id" : maxId};
      NSMutableDictionary *params = [[NSMutableDictionary alloc] init];
      
      if (count.length != 0) { params[@"count"] = count;}
      if (sinceId.length != 0) { params[@"since_id"] = sinceId;}
      if (maxId.length != 0) { params[@"max_id"] = maxId;}
      
      SLRequest *postRequest = [SLRequest
                                requestForServiceType:SLServiceTypeTwitter
                                requestMethod:SLRequestMethodGET
                                URL:requestURL parameters:params];
        
      postRequest.account = twitterAccount;
        
      [postRequest performRequestWithHandler:^(NSData *responseData, NSHTTPURLResponse *urlResponse, NSError *error) {
        //NSLog(@"Twitter HTTP response: %i", [urlResponse statusCode]);
        NSMutableDictionary *responseDictionary  = [NSJSONSerialization JSONObjectWithData:responseData options:NSJSONReadingMutableContainers error:nil];
          if (error) {
            callback(@[@"TWT_RET_ERROR", [NSNull null]]);
          } else {
            callback(@[[NSNull null], responseDictionary]);
          }
        }
      ];
    } else {
      if (error) {
        callback(@[@"NO_TWT_ACCNT", [NSNull null]]);
      } else {
        callback(@[@"NO_TWT_ACCSS", [NSNull null]]);
      }
    }
  }];
}

/*
RCT_EXPORT_METHOD(getHomeTimelineForUserOLD:(NSString * _Nonnull)userName returns:(RCTResponseSenderBlock)callback) {
  
  void (^execBlock)(ACAccount*  accObj) = ^ (ACAccount*  accObj) {
    
  
  //NSDictionary *params = @{@"count" : count, @"since_id" : sinceId, @"max_id" : maxId};
  NSURL *requestURL = [NSURL URLWithString:@"https://api.twitter.com/1.1/statuses/home_timeline.json"];
  //data encoding CHECK!
        
  SLRequest *postRequest = [SLRequest
                            requestForServiceType:SLServiceTypeTwitter
                            requestMethod:SLRequestMethodGET
                            URL:requestURL parameters:nil];
        
        postRequest.account = accObj;
        NSLog(@"OBJ: %@", accObj.username);
    
        [postRequest performRequestWithHandler:^(NSData *responseData, NSHTTPURLResponse *urlResponse, NSError *error)
         {
         
          NSMutableArray *responseDictionary  = [NSJSONSerialization JSONObjectWithData:responseData options:NSJSONReadingMutableContainers error:nil];
          NSLog(@"Response dictionary: %@", responseDictionary);
           
               //callback(responseDictionary);
               
           
         }];
    
    //return nil;
    
  };
  
  [AccountsManager AccountsWrapper:userName executes:execBlock];
  
}
*/

@end
