<template>
<div class="container-fluid">


<div class="row">

      <div class="col-lg-3 col-md-6 col-12 mb-4">
        <div class="card card-cascade narrower moon-gradient text-white">
          <div class="card-body card-body-cascade">
            <div class="d-flex flex-row align-items-center">
              <div>

            <h4 class="font-weight-bold card-title"><i class="fa fa-btc fa-3x" aria-hidden="true"></i></h4>
              </div>
            <div>
            <h4 class="font-weight-bold card-title">{{bitcoin.chartName}}</h4>
            <h5 class="pink-text pt-1"><i class="fas fa-utensils"></i> {{bitcoinUsd}}</h5>
            </div>
            </div>
          </div>
          
        </div>
      </div>

            <div class="col-lg-3 col-md-6 col-12 mb-4">
        <div class="card card-cascade narrower lite-green-gradient text-white">
          <div class="card-body card-body-cascade">
            <div class="d-flex flex-row align-items-center">
            <div>
            <h4 class="font-weight-bold card-title">{{bitcoin.chartName}}</h4>
            <h5 class="pink-text pt-1"><i class="fas fa-utensils"></i> {{bitcoinUsd}}</h5>
            </div>
              <div>

            <h4 class="font-weight-bold card-title"><i class="fa fa-btc fa-3x" aria-hidden="true"></i></h4>
              </div>
            </div>
          </div>
        </div>
      </div>

            <div class="col-lg-3 col-md-6 col-12 mb-4">
        <div class="card card-cascade narrower green-gradient text-white">
          <div class="card-body card-body-cascade">
            <h4 class="font-weight-bold card-title">{{bitcoin.chartName}}</h4>
            <h5 class="pink-text pt-1"><i class="fas fa-utensils"></i> {{bitcoinUsd}}</h5>
          </div>
        </div>
      </div>

            <div class="col-lg-3 col-md-6 col-12 mb-4">
        <div class="card card-cascade narrower moon-gradient text-white">
          <div class="card-body card-body-cascade">
            <h4 class="font-weight-bold card-title">{{bitcoin.chartName}}</h4>
            <h5 class="pink-text pt-1"><i class="fas fa-utensils"></i> {{bitcoinUsd}}</h5>
          </div>
        </div>
      </div>


  <div class="col-6 mb-4">
    <div class="card card-cascade wider" style="border: 0">
      <div class="elevation-20 rounded" style="z-index: 2">
        <img class="card-img-top rounded overlay" src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" alt="Card image cap">
      </div>
      <div class="card-body card-body-cascade">
        <h3 class="card-title">Title</h3>
        <p class="card-text">Text</p>
      </div>
    </div>
  </div>

    <div class="col-12">
    <div class="card card-cascade wider" style="border: 0">
      <div class="elevation-20 rounded moon-gradient p-2" style="z-index: 2">
        <div class="hello card-img-top" ref="chartdiv" style="height: 300px"></div>
      </div>
      <div class="card-body card-body-cascade">
        <h3 class="card-title">Title</h3>
        <p class="card-text">Text</p>
      </div>
    </div>
  </div>

  <div class="col-6">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Title</h3>
        <p class="card-text">Text</p>
      </div>
    </div>
  </div>

    <div class="col-lg-4 col-md-6 mb-4 mt-4">
        <div class="card card-cascade narrower moon-gradient text-white">
          <div class="card-body card-body-cascade">
            <h4 class="font-weight-bold card-title">Bitcoin</h4>
            <h5 class="pink-text pt-1"><i class="fas fa-utensils"></i>text</h5>
          </div>
        </div>
      </div>


  <div class="col-lg-4 col-md-6 mb-4 mt-4">
        <!-- Card Narrower -->
        <div class="card card-cascade narrower">

          <!-- Card image -->
         <div class="view view-cascade gradient-card-header moon-gradient text-white">

            <!-- Title -->
            <h2 class="card-header-title mb-3">Marta</h2>
            <!-- Subtitle -->
            <p class="card-header-subtitle mb-0">Deserve for her own card</p>

          </div>

          <!-- Card content -->
          <div class="card-body card-body-cascade">

            <!-- Label -->
            <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
            <!-- Title -->
            <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
            <!-- Text -->
            <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi.</p>
            <!-- Button -->
            <a class="btn btn-unique waves-effect waves-light">Button</a>

          </div>

        </div>
        <!-- Card Narrower -->

      </div>
      <div class="col-5">
        <div class="card moon-gradient h-75">
          hola
        </div>
      </div>
</div>






    <v-timeline :dense="$vuetify.breakpoint.mdAndDown">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
      :large="$vuetify.breakpoint.mdAndUp"
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
        <v-card-text class="white text--primary">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outline
          >
            Button
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import axios from 'axios'


import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_spiritedaway from "@amcharts/amcharts4/themes/spiritedaway";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_spiritedaway);
am4core.useTheme(am4themes_animated);



export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App a ver si esta mka si esta funcionando wbn',
      bitcoin: {},
      bitcoinUsd: {
        rate: null
      },
      items: [
        {
          color: 'red lighten-2',
          icon: '3d_rotation'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon'
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer'
        }
      ]
    }
  },
  mounted() {
    this.getBitcoin()
    this.doChart()
  },
  methods: {
    getBitcoin: function () {

        var instance = axios.create({headers: {common: ''}});
          instance
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => {
              this.bitcoin = response.data,
              this.bitcoinUsd = response.data.bpi.USD.rate.substr(0, 8)
          })
          .catch(error => {
              console.log(error)
          })
  },
  doChart: function () {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

// Export
chart.exporting.menu = new am4core.ExportMenu();

// Data for both series
let data = [ {
  "year": "2009",
  "income": 23.5,
  "expenses": 21.1
}, {
  "year": "2010",
  "income": 26.2,
  "expenses": 30.5
}, {
  "year": "2011",
  "income": 30.1,
  "expenses": 34.9
}, {
  "year": "2012",
  "income": 29.5,
  "expenses": 31.1
}, {
  "year": "2013",
  "income": 30.6,
  "expenses": 28.2,
  "lineDash": "5,5",
}, {
  "year": "2014",
  "income": 34.1,
  "expenses": 32.9,
  "strokeWidth": 1,
  "columnDash": "5,5",
  "fillOpacity": 0.2,
  "additional": "(projection)"
} ];

/* Create axes */
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.minGridDistance = 30;

/* Create value axis */
let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

/* Create series */
let columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.name = "Income";
columnSeries.dataFields.valueY = "income";
columnSeries.dataFields.categoryX = "year";

columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
columnSeries.columns.template.propertyFields.stroke = "stroke";
columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
columnSeries.tooltip.label.textAlign = "middle";

let lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.name = "Expenses";
lineSeries.dataFields.valueY = "expenses";
lineSeries.dataFields.categoryX = "year";

lineSeries.stroke = am4core.color("#fdd400");
lineSeries.strokeWidth = 3;
lineSeries.propertyFields.strokeDasharray = "lineDash";
lineSeries.tooltip.label.textAlign = "middle";

let bullet = lineSeries.bullets.push(new am4charts.Bullet());
bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
let circle = bullet.createChild(am4core.Circle);
circle.radius = 4;
circle.fill = am4core.color("#fff");
circle.strokeWidth = 3;

chart.data = data;

  }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#hello {
  width: 100%;
  height: 500px;
}

</style>
