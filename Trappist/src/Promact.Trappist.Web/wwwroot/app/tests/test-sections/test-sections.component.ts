import { Component } from '@angular/core';
import { Category } from '../../questions/category.model';
import { TestService } from '../tests.service';

@Component({
    moduleId: module.id,
    selector: 'test-sections',
    templateUrl: 'test-sections.html'
})

export class TestSectionsComponent {
    editName: boolean;
    Categories: Category[] = new Array<Category>();

    constructor(private testService: TestService) {
        this.getAllCategories();
    }

    getAllCategories() {
        this.testService.getAllCategories().subscribe((response) => { this.Categories = (response); });
    }
}
