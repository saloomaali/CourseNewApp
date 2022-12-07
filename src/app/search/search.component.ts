import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  title = ""

  searchData:any = []
  constructor(private api:ApiService){}
  readValue=()=>{

    let data = {"title" : this.title}
    console.log(data)

    this.api.searchCourse(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length == 0 ) {

          alert("No course available")
          
        } else {

          this.searchData = response
          
          
        }
      }

    )


  }
}
