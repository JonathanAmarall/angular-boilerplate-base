import { Injector } from '@angular/core';
import { MessageService } from './../services/message.service';
export abstract class AppComponentBase {
  /**
   *
   */
  readonly _messageService: MessageService;
  constructor(injector: Injector) {
    this._messageService = injector.get(MessageService);
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
