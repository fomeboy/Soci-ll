//
//  AccountsManager.m
//  Sociall
//
//  Created by Fernando Pires on 12/12/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "AccountsManager.h"

@implementation AccountsManager

// The React Native bridge needs to know our module
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getTwitterAccounts:(RCTResponseSenderBlock)callback) {
  
  ACAccountStore *account = [[ACAccountStore alloc] init];
  ACAccountType *accountType = [account accountTypeWithAccountTypeIdentifier: ACAccountTypeIdentifierTwitter];
  
  [account requestAccessToAccountsWithType:accountType options:nil completion:^(BOOL granted, NSError *error) {
  
  if (granted) {
    NSArray *twitterAccounts = [account accountsWithAccountType:accountType];
    NSMutableArray *accountIds = [[NSMutableArray alloc] init];
    
    [twitterAccounts enumerateObjectsUsingBlock:^(id obj,
                                              NSUInteger idx,
                                              BOOL *stop) {
      ACAccount *acc=obj;
      [accountIds addObject: acc.username];
       
      /*
      NSLog(@"description: %@", acc.accountDescription);
      NSLog(@"username: %@", acc.username);
      NSLog(@"type: %@", acc.accountType);
      NSLog(@"credential: %@", acc.credential);
      NSLog(@"identifier: %@", acc.identifier);
      */
      
    }];
    
    callback(@[[NSNull null], accountIds]);
    } else {
      if (error) {
        callback(@[@"Please add Twitter account on device settings", [NSNull null]]);
      } else {
        callback(@[@"Please allow access to the app on settings", [NSNull null]]);
      }
    }
  }];
  
}

@end
