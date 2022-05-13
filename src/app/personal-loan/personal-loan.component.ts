import { EmitterVisitorContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.css']
})
export class PersonalLoanComponent implements OnInit {

  PrincipalAmount:number = 1000000;
  Interest:number = 7.5;
  LoanTenure:number = 5;
  TenureType = "year";
  
  EMIValue = "0";
  LoanTenureInMonths = 0;
  InterestValue = "0";
  TotalValue="0";
  
 
  constructor() {
    this.calculateEMI();
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

  calculateEMI()
  {
    var interestRatePerMonth = this.Interest/(12*100);
    var loanTenure = this.LoanTenure;
    if(this.TenureType == "year")
    { 
      loanTenure = this.LoanTenure*12;
    }
    var oneplusR = Math.pow(1 + interestRatePerMonth, loanTenure);

     var EMIValuetemp = (this.PrincipalAmount * interestRatePerMonth * oneplusR) / (oneplusR - 1);

    EMIValuetemp = Math.round(EMIValuetemp);
    
    var InterestValueTemp = (EMIValuetemp * loanTenure) - this.PrincipalAmount;

    if (InterestValueTemp < 0) {
      InterestValueTemp = 0;
    }
   
    var TotalValueTemp = EMIValuetemp * loanTenure;

    this.TotalValue = this.getCurrencyString(TotalValueTemp);
    this.InterestValue = this.getCurrencyString(InterestValueTemp);
    this.EMIValue = this.getCurrencyString(EMIValuetemp);

   

  }



  OnTenureSelectionChanged():void
  {
   
    if(this.TenureType=="month")
    {
      this.LoanTenure = Math.round(this.LoanTenure*12);
    }
    if(this.TenureType=="year")
    {
      this.LoanTenure = Math.round(this.LoanTenure/12);
    }
    this.calculateEMI();
   
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
    this.PrincipalAmount =  Number(this.PrincipalAmount);
    this.Interest = Number(this.Interest);
    this.LoanTenure = Number(this.LoanTenure);

    this.calculateEMI();

  }


  

}
