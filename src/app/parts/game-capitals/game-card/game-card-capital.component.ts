import {Component,ElementRef,EventEmitter,OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetcountrysService } from 'src/app/services/getcountrys.service';

import { ServicesEmitService } from 'src/app/services/services-emit.service';

@Component({
    selector :'game-card-capital',
    templateUrl :'./game-card-capital.component.html',
    styleUrls :['./game-card-capital.component.scss']
})

export class GameCardCapitalComponent implements OnInit {
    

    constructor(private renderer2:Renderer2, private data: GetcountrysService){
    }

    ngOnInit():void{
        this.Getdata()
    }

    public DataArray:any = []
    Getdata(){
        this.data.get('https://restcountries.eu/rest/v2/all')
        .subscribe(res=>{
            this.DataArray = res
            let arrayQuestions = [this.DataArray[this.random()],this.DataArray[this.random()],this.DataArray[this.random()],this.DataArray[this.random()]]
            this.GenerateQuestions(arrayQuestions)
        })

    }

    public showQuestions:any = []
    public showResponse :any = {}
    
    GenerateQuestions(questions : any[]){
        this.showQuestions = questions
        console.log(this.showQuestions)
        let res = {
            name :this.showQuestions[Math.round(Math.random()*(3-0)+0)].name,
            capital:this.showQuestions[Math.round(Math.random()*(3-0)+0)].capital
        }           
        this.showResponse = res
        console.log(this.showResponse)
    }


    random(){
        return Math.round(Math.random() * (256 - 1) + 1)
    }

    formQuestions = new FormGroup({
        question : new FormControl('')
    })

    onSubmit(){
        console.log(this.formQuestions.value)
    }
}