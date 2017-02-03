//
//  AccountsManager.h
//  Sociall
//
//  Created by Fernando Pires on 12/12/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#ifndef AccountsManager_h
#define AccountsManager_h

#import <Accounts/Accounts.h>

#import "RCTBridgeModule.h"
#import "RCTConvert.h"



@interface AccountsManager : NSObject <RCTBridgeModule>

//+ (void) AccountsWrapper:(NSString *)user executes:(void (^)(ACAccount* account))block;

@end


#endif /* AccountsManager_h */
