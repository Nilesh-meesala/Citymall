import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any;

  constructor(){
    this.products=[
      {
        id: 101,prodName:'Flip Flops for Men(Tan, 7)', 
        price: 181, 
        imgsrc:'https://cdn-cmimgopt.citymall.live/cmimgopt-ff416304-bdc3-49fd-92a4-afb19ca7e24c.jpeg'
      },
      {
        id: 102,prodName:'Water Bottle Set',  price: 289, 
          imgsrc:'https://www.jiomart.com/images/product/original/rvrvxblwbl/bellerbird-premium-quality-square-shape-water-bottle-set-of-fridge-1000-ml-bottle-pack-of-6-blue-black-pink-plastic-product-images-orvrvxblwbl-p599234855-0-202303111056.jpg?im=Resize=(1000,1000)'
        },
        {
          id: 103,prodName:'BMW Wallet for Men(Brown)',  price: 80, 
          imgsrc:'https://m.media-amazon.com/images/I/41V67WbQO-L._AC_UY1100_.jpg'
        },
      {
        id: 104,prodName:'Metal Shiv Parivar Idol(Gold)', 
        price: 169, 
        imgsrc:'https://m.media-amazon.com/images/I/91gOWpcj3uL.jpg'
      },
      {
        id: 105,prodName:'Designer Analog Wall Clock', 
        price: 159, 
        imgsrc:'https://www.jiomart.com/images/product/original/rvlmjdm67n/shrijay-premium-quality-3d-designer-analog-wall-clock-product-images-orvlmjdm67n-p602775863-0-202306280017.jpg?im=Resize=(420,420)'
      },
      {
        id: 106,prodName:'Fortune Soya Health Refined Oil',  price: 115, 
        imgsrc:'https://villagersmart.com/wp-content/uploads/2023/10/pro_52.jpg'
      },
      
      {
        id: 107,prodName:'Sports Shoes For Men', 
        price: 199, 
        imgsrc:'https://baccabucci.com/cdn/shop/products/MG_6083_1200x.jpg?v=1623843386'
      },
      {
        id: 108, prodName:'Dhani Pure Cumin(Jeera)',  price: 55, 
        imgsrc:'https://5.imimg.com/data5/ECOM/Default/2024/2/384717939/ZE/WF/FI/199246161/1706782321304-unnamed-500x500.jpeg'
      },
      {
        id: 109,prodName:'Wireless Bluetooth',  price: 416, 
        imgsrc:'https://5.imimg.com/data5/FK/MI/RK/SELLER-26309452/wireless-bluetooth-earphone.jpg'
      },
      
      {
        id: 110,prodName:'Sunfeast 5-Grain Digestive ',  price: 119, 
        imgsrc:'https://cdn.zeptonow.com/production///tr:w-250,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/d53ba940-71be-4f6b-9174-bca464137e19.jpeg'
      },
     
      
      {
        id: 111,prodName:'Wooden Mobile & Key Holder',  price: 99, 
        imgsrc:'https://www.jiomart.com/images/product/original/rvk5wmtplb/ravariya-graphics-mdf-wall-mounted-wooden-yoga-design-key-holders-with-mobile-stand-brown-product-images-orvk5wmtplb-p604040944-3-202308231033.jpg?im=Resize=(420,420)'
      },
      
      {
        id: 112,prodName:'Polyster Solid Bomber Jacket',  price: 789, 
        imgsrc:'https://5.imimg.com/data5/SELLER/Default/2023/10/353907753/OK/IG/KA/161857280/men-polyester-full-sleeve-jacket-250x250.jpeg'
      },
      {
        id: 113,prodName:'Mangalsutra for Women',  price: 287, 
        imgsrc:'https://www.soni.fashion/cdn/shop/files/best-quality-exclusive-design-gold-plated-mangalsutra-women-style-a191-soni-fashion-439.jpg?v=1700547181'
      },
      {
        id: 114,prodName:'Money Box for Kids(MutiColor)', 
        price: 419, 
        imgsrc:'https://m.media-amazon.com/images/I/61whJYmXbBL._AC_UF894,1000_QL80_.jpg'
      },
      
      {
        id: 115,prodName:'Aloo Bhujia',  price: 87, 
        imgsrc:'https://www.haldirams.com/media/catalog/product/cache/71134970afb779eb7860339989626b7e/a/l/aloo_bhujia12344.jpg'
      },
    ]
  }
}