import { NotifyService } from './../services/notify.service';
import { Injector } from '@angular/core';
import { MessageService } from './../services/message.service';
export abstract class AppComponentBase {
  /**
   *
   */
  readonly _messageService: MessageService;
  readonly _notifyService: NotifyService;
  constructor(injector: Injector) {
    this._messageService = injector.get(MessageService);
    this._notifyService = injector.get(NotifyService);
  }

  isSuperAdmin(): boolean {
    return true;
  }

  isGranted(permissionName: string): boolean {
    return false;
  }

  isGrantedAny(...permissions: string[]): boolean {
    return true;
  }
}
