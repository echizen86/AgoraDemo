import { NgModule } from '@angular/core';
import { VideoCallComponent } from './video-call.component';
import { AppModule } from '../app.module';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc';
import { CommonModule } from '@angular/common';

const agoraConfig: AgoraConfig = {
  AppID: 'ba07980932a44e88ba089bc9aa20333b',
};

@NgModule({
  declarations: [
    VideoCallComponent
  ],
  imports: [
    CommonModule,
    AngularAgoraRtcModule.forRoot(agoraConfig)
  ],
  exports: [
    VideoCallComponent
  ],
  providers: [],
  bootstrap: []
})
export class VideoCallModule { }
