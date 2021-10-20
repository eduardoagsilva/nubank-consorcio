import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  carro = {
    id: 1,
    name: 'Carro',
    parcelas:{
      min:'208,11',
      max:'7.374,25'
    },
    credito:{
      min:'15.396,50',
      max:'522.463,00'

    },
    consorcios: [
      {
        valorTotal: '30.445,80',
        parcelas: 23,
        valorParcelas: '1.889,17',
        taxa: '7,50 %'
      },
      {
        valorTotal: '47.990,00',
        parcelas: 13,
        valorParcelas: '3.691,53',
        taxa: '7,50 %'
      },
      {
        valorTotal: '48.371,80',
        parcelas: 15,
        valorParcelas: '3.224,78',
        taxa: '7,50 %'
      },
      {
        valorTotal: '100.990,00',
        parcelas: 69,
        valorParcelas: '1.463,62',
        taxa: '7,50 %'
      }
    ]
  };

  moto = {
    name: 'Motos',
    id: 2,
    parcelas:{
      min:'231,94',
      max:'747,31'
    },
    credito:{
      min:'14.445,00',
      max:'41.987,00'

    },
    consorcios: [
      {
        valorTotal: '14.445,00',
        parcelas: 71,
        valorParcelas: '203,45',
        taxa: '22,00 %'
      },
      {
        valorTotal: '18.608,00',
        parcelas: 71,
        valorParcelas: '262,08',
        taxa: '22,00 %'
      },
      {
        valorTotal: '25.457,00',
        parcelas: 71,
        valorParcelas: '358,54',
        taxa: '22,00 %'
      },
      {
        valorTotal: '29.990.00',
        parcelas: 74,
        valorParcelas: '405,27',
        taxa: '22,00 %'
      }
    ]

  };

  imovel = {
    id: 3,
    name: 'Imoveis',
    parcelas:{
      min:'367,15',
      max:'28.346,45'
    },
    credito:{
      min:'50.000,00',
      max:'1.376.984,03'

    },
    consorcios: [
      {
        valorTotal: '191.053,16',
        parcelas: 102,
        valorParcelas: '1.873,07',
        taxa: '16,80 %'
      },
      {
        valorTotal: '293.657,44',
        parcelas: 55,
        valorParcelas: '5.339,22',
        taxa: '14,30 %'
      },
      {
        valorTotal: '313.234,58',
        parcelas: 55,
        valorParcelas: '5695.17',
        taxa: '14,30 %'
      },
      {
        valorTotal: '501.820,47',
        parcelas: 66,
        valorParcelas: '7.603,34',
        taxa: '14,30 %'
      }
    ]

  };

  pesados = {
    id: 4,
    name: 'Pesados',
    parcelas:{
      min:'367,15',
      max:'28.346,45'
    },
    credito:{
      min:'50.000,00',
      max:'1.376.984,03'

    },
    consorcios: [
      {
        valorTotal: '580.916,00',
        parcelas: 65,
        valorParcelas: '8.937,16',
        taxa: '15,50 %'
      },
      {
        valorTotal: '499.000,00',
        parcelas: 60,
        valorParcelas: '8.316,66',
        taxa: '15,50 %'
      },
      {
        valorTotal: '630.197,67',
        parcelas: 71,
        valorParcelas: '8.876,02',
        taxa: '15,50 %'
      },
      {
        valorTotal: '550.100,00',
        parcelas: 71,
        valorParcelas: '9.168,33',
        taxa: '16,50 %'
      }
    ]

  };

  constructor(private router: Router, private dataService: DataService) {

  }

  openDetailsCarros() {
    this.dataService.setData(1, this.carro);
    this.router.navigateByUrl('/simular/1')
  }
  openDetailsMotos() {
    this.dataService.setData(2, this.moto);
    this.router.navigateByUrl('/simular/2')
  }
  openDetailsImoveis() {
    this.dataService.setData(3, this.imovel);
    this.router.navigateByUrl('/simular/3')
  }
  openDetailsPesados() {
    this.dataService.setData(4, this.pesados);
    this.router.navigateByUrl('/simular/4')
  }


}
