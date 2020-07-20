import { Component, OnInit } from '@angular/core';
import { RedditService } from "../reddit.service";
import { Children } from "../models/children";
import { Master } from "../models/master";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: Master;
  children: Children[];

  constructor(private redditService: RedditService) { }

  ngOnInit(): void {
    this.redditService.getPosts().subscribe((response: Master) => {
      this.children = response.data.children;
      console.log(this.children);
    });
  }

}
