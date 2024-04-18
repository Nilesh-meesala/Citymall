import { Component } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent {

 
    products:any;
  
    constructor(){
      this.products=[
        {
          id: 101, prodName:'Tata Tea Saffron', description:'50MP Triple AI',
          price: 200, imgsrc:'https://cdn.shopify.com/s/files/1/0530/4552/6694/products/new-TTGSaffronPack250g-frntside_57eb7bb0-7131-4b41-9e29-0daa02002e4b.jpg?height=645&pad_color=fff&v=1681202373&width=645'
          
      
        },
        {
          id: 102, prodName:'Red Label', description:'No cost EMI',
          price: 150, imgsrc:'https://www.carrydor.com/image/cache/catalog/Beverages/red-label-tea-pouch-1-kg-550x550.jpg'
        },
        {
          id: 103, prodName:'Organic Tulsi GreenTea', description:'No cost EMI',
          price: 187, imgsrc:'https://m.media-amazon.com/images/I/61w6AjurghL._SX679_.jpg'
            },
        {
          id: 103, prodName:'Lipton Green Tea', description:'No cost EMI',
          // price: 89, imgsrc:'assets/atta3.jpeg'/
          price: 250, imgsrc:'https://images.ctfassets.net/e8bhhtr91vp3/75ojYKk6zuHDqR1LgmkvFZ/9e8ec26aa9000d0da208828d7480d1a1/794522003587.01a.webp?w=800&q=70'
            },
        {
          id: 103, prodName:'Lotus Hearbal Tea', description:'No cost EMI',
          // price: 150, imgsrc:'assets/atta4.jpeg'
          price: 250, imgsrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTIDdfLSPdnYYuLPTWSnYYh8ljq6VBTE_pkw&usqp=CAU'
            },
        {
          id: 103, prodName:'3Roses Kg Pack', description:'No cost EMI',
          price: 150, imgsrc:'https://cdn.grofers.com/app/images/products/full_screen/pro_34381.jpg?ts=1697784702'
            },
        {
          id: 101, prodName:'Taj Mahal', description:'50MP Triple AI',
          price: 150, imgsrc:'https://5.imimg.com/data5/SELLER/Default/2023/8/338075808/BY/ED/VB/4237930/pulse-packaging-packet.jpg'
      
        },
        {
          id: 102, prodName:'Tetly Green Tea', description:'No cost EMI',
          price: 148, imgsrc:'https://5.imimg.com/data5/SELLER/Default/2023/7/324827179/DE/TK/US/3295966/pulses-packaging-pouch-500x500.jpeg'
        },
        {
          id: 103, prodName:'TATA Premium', description:'No cost EMI',
          price: 150, imgsrc:'https://5.imimg.com/data5/ANDROID/Default/2022/3/EZ/CP/WO/80604041/product-jpeg-500x500.jpg'
            },   
              
                  
              
        
  
      ]
    }
    
  }
