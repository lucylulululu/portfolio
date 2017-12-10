import { Component, OnInit, Input} from '@angular/core';
import { flyIn } from '../../../animations/fly-in';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { DataTableModule } from 'primeng/primeng';

@Component({
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class ProductTableComponent implements OnInit {

    public productList:Array<any>;

  	constructor(
        public router: Router,
        public activeRoute: ActivatedRoute,
        public productService: ProductService
    ) {

    }

  	ngOnInit() {
  		this.activeRoute.params.subscribe(
        params =>this.getProductByPage(params["page"])
      );
  	}

    public getProductByPage(page:Number){
      return this.productService.getProductTable().subscribe(
        res=>{
          console.log(res);
          this.productList=res["data"];
        },
        error => {console.log(error)},
        () => {}
      );
    }

    public pageChanged(event:any):void {
      let urlTree:UrlTree=this.router.parseUrl(this.router.url);
      const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
      const s: UrlSegment[] = g.segments;
      this.router.navigateByUrl(s[0]+"/product/page/"+event.page);
    }

    public goToWrite():void{
      this.router.navigateByUrl("/admin/product/write");
    }

    public top(event):void{
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>"+value);
    }

    public unTop(event):void{
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>"+value);
    }

    public delPost(event):void{
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>"+value);
    }

    public onRowSelect(event):void{
      console.log(event.data);
    }

    public editProduct(event):void {
      this.router.navigateByUrl("/admin/product/write/"+event.pid);
    }

    public onRowUnselect(event):void{
      console.log(event.data);
    }
}
