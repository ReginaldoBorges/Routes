import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Exemplo utilizando parâmtros
    this.activatedRoute.params.subscribe((res) =>
      console.log(res['id'], res['usarname'], res)
    );
    // Exemplo utilizando queryParms
    this.activatedRoute.queryParams.subscribe((res) =>
      console.log(res['id'], res['username'], res)
    );

    setInterval(() => {
      // Redirecionamento sem usar o reload da página, como se fosse um clique (mais recomendado)
      this.router.navigate(['404']);

      // Redirecionamento usando o reload da página (analisar a necessidade)
      // this.router.navigateByUrl('404');
    }, 5000);
  }
}
