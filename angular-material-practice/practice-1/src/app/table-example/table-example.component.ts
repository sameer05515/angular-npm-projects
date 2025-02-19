import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position:1,weight:0,name:'Hydrogen',symbol:' H'},
{position:2,weight:0,name:'Helium',symbol:' He'},
{position:3,weight:0,name:'Lithium',symbol:' Li'},
{position:4,weight:0,name:'Beryllium',symbol:' Be'},
{position:5,weight:0,name:'Boron',symbol:' B'},
{position:6,weight:0,name:'Carbon',symbol:' C'},
{position:7,weight:0,name:'Nitrogen',symbol:' N'},
{position:8,weight:0,name:'Oxygen',symbol:' O'},
{position:9,weight:0,name:'Fluorine',symbol:' F'},
{position:10,weight:0,name:'Neon',symbol:' Ne'},
{position:11,weight:0,name:'Sodium',symbol:' Na'},
{position:12,weight:0,name:'Magnesium',symbol:' Mg'},
{position:13,weight:0,name:'Aluminum',symbol:' Al'},
{position:14,weight:0,name:'Silicon',symbol:' Si'},
{position:15,weight:0,name:'Phosphorus',symbol:' P'},
{position:16,weight:0,name:'Sulfur',symbol:' S'},
{position:17,weight:0,name:'Chlorine',symbol:' Cl'},
{position:18,weight:0,name:'Argon',symbol:' Ar'},
{position:19,weight:0,name:'Potassium',symbol:' K'},
{position:20,weight:0,name:'Calcium',symbol:' Ca'},
{position:21,weight:0,name:'Scandium',symbol:' Sc'},
{position:22,weight:0,name:'Titanium',symbol:' Ti'},
{position:23,weight:0,name:'Vanadium',symbol:' V'},
{position:24,weight:0,name:'Chromium',symbol:' Cr'},
{position:25,weight:0,name:'Manganese',symbol:' Mn'},
{position:26,weight:0,name:'Iron',symbol:' Fe'},
{position:27,weight:0,name:'Cobalt',symbol:' Co'},
{position:28,weight:0,name:'Nickel',symbol:' Ni'},
{position:29,weight:0,name:'Copper',symbol:' Cu'},
{position:30,weight:0,name:'Zinc',symbol:' Zn'},
{position:31,weight:0,name:'Gallium',symbol:' Ga'},
{position:32,weight:0,name:'Germanium',symbol:' Ge'},
{position:33,weight:0,name:'Arsenic',symbol:' As'},
{position:34,weight:0,name:'Selenium',symbol:' Se'},
{position:35,weight:0,name:'Bromine',symbol:' Br'},
{position:36,weight:0,name:'Krypton',symbol:' Kr'},
{position:37,weight:0,name:'Rubidium',symbol:' Rb'},
{position:38,weight:0,name:'Strontium',symbol:' Sr'},
{position:39,weight:0,name:'Yttrium',symbol:' Y'},
{position:40,weight:0,name:'Zirconium',symbol:' Zr'},
{position:41,weight:0,name:'Niobium',symbol:' Nb'},
{position:42,weight:0,name:'Molybdenum',symbol:' Mo'},
{position:43,weight:0,name:'Technetium',symbol:' Tc'},
{position:44,weight:0,name:'Ruthenium',symbol:' Ru'},
{position:45,weight:0,name:'Rhodium',symbol:' Rh'},
{position:46,weight:0,name:'Palladium',symbol:' Pd'},
{position:47,weight:0,name:'Silver',symbol:' Ag'},
{position:48,weight:0,name:'Cadmium',symbol:' Cd'},
{position:49,weight:0,name:'Indium',symbol:' In'},
{position:50,weight:0,name:'Tin',symbol:' Sn'},
{position:51,weight:0,name:'Antimony',symbol:' Sb'},
{position:52,weight:0,name:'Tellurium',symbol:' Te'},
{position:53,weight:0,name:'Iodine',symbol:' I'},
{position:54,weight:0,name:'Xenon',symbol:' Xe'},
{position:55,weight:0,name:'Cesium',symbol:' Cs'},
{position:56,weight:0,name:'Barium',symbol:' Ba'},
{position:57,weight:0,name:'Lanthanum',symbol:' La'},
{position:58,weight:0,name:'Cerium',symbol:' Ce'},
{position:59,weight:0,name:'Praseodymium',symbol:' Pr'},
{position:60,weight:0,name:'Neodymium',symbol:' Nd'},
{position:61,weight:0,name:'Promethium',symbol:' Pm'},
{position:62,weight:0,name:'Samarium',symbol:' Sm'},
{position:63,weight:0,name:'Europium',symbol:' Eu'},
{position:64,weight:0,name:'Gadolinium',symbol:' Gd'},
{position:65,weight:0,name:'Terbium',symbol:' Tb'},
{position:66,weight:0,name:'Dysprosium',symbol:' Dy'},
{position:67,weight:0,name:'Holmium',symbol:' Ho'},
{position:68,weight:0,name:'Erbium',symbol:' Er'},
{position:69,weight:0,name:'Thulium',symbol:' Tm'},
{position:70,weight:0,name:'Ytterbium',symbol:' Yb'},
{position:71,weight:0,name:'Lutetium',symbol:' Lu'},
{position:72,weight:0,name:'Hafnium',symbol:' Hf'},
{position:73,weight:0,name:'Tantalum',symbol:' Ta'},
{position:74,weight:0,name:'Tungsten',symbol:' W'},
{position:75,weight:0,name:'Rhenium',symbol:' Re'},
{position:76,weight:0,name:'Osmium',symbol:' Os'},
{position:77,weight:0,name:'Iridium',symbol:' Ir'},
{position:78,weight:0,name:'Platinum',symbol:' Pt'},
{position:79,weight:0,name:'Gold',symbol:' Au'},
{position:80,weight:0,name:'Mercury',symbol:' Hg'},
{position:81,weight:0,name:'Thallium',symbol:' Tl'},
{position:82,weight:0,name:'Lead',symbol:' Pb'},
{position:83,weight:0,name:'Bismuth',symbol:' Bi'},
{position:84,weight:0,name:'Polonium',symbol:' Po'},
{position:85,weight:0,name:'Astatine',symbol:' At'},
{position:86,weight:0,name:'Radon',symbol:' Rn'},
{position:87,weight:0,name:'Francium',symbol:' Fr'},
{position:88,weight:0,name:'Radium',symbol:' Ra'},
{position:89,weight:0,name:'Actinium',symbol:' Ac'},
{position:90,weight:0,name:'Thorium',symbol:' Th'},
{position:91,weight:0,name:'Protactinium',symbol:' Pa'},
{position:92,weight:0,name:'Uranium',symbol:' U'},
{position:93,weight:0,name:'Neptunium',symbol:' Np'},
{position:94,weight:0,name:'Plutonium',symbol:' Pu'},
{position:95,weight:0,name:'Americium',symbol:' Am'},
{position:96,weight:0,name:'Curium',symbol:' Cm'},
{position:97,weight:0,name:'Berkelium',symbol:' Bk'},
{position:98,weight:0,name:'Californium',symbol:' Cf'},
{position:99,weight:0,name:'Ensteinium',symbol:' Es'},
{position:100,weight:0,name:'Fermium',symbol:' Fm'},
{position:101,weight:0,name:'Mendelevium',symbol:' Md'},
{position:102,weight:0,name:'Nobelium',symbol:' No'},
{position:103,weight:0,name:'Lawrencium',symbol:' Lr'},
{position:104,weight:0,name:'Rutherfordium',symbol:' Rf'},
{position:105,weight:0,name:'Dubnium',symbol:' Db'},
{position:106,weight:0,name:'Seaborgium',symbol:' Sg'},
{position:107,weight:0,name:'Bohrium',symbol:' Bh'},
{position:108,weight:0,name:'Hassium',symbol:' Hs'},
{position:109,weight:0,name:'Meitnerium',symbol:' Mt'},
{position:110,weight:0,name:'Darmstadtium',symbol:' Ds'},
{position:111,weight:0,name:'Roentgenium',symbol:' Rg'},
{position:112,weight:0,name:'Copernicium',symbol:' Cn'},
{position:113,weight:0,name:'Nihonium',symbol:' Nh'},
{position:114,weight:0,name:'Flerovium',symbol:' Fl'},
{position:115,weight:0,name:'Moscovium',symbol:' Mc'},
{position:116,weight:0,name:'Livermorium',symbol:' Lv'},
{position:117,weight:0,name:'Tennessine',symbol:' Ts'},
{position:118,weight:0,name:'Oganesson',symbol:' Og'}
];

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  perPageItems:number[]=[2,5,10,20];

  constructor() { }

  ngOnInit(): void {
  }

}
