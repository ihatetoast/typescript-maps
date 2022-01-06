export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
// instructions to other classes for how to be an arg in 'addMarker'

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapDiv: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDiv), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });
    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });
    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
