import { Component } from '@angular/core';
import { Category } from '../../questions/category.model';
import { CategoryService } from '../../questions/categories.service';
import { Test } from '../tests.model';
import { TestCreateDialogComponent } from '../tests-dashboard/test-create-dialog.component';
@Component({
    moduleId: module.id,
    selector: 'test-sections',
    templateUrl: 'test-sections.html'
})

export class TestSectionsComponent {
    editName: boolean;
    Categories: Category[] = new Array<Category>();

    constructor(private categoryService: CategoryService) {
        this.getAllCategories();
    }

    getAllCategories() {
        this.categoryService.getAllCategories().subscribe((response) => { this.Categories = (response); });
    }
}
