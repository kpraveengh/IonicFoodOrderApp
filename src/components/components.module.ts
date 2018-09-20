
// import { SearchbarComponent } from './searchbar/searchbar';
import { CartComponent } from './cart/cart';
import { ExpandableHeaderComponent } from '../components/expandable-header/expandable-header';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';
import { ShrinkingSegmentHeader } from './shrinking-segment-header/shrinking-segment-header';
@NgModule({
	declarations: [
	// SearchbarComponent,
	CartComponent,
	ExpandableHeaderComponent,
    ShrinkingSegmentHeader
],
	imports: [],
	exports: [
	CartComponent,
    ShrinkingSegmentHeader
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ComponentsModule {}
