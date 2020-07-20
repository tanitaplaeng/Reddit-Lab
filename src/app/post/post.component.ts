import { Component, OnInit, Input } from '@angular/core';
import { Child } from "../models/child";
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Child;
  count = 0;

  constructor(private redditService: RedditService) { }

  ngOnInit(): void {
    this.post.permalink=`https://www.reddit.com${this.post.permalink}`
  }

}
