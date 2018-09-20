import { NgModule } from '@angular/core';
import { SearchproductsPipe } from './searchproducts/searchproducts';
import { MenulistPipe } from './menulist/menulist';
@NgModule({
	declarations: [SearchproductsPipe,
    MenulistPipe],
	imports: [],
	exports: [SearchproductsPipe,
    MenulistPipe]
})
export class PipesModule {}
