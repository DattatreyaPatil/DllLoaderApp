import { Component, OnInit,EventEmitter } from '@angular/core';
import { DynamicDllDetailsModel } from '../models/dllDetails';
import {DllAccessorService} from '../services/dll-accessor.service';
import {MatButton} from '@angular/material/button';
import {MatMenu} from '@angular/material/menu'
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dll-view',
  templateUrl: './dll-view.component.html',
  styleUrls: ['./dll-view.component.css']
})
export class DllViewComponent implements OnInit {

  public dlls: DynamicDllDetailsModel[]  ;
 
   public selectedDll : DynamicDllDetailsModel  ; 
   public defaultNoneOption : DynamicDllDetailsModel ={dllName:'None',dllDeatils:undefined,dllFullPath:undefined};

  constructor(private dllAccessorService:DllAccessorService ) 
  { 
    this.dlls=[];
    this.dlls.push(this.defaultNoneOption);
    this.selectedDll = this.dlls[0];

  }

  ngOnInit(): void 
  {
    this.dllAccessorService.getAllDlls()
    .subscribe((data :any ) => 
      {
        this.dlls=data;
        this.dlls.push(this.defaultNoneOption);     
        this.selectedDll = this.dlls[0];     
      }
    ); 
  }

  
  public onChange(newValue: any) 
  {  
    this.selectedDll = newValue;  
    console.log(this.selectedDll);
  }
  public executeDll() {

    this.dllAccessorService.executeDll(this.selectedDll)
    .subscribe((data:any)=>
    {
    });
}
}


