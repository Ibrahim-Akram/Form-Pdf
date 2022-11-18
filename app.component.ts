import { Component } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  download()
    {
      var element = document.getElementById('form') as HTMLElement;
      html2canvas(element).then((canvas) => {
       var data = canvas.toDataURL('image/png')
       var doc = new jspdf()
       var imght = canvas.height * 130 / canvas.width;
       doc.addImage(data, 0, 0, 130, imght)
       doc.save("Download.pdf")
      })
    }
  }

