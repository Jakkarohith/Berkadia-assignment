import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsDataService } from './questions-data.service';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private questionsData;
  public j = 0;
  public user_answer = [];
  public i = 0;
  public total_score: number = 0;
  public displayQuestionData;
  public correct_answers=[];
  displayResult: boolean = false;
  subscription: Subscription;
  value = 0;
  constructor(private router: Router, private readonly questionData: QuestionsDataService) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
        if (browserRefresh == true) {
          this.value = +localStorage.getItem("Numberofitems");
          this.value = this.value + 5;
          localStorage.setItem("Numberofitems", this.value.toString());
        }
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  result(userAnswer) {
    this.user_answer[this.i] = userAnswer;
    this.i++;
  }
  getResult() {
    this.user_answer.forEach(element => {
      if (element == this.questionsData[this.j].correct_answer) {
        this.correct_answers[this.j]=this.questionsData[this.j].correct_answer;
        this.total_score++;
        this.j++;
      }
      else {
        this.correct_answers[this.j]=this.questionsData[this.j].correct_answer;
        this.j++;
      }
    });
    console.log(this.correct_answers);
    this.displayResult = true;
  }
  ngOnInit() {
    this.questionData.getQuestionsData("https://api.myjson.com/bins/gij7c")
      .subscribe((res: any) => {
        this.questionsData = res.results;
        console.log(this.questionsData);
      });
  }
}
