import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sipinvestment',
  templateUrl: './sipinvestment.component.html',
  styleUrls: ['./sipinvestment.component.css']
})
export class SipinvestmentComponent implements OnInit {

  
  TargetAmount:number = 1000000;
  ExpectedInterest:number = 7.5;
  SIPTenure:number = 5;
  TenureType = "year";
  
  SIPValue = "0";
  SIPTenureInMonths = 0;
  ReturnValue = "0";
  TotalValue="0";
  
 

  constructor() {

    this.calculateSIP();

   }

  ngOnInit(): void {
  }

  getCurrencyString(inputnumber:number):string{

    if(isFinite(inputnumber))
    {
      return inputnumber.toLocaleString("en-IN",{
        style:"currency",
        currency:"INR",
        minimumFractionDigits:0,
    });

    }
    else
    {
      return "";
    }
  

  }

  calculateSIP()
  {
    var ExpectedinterestRatePerMonth = this.ExpectedInterest/(12*100);
    var sipTenure = this.SIPTenure;
    if(this.TenureType == "year")
    { 
      sipTenure = this.SIPTenure*12;
    }

    var SIPValuetemp   =  this.TargetAmount/((( Math.pow((1+ExpectedinterestRatePerMonth),sipTenure)-1 )/ ExpectedinterestRatePerMonth )*(1+ExpectedinterestRatePerMonth))
    
    SIPValuetemp = Math.round(SIPValuetemp);
    
    var ReturnValueTemp =  this.TargetAmount - (SIPValuetemp * sipTenure);

    if (ReturnValueTemp < 0) {
      ReturnValueTemp = 0;
    }
   
    var TotalValueTemp = this.TargetAmount; 

    this.TotalValue = this.getCurrencyString(TotalValueTemp);
    this.ReturnValue = this.getCurrencyString(ReturnValueTemp);
    this.SIPValue = this.getCurrencyString(SIPValuetemp);

   

  }



  OnTenureSelectionChanged():void
  {
   
    if(this.TenureType=="month")
    {
      this.SIPTenure = Math.round(this.SIPTenure*12);
    }
    if(this.TenureType=="year")
    {
      this.SIPTenure = Math.round(this.SIPTenure/12);
    }
    this.calculateSIP();
   
  }


  OnKeyPressNumber(event:any)
  {
   
    //console.log(event.target.value);
      
    var keypressed = event.key.charCodeAt(0);

    var previousvalue = event.target.value.toString();

    if(previousvalue.indexOf(".") > -1 && keypressed == 46)
    {
      event.preventDefault();
      return false;
    }



    //console.log(keypressed);
    if(( keypressed !=46 && (  keypressed<48 || keypressed > 57)))
    {
      event.preventDefault();
      return false;
      
    }
    else
    {
     
      return true;
     
    }

  }

  OnKeyPressNumberNoDecimal(event:any)
  {
    var keypressed = event.key.charCodeAt(0);

    //console.log(keypressed);
    if( keypressed<48 || keypressed > 57)
    {
      event.preventDefault();
      return false;
      
    }
    else
    {
      return true;

      
    }
  }

  OnUserClick():void
  {
    this.TargetAmount =  Number(this.TargetAmount);
    this.ExpectedInterest = Number(this.ExpectedInterest);
    this.SIPTenure = Number(this.SIPTenure);

    this.calculateSIP();

  }


}
