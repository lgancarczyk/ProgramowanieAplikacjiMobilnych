import * as React from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef:any = createNavigationContainerRef()

export function navigate(name:string, params:any) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  }
// export const navigationRef = React.createRef();

// export function navigate(name:string){

// }