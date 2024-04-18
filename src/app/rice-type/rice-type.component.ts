import { Component } from '@angular/core';

@Component({
  selector: 'app-rice-type',
  templateUrl: './rice-type.component.html',
  styleUrl: './rice-type.component.css'
})
export class RiceTypeComponent {

  products:any;
  
    constructor(){
      this.products=[
      
      
        {
          id: 101, prodName:'Rice Villa EVERYDAY', description:'50MP Triple AI',
          price: 200, imgsrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbgcJOAFqU1Z-oHMHFEQNbabykIwivpfRTNb3u2PavRxG3oeuQTuvl9j6JKrSLTAr8ag&usqp=CAU'
          
      
        },
        {
          id: 102, prodName:'Rice Villa SUPER', description:'No cost EMI',
          price: 150, imgsrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3z5uzvxbYhUvCUt1NI58utFyvuvpTvAqC_OulYU_vBX_f32luiYKAYRTeJ27-bDwttfs&usqp=CAU'
        },
        {
          id: 103, prodName:'Rice villa Grand', description:'No cost EMI',
          price: 187, imgsrc:'https://www.jiomart.com/images/product/original/rv0kjwmdy2/rice-villa-grand-26-kg-1121-sella-basmati-rice-product-images-orv0kjwmdy2-p596969948-0-202301260432.png?im=Resize=(420,420)'
            },
        
          ]
        }

}
