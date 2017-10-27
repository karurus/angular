import { Component, OnInit } from '@angular/core';
import { GetTestService } from '../../services/getTest.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  private testList: testPhoto[];

  constructor(private getTestService: GetTestService) { }

  ngOnInit() {
    this.getTestService.getTestPhotoList().subscribe((response) => {
      this.testList = response;
    })
  }
}
interface testPhoto {
  id: number;
  results: {
    name: string,
    url: string
  };
}