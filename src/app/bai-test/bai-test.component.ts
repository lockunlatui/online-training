import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOCK_DANH_MUC } from '../../mocks/commons.mock';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bai-test',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, JsonPipe],
  templateUrl: './bai-test.component.html',
  styleUrl: './bai-test.component.scss',
})
export class BaiTestComponent implements OnInit {
  answerCorrectList: any;
  constructor(private activatedRoute: ActivatedRoute) {}
  courseLink: string = '';
  courses = MOCK_DANH_MUC;
  questionList: any = [];
  currentQuestion: number = 0;
  choosenAnswerList: string[] = [];
  answer = '';
  score: number = 0;
  isSubmit: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.courseLink = params['course'];

      const getCourseCurrent = this.courses.filter(
        (course) => course.path === this.courseLink
      );

      if (getCourseCurrent.length) {
        this.questionList = getCourseCurrent[0].course;

        this.answerCorrectList = [];

        this.questionList.forEach((answer: any) => {
          answer.answers.forEach((asr: any) => {
            if (asr.isCorrect) {
              this.answerCorrectList.push(asr.name);
            }
          });
        });
      } else {
        this.questionList = [];
      }
    });
  }

  chooseAnswer(value: Event) {
    const element = value.target as HTMLSelectElement;

    this.answer = element.value;
  }

  onNext() {
    this.choosenAnswerList[this.currentQuestion] = this.answer;

    this.currentQuestion += 1;
  }

  onPrevious() {
    this.currentQuestion -= 1;
  }

  onSubmit() {
    this.choosenAnswerList[this.currentQuestion] = this.answer;

    for (let i = 0; i < this.answerCorrectList.length; i++) {
      if (this.choosenAnswerList[i] === this.answerCorrectList[i]) {
        this.score = this.score + 1;
      }
    }

    this.isSubmit = true;
  }

  get title() {
    switch (this.courseLink) {
      case 'lap-trinh-android-nang-cao':
        return 'Lập trình android nâng cao';
      default:
        '';
    }

    return '';
  }

  checked(name: string) {
    const currentValue = this.choosenAnswerList[this.currentQuestion];

    if (name === currentValue) {
      return true;
    }
    return false;
  }
}
