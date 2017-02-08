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
  
  ACAccountStore *accountStore = [[ACAccountStore alloc] init];
  ACAccountType *accountType = [accountStore accountTypeWithAccountTypeIdentifier: ACAccountTypeIdentifierTwitter];
  
  [accountStore requestAccessToAccountsWithType:accountType options:nil completion:^(BOOL granted, NSError *error) {
  
  if (granted == true)
  {
    NSArray *twitterAccounts = [accountStore accountsWithAccountType:accountType];
    NSMutableArray *accountIds = [[NSMutableArray alloc] init];
    
    // >> When user authorizes app access to Twitter accounts but hasn't yet created one on the device
    ACAccount * account = [[accountStore accountsWithAccountType:accountType] lastObject];
    if([account username]==NULL){
      callback(@[@"NO_TWT_ACCNT", [NSNull null]]);
    } else {

      [twitterAccounts enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL *stop) {
        ACAccount *acc=obj;
        [accountIds addObject: acc.username];
        }
       ];
    
      callback(@[[NSNull null], accountIds]);
    }
    
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
//void (^AccountsWrapper)(NSString* user, void (^execBlock)(ACAccount* account)) = ^(NSString* user, void (^execBlock)(ACAccount* account)){
+ (void) AccountsWrapper:(NSString *)user executes:(void (^)(ACAccount* account))block {

  __block ACAccount *accObj = nil;
  ACAccountStore *account = [[ACAccountStore alloc] init];
  ACAccountType *accountType = [account accountTypeWithAccountTypeIdentifier: ACAccountTypeIdentifierTwitter];
  
  [account requestAccessToAccountsWithType:accountType options:nil completion:^(BOOL granted, NSError *error) {
    
    if (granted)
    {
      NSArray *arrayOfAccounts = [account accountsWithAccountType:accountType];
      
      [arrayOfAccounts enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL *stop) {
        
        ACAccount *acc=obj;
        
        if([acc.username isEqual:user]){
          accObj = acc;
          *stop = YES;
        }
        
      }];
      
      NSLog(@"ACCOBJ: %@", accObj);
      
      block(accObj);
    }
  }];

}
*/

@end
