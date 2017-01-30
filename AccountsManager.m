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
      }
    ];
        
    callback(@[[NSNull null], accountIds]);
    } else {
      if (error) {
        callback(@[@"NO_TWT_ACCNT", [NSNull null]]);
      } else {
        callback(@[@"NO_TWT_ACCSS", [NSNull null]]);
      }
    }
  }];
  
}


+ (ACAccount *)getTwitterAccount:(NSString *)userName {
  
  __block ACAccount *res = nil;
  ACAccountStore *account = [[ACAccountStore alloc] init];
  ACAccountType *accountType = [account accountTypeWithAccountTypeIdentifier: ACAccountTypeIdentifierTwitter];
  
  [account requestAccessToAccountsWithType:accountType options:nil completion:^(BOOL granted, NSError *error) {
    
    if (granted) {
      NSArray *twitterAccounts = [account accountsWithAccountType:accountType];
      
      [twitterAccounts enumerateObjectsUsingBlock:^(id obj,
                                                    NSUInteger idx,
                                                    BOOL *stop) {
        ACAccount *acc=obj;
        if([acc.username isEqual:userName]){
          res = acc;
          *stop = YES;
        }
      }];
      
    }
  }];
  NSLog(@"Account name: %@", res.username);
  return res;
}

@end
