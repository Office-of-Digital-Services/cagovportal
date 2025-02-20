let displayData = [
  {'lat':34.0395943,'lng':-118.4314774, 
    'drc_name':'UCLA Disaster Recovery Center', 
    'loc_name':'UCLA Research Park West', 
    'id':'drc-ucla',
    'loc_address':'10850 West Pico Blvd., Los Angeles, CA 90064', 
    'tooltip':'UCLA Disaster Recovery Center', 
    'tooltip_dir':'bottom',
    'tooltip_offset': [6, 0]
  }, 
  // {'lat':34.1504734,'lng':-118.0890183,
  //    'drc_name': 'Pasadena Disaster Recovery Center', 
  //    'loc_name':'Pasadena City College – Community Education Center', 
  //    'loc_address':'1570 E. Colorado Blvd., Pasadena, CA 91106', 
  //    'tooltip':'Pasadena Disaster Recovery Center', 
  //    'tooltip_dir':'bottom', 
  //    'tooltip_offset': [72, 6],
  //    'special_note': '<em><strong>Note:</strong> This location will close after Friday, January 31, 2025</em>'  },
  {'lat':34.1825977,'lng':-118.1646802, 
    'drc_name': 'Altadena Disaster Recovery Center', 
    'loc_name':'', 
    'id':'drc-altadena',
    'loc_address':'540 W. Woodbury Rd., Altadena, CA 91001', 
    'tooltip':'Altadena Disaster Recovery Center', 
    'tooltip_dir':'bottom', 
    'tooltip_offset': [-72, 6] 
  }, 
];

const tile_template =
  "https://d1436ootlg562q.cloudfront.net/tiles/calstamen/{z}/{x}/{y}{r}.png";
const max_zoom = 14.9; // was 15
// const poi_near_max_zoom = 14; // was 15
// const poi_far_max_zoom = 8; // 6.5;
const initial_center = [34.1063498,-118.3132151]; // 34.1279264,-118.5711749
const initial_zoom = 10;

const northWest = L.latLng(43, -130),
    southEast = L.latLng(32, -109),
    calif_bounds = L.latLngBounds(northWest, southEast);

// Los Angeles county bounds for reference
// let los_angeles_bounds = L.latLngBounds([33.741, -118.696], [34.337, -118.155]);

export class CaGovLAFiresMap extends window.HTMLElement {
  connectedCallback() {
    // this.mapTitle = 'DRC map'; // unused at the moment
    this.mapCredits = 'Map credits';
    this.allProvidersNear = 'All providers near';
    this.phoneLabel = 'Phone';
    this.moveMapLabel = 'Move the map to update search results below.';
    this.mapAttribution =
    '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet</a>';
    this.tileAttribution =
    'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    this.textAttribution =
    "Map by Leaflet, Map tiles by Stamen Design, CC BY 3.0, Map data by OpenStreetMap contributors";

    this.marker_is_showing = false;
    this.marker_started = true;
    this.marker_item = undefined;
    this.open_marker = undefined;
    this.last_pop_open = new Date().getTime();

    this.selIcon = new L.Icon({
      iconUrl: '/images/marker-icon-sel-2x.png',
      shadowUrl: '/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    this.regIcon = new L.Icon({
      iconUrl: '/images/marker-icon-2x.png',
      shadowUrl: '/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // setup touch event handling
    window.L.Map.mergeOptions({
      touchExtend: true
    });
    window.L.Map.TouchExtend = window.L.Handler.extend({
      initialize: function(map) {
        this._map = map;
        this._container = map._container;
        this._pane = map._panes.overlayPane;
      },

      addHooks: function() {
        window.L.DomEvent.on(this._container, 'touchstart', this._onTouchStart, this);
        window.L.DomEvent.on(this._container, 'touchend', this._onTouchEnd, this);
        window.L.DomEvent.on(this._container, 'touchmove', this._onTouchMove, this);
      },

      removeHooks: function () {
        window.L.DomEvent.off(this._container, 'touchstart', this._onTouchStart);
        window.L.DomEvent.off(this._container, 'touchend', this._onTouchEnd);
        window.L.DomEvent.off(this._container, 'touchmove', this._onTouchMove);
      },
    
      _onTouchEvent: function (e, type) {
        if (!this._map._loaded) { return; }

        let touch = e.touches[0];
        let containerPoint = window.L.point(touch.clientX, touch.clientY);
        let layerPoint = this._map.containerPointToLayerPoint(containerPoint);
        let latlng = this._map.layerPointToLatLng(layerPoint);
        this._map.fire(type, {
          latlng: latlng,
          layerPoint: layerPoint,
          containerPoint: containerPoint,
          originalEvent: e
        });
      },

      _onTouchStart: function (e) {
        this._onTouchEvent(e,'touchstart');
      },
      _onTouchMove: function (e) {
        this._onTouchEvent(e,'touchmove');
      },
      _onTouchEnd: function (e) {
        if (!this._map._loaded) { return; }
        this._map.fire('touchend', {
          originalEvent: e
        });
      },
    });
    window.L.Map.addInitHook('addHandler', 'touchExtend', window.L.Map.TouchExtend);
   

    this.innerHTML = `
      <!-- <h3>${this.mapTitle}</h3> -->
      <!-- <p>${this.moveMapLabel}</p> -->

      <div id="map-popup" class="provider-card popup">
        <div class="provider-card-container">
          <div class="provider-card-close">
            <button class="close-button" aria-label="Close button" type="button">
              <span aria-hidden="true">&nbsp;×&nbsp;</span>
            </button>
          </div>
          <div class="distance-indicator"><!-- 13.5 miles away --></div>
          
          <h3 class="h4">Disaster Recovery Center - Altadena</h3>
          <div class="services">    </div>
          <div class="provider-info">
            <div class="provider-address">
              <span class="provider-icon">
                <img src="/images/location_v2.svg" width="28px" alt="Address">
              </span>
              <span class="provider-address-line"><a target="_blank" href="https://maps.google.com/?q=540 W. Woodbury Rd., Altadena, CA 91001">540 W. Woodbury Rd., Altadena, CA 91001</a></span>
            </div>
            <!-- phone and website would go here -->
          </div>
        </div>
      </div>
      <div id="map" aria-label="Los Angeles area map"></div>
      <div id="map-credits"><a id="map-credits-a" href="#" title="${this.textAttribution}">${this.mapCredits}</a></div>
      <div id="credits-tooltip" style="display:none;">${this.mapAttribution} ${this.tileAttribution} </div>
      `;

    // leaflet creates the L object on window
    this.map = window.L.map("map", {
      maxBounds: calif_bounds,
      center: initial_center,
      zoom: initial_zoom,
      dragging: !L.Browser.mobile,
      tap: !L.Browser.mobile,
      attributionControl: false,
    });
    this.map.on('click',e => {
      let elapsed = new Date().getTime() - this.last_pop_open;
      // console.log("map click", e, elapsed);
      if (elapsed > 100) {
        this.closePopup();
      }
    });

    // find first element in map with class leaflet-control-zoom-in and assign it the id of leaflet-control-zoom-in
    let zoomIn = this.getElementsByClassName('leaflet-control-zoom-in')[0];
    zoomIn.id = 'leaflet-control-zoom-in';

    let zoomOut = this.getElementsByClassName('leaflet-control-zoom-out')[0];
    zoomOut.id = 'leaflet-control-zoom-out';

    window.L.tileLayer(tile_template.replace("{r}", ""), {
      // retina tiles
      minZoom: 0,
      maxZoom: max_zoom,
      maxNativeZoom: max_zoom,
      // attribution: this.tileAttribution,
    }).addTo(this.map);

    // ORIGINALLY data was loaded from a json file, but now it's hardcoded at the top of this file
    // if (this.searchComponent.data) {
    //   this.data = this.searchComponent.data;
    // }
    // if (this.data) {
    //   this.displayPins();
    // }
    this.data = displayData;
    this.displayPins();

    this.map.on("movestart", e => {
      // console.log("moveend", e,this.map.getCenter(), this.map.getZoom());
      if (!this.marker_started) {
        this.closePopup();
      }
      this.marker_started = false;
    });

    this.map.on("moveend", e => {
      console.log("moveend", e);
      this.mapCenter = this.map.getCenter();
      // this.populateCardList();
    });

    this.note_popup = undefined;

    // dynamic map zoom to prevent zooming into areas for with no POIs, where we have no tiles.
    // this.map.on(
    //   "moveend",
    //   () => {
    //   }
    // );


    this.map.on('touchmove',
      e => {
        let nbrTouches = e.originalEvent.touches.length;
        // alert("got touch event " + nbrTouches);
        let singleTouchPromptContent = document.querySelector('#single-touch-prompt-content').innerHTML;
        if (nbrTouches == 1 && this.note_popup == undefined) {
          this.note_popup = L.popup()
            .setLatLng(this.map.getCenter())
            .setContent(singleTouchPromptContent)
            .openOn(this.map);
        } else if (nbrTouches != 1 && this.note_popup) {
          this.note_popup.close();
          this.note_popup = undefined;
        }
        // display map center and zoom
        // console.log("touchmove", e, this.map.getCenter(), this.map.getZoom());
      }
    );

    this.map.on('touchend',
      () => {
          if (this.note_popup != undefined) {
            this.note_popup.close();
            this.note_popup = undefined;
          }
        }
    );

  }

  closePopup() {
    document.querySelector('#map-popup').style.display = 'none';
    this.marker_is_showing = false;
    this.marker_item = undefined;
    if (this.open_marker) {
      this.open_marker.setIcon(this.regIcon);
      this.open_marker = undefined;
    }
  }
  
  get_DRC_Card(item) {
    return `
        <div class="provider-card-container">
          <div class="provider-card-close">
            <button class="close-button" aria-label="Close button" type="button">
              <span aria-hidden="true">&nbsp;×&nbsp;</span>
            </button>
          </div>
          <div class="distance-indicator"><!-- 13.5 miles away --></div>
          
          <h3 class="h4">${item.drc_name}</h3>
          ${item.special_note ? `<div class="special-note">${item.special_note}</div>` : ''}
          ${item.loc_name ? `<h4 class="h5">${item.loc_name}</h4>` : ''}
          <div class="services">  <!-- services go here -->  </div>
          <div class="provider-info">
            <div class="provider-address" id="provider-address-div">
              <span class="provider-icon">
                <img src="/images/location_v2.svg" width="28px" alt="Address">
              </span>
              <span class="provider-address-line"><a target="_blank" href="https://maps.google.com/?q=${item.loc_address}">${item.loc_address}</a></span>
            </div>
            <!-- phone and website would go here -->
          </div>
        </div>`;
  }


  openPopup(item, marker) {
    this.last_pop_open = new Date().getTime();

    this.marker_item = item;

    if (this.open_marker != undefined) {  // close any open marker
      this.open_marker.setIcon(this.regIcon);
    }

    this.open_marker = marker;
    this.open_marker.setIcon(this.selIcon);
    const markup = this.get_DRC_Card(item);
    let map_popup = document.querySelector('#map-popup');
    map_popup.innerHTML = markup;

    document.querySelector(`#provider-address-div`).addEventListener('click', (e) => {
      e.preventDefault();

      const encodedAddress = encodeURIComponent(item.loc_address);

      // Modern platform detection for iOS
      const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || 
                    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      const isAndroid = /Android/.test(navigator.userAgent);
      
      if (isIOS) {
          window.location.href = `maps://maps.apple.com/?q=${encodedAddress}`;
      }
      else if (isAndroid) {
          window.location.href = `geo:0,0?q=${encodedAddress}`;
      }
      // Default to Google Maps in browser
      else {
          window.location.href = `https://maps.google.com/?q=${encodedAddress}`;
      }
    });

    let cbutton = map_popup.querySelector('.close-button');
    if (cbutton) {
      cbutton.addEventListener('click', e => {
        this.closePopup();
      });
    }

    // Add keyboard handler for ESC key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.closePopup();
      }
    });

    document.querySelector('#map-popup').style.display = 'block';
    let map_result_elem = document.querySelector('#map-results');
    if (map_result_elem) {
       map_result_elem.classList.add('with-popup');
    }
    this.marker_is_showing = true;
    // check if lng is > map centers
    const cur_center = this.map.getCenter();
    const cur_bounds = this.map.getBounds();
    if (window.innerWidth > 768 ) {
      if (item.lng > cur_center.lng) {
        // reposition marker half way between center and left edge of map
        const new_center = L.latLng(cur_center.lat,cur_center.lng + (cur_bounds.getEast() - cur_bounds.getWest())/4);
        this.marker_started = true; // used to skip closing marker at end of movement
        this.map.panTo(new_center, {animate: true, duration: 1.0});
      }
    }
  }

  displayPins() {
    // console.log("Making display pins");
    this.allMarkers = [];

    // Used to filter out markers that outside of the State's bounding rectangle
    const cal_bounds = L.latLngBounds([42, -125], [32.5, -114]);

    // the data gets set on this object from provider-search component
    this.data.forEach(item => {
      const latlng = L.latLng(item.lat, item.lng);
      if (cal_bounds.contains(latlng)) {
        let marker = L.marker([item.lat, item.lng],{icon:this.regIcon, keyboard:true,riseOnHover:true,highlight: 'temporary',alt:item.drc_name}).addTo(this.map);
        // marker.bindTooltip(item.tooltip || item.drc_name, {permanent: true, direction: item.tooltip_dir, interactive: true, offset: item.tooltip_offset}).openTooltip();
        marker._icon.id = item.id;
        marker._icon.setAttribute('aria-live', 'polite');
        let clickFunc = e => {
          // console.log("Marker click",e);
          e.originalEvent.stopPropagation();
          e.originalEvent.preventDefault();
          let target = marker;
          if (this.marker_is_showing && this.marker_item === item) {
            this.closePopup();
          } else {
            this.openPopup(item, target);
          }
        };

        marker.on('click', clickFunc);
        marker.on('keydown', e => {
          let oe = e.originalEvent;
          console.log("keydown", oe);
          if (oe.key === 'Enter' || oe.key === 'Return') {
            console.log("Enter or Return");
            clickFunc(e);
          }
        });
        // marker._tooltip.on('click', clickFunc);
        // console.log("marker", marker);
        // marker.tooltip.on('click', clickFunc);
        this.allMarkers.push(marker);
        item.itsMarker = marker;
      }
    });
    this.handleMapCredits();
  }

  handleMapCredits() {
    let map_credit_elem = this.querySelector("#map-credits-a");
    map_credit_elem.addEventListener("click", event => {
      event.preventDefault();
      let credits_tooltip = this.querySelector('#credits-tooltip');
      if (credits_tooltip.style.display === "none") {
        credits_tooltip.style.display = "block";
      } else {
        credits_tooltip.style.display = "none";
      }
    });
  }
}
window.customElements.define(
  "cagov-lafires-map",
  CaGovLAFiresMap
);
