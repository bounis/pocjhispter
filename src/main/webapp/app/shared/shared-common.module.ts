import { NgModule } from '@angular/core';

import { PocjhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PocjhipsterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PocjhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PocjhipsterSharedCommonModule {}
