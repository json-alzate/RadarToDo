import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { ModalController, NavController } from '@ionic/angular';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  map!: GoogleMap;

  constructor(
    private modalController: ModalController,
    private navController: NavController
  ) {
    console.log('constructor');

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngOnInit');

  }

  ionViewDidEnter() {
    // Probably not necessary in the future
    setTimeout(() => {
      this.createMap();
    }, 200);
  }

  async createMap() {
    this.map = await GoogleMap.create({
      forceCreate: true, // Prevent issues with live reload
      id: 'my-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.mapsKey,
      config: {
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ],
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      },
    });
    await this.addMarkers();
  }



  async addMarkers() {
    const markers: Marker[] = [
      {
        coordinate: {
          lat: 33.7,
          lng: -117.8,
        },
        title: 'localhost',
        snippet: 'Best place on earth',
      },
      {
        coordinate: {
          lat: 33.7,
          lng: -117.2,
        },
        title: 'random place',
        snippet: 'Not sure',
      },
    ];
    await this.map.addMarkers(markers);

    this.map.setOnMarkerClickListener(async (marker) => {
      console.log('Marker clicked', marker);

    });
  }

  async locateMe() {
    const coordinates = await Geolocation.getCurrentPosition();

    if (coordinates) {
      this.map.setCamera({
        coordinate: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        },
        zoom: 12,
      });
    }
  }

  // new todo
  newTodo() {
    this.navController.navigateForward('/todo');
  }

}
