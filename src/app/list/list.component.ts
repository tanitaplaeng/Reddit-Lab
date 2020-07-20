import { Component, OnInit } from '@angular/core';
import { RedditService } from "../reddit.service";
import { Children } from "../models/children";
import { Main } from "../models/main";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: Main;
  children: Children[];

  constructor(private redditService: RedditService) { }

  ngOnInit(): void {
    this.redditService.getPosts().subscribe((response: Main) => {
      this.children = response.data.children;
      console.log(this.children);
    });
  }

}
