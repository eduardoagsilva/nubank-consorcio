import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-simular',
  templateUrl: './simular.page.html',
  styleUrls: ['./simular.page.scss'],
})
export class SimularPage implements OnInit {
  data: any;

  valorMin : any;
  valorMax : any;
  hideMe : boolean;

  buttonColor: string = '#000'; 

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        console.log(params)
        this.data = JSON.parse(params.special);
        console.log(this.data)
      }
    });
  }

  mcqAnswer(e){
    this.hideMe = true;

    this.valorMin = this.data[e.detail.value].min
    this.valorMax = this.data[e.detail.value].max
  }

  openDetails(){
    console.log(this.data)
    /*this.dataService.setData(3, this.user);*/
    this.router.navigateByUrl('/details/' + this.data.id)
  }

  ngOnInit() {
    if(this.route.snapshot.data['special']){
      this.data = this.route.snapshot.data['special'];
      this.valorMin = this.data.credito.min
      this.valorMax = this.data.credito.max

    }
  }

}
