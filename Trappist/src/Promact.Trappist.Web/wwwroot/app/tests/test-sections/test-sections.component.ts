import { Component, OnInit } from '@angular/core';
import { Category } from '../../questions/category.model';
import { CategoryService } from '../../questions/categories.service';
import { Test } from '../tests.model';
import { TestCreateDialogComponent } from '../tests-dashboard/test-create-dialog.component';
import { ActivatedRoute,Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { TestSettingService } from '../testsetting.service';

@Component({
    moduleId: module.id,
    selector: 'test-sections',
    templateUrl: 'test-sections.html'
})

export class TestSectionsComponent implements OnInit {
    editName: boolean;
    Categories: Category[] = new Array<Category>();
    test: Test;
    private selectedId: number;

    constructor(private categoryService: CategoryService, private testService: TestSettingService, private route: ActivatedRoute, private router: Router) {
        this.getAllCategories();
        this.test = new Test();
    }
    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.testService.getSettings(id)
            .subscribe((test: Test) => { this.test = test });
    }   
    getAllCategories() {
        this.categoryService.getAllCategories().subscribe((response) => { this.Categories = (response); });
    }
}
