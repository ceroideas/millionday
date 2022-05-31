#import "AppDelegate.h"
#import "MainViewController.h"
#import <OneSignal/OneSignal.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
    // Replace '70ca3981-3ce0-47df-bb3d-70cf8a689048' with your OneSignal App ID.
    [OneSignal initWithLaunchOptions:launchOptions
                              appId:@"0b002b2a-389a-4da8-b37f-1ab653159f38"
   				 handleNotificationAction:nil
                            settings:@{kOSSettingsKeyAutoPrompt: @false}];
   OneSignal.inFocusDisplayType = OSNotificationDisplayTypeNotification;
   
   // Recommend moving the below line to prompt for push after informing the user about
   //   how your app will use them.
   [OneSignal promptForPushNotificationsWithUserResponse:^(BOOL accepted) {
        NSLog(@"User accepted notifications: %d", accepted);
   }];

    self.viewController = [[MainViewController alloc] init];
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

@end