import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Exemplo utilizando parâmtros
    this.activatedRoute.params.subscribe((res) =>
      console.log(res['id'], res['usarname'], res)
    );
    // Exemplo utilizando queryParms
    this.activatedRoute.queryParams.subscribe((res) =>
      console.log(res['id'], res['username'], res)
    );
  }
}
