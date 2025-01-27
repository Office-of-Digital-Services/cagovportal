
// import L from leaflet

// import 'leaflet/dist/leaflet.css';
// import 'leaflet/dist/leaflet.js';
const tile_template =
  "https://d1436ootlg562q.cloudfront.net/tiles/calstamen/{z}/{x}/{y}{r}.png";
// use for debugging
// const tile_template = "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png";
// Will need to use the two attributions for the Map Credits pop-up
const max_zoom = 15;
const poi_near_max_zoom = 15;
const poi_far_max_zoom = 8; // 6.5;
const initial_center = [37.561997, -120.629879];
const initial_zoom = 8;
let northWest = L.latLng(43, -130),
    southEast = L.latLng(32, -109),
    calif_bounds = L.latLngBounds(northWest, southEast);

// add Los Angeles county bounds
let los_angeles_bounds = L.latLngBounds([33.741, -118.696], [34.337, -118.155]);


// https://leafletjs.com/reference-1.8.0.html#map
export class CaGovLAFiresMap extends window.HTMLElement {
  connectedCallback() {
    // console.log("Init map");
    // UNUSED as of yet
    // let translationKeys = ['mapTitle','mapCredits','allProvidersNear','phoneLabel', 'moveMapLabel', 'mapAttribution', 'tileAttribution', 'textAttribution'];
    this.mapTitle = 'Provider map';
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

    // this.searchfilters = {'telehealth':false,'pill':false,'procedure':false};
    this.marker_is_showing = false;
    this.marker_started = true;
    this.marker_item = undefined;
    this.open_marker = undefined;

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

        // alert("GTS");

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
    
    // The map component is written into the page dynamically so custom element isn't in an 11ty HTML file, hence using document. instead of this. to get the translated values here
    // translationKeys.forEach(key => {
    //   if(document.querySelector(`[data-name="${key}"]`)){
    //     this[key] = document.querySelector(`[data-name="${key}"]`).innerHTML;
    //   }
    // })

    // this.searchComponent = document.querySelector(
    //   "cagov-abortion-provider-lookup"
    // );

    this.innerHTML = `<h3>${this.mapTitle}</h3>
      <!-- <p>${this.moveMapLabel}</p> -->
      <div id="map-popup" class="provider-card popup">
        <!-- begin placeholder -->
        <div class="provider-card-container">
        </div>
        <!-- end placeholder -->
      </div>
      <div id="map"></div>
      <div id="map-credits"><a id="map-credits-a" href="#" title="${this.textAttribution}">${this.mapCredits}</a></div>
      <div id="credits-tooltip" style="display:none;">${this.mapAttribution} ${this.tileAttribution}</div>
      `;

    // leaflet creates the L object on window
    this.map = window.L.map("map", {
      maxBounds: los_angeles_bounds,
      center: initial_center,
      zoom: initial_zoom,
      dragging: !L.Browser.mobile,
      tap: !L.Browser.mobile,
      attributionControl: false,
    });
    this.map.on('click',e => {
      console.log("map click", e);
      // this.closePopup();
    });

    window.L.tileLayer(tile_template.replace("{r}", ""), {
      // retina tiles
      minZoom: 0,
      maxZoom: max_zoom,
      maxNativeZoom: max_zoom,
      // attribution: this.tileAttribution,
    }).addTo(this.map);

    // if (this.searchComponent.data) {
    //   this.data = this.searchComponent.data;
    // }
    // if (this.data) {
    //   this.displayPins();
    // }

    // this.listenForData();
    // this.listenForRecenter();

    this.map.on("movestart", e => {
      console.log("moveend", e,this.map.getCenter(), this.map.getZoom());
      if (!this.marker_started) {
        // this.closePopup();
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
    this.map.on(
      "moveend",
      () => {
        // leave in for future debugging
        // console.log(
        //   "center",
        //   this.map.getCenter().toString(),
        //   "zoom",
        //   this.map.getZoom()
        // );
        if (this.data == undefined) {
          // early return if this.data not yet loaded
          return;
        }
        let poi_is_near = false;
        const bbox = this.map.getBounds().pad(0.3); // padding provides some slack...
        for (let i = 0; i < this.data.length; ++i) {
          // using a loop to benefit from early break
          const latlng = L.latLng(this.data[i].lat, this.data[i].lng);
          // if lat,lng is onscreen
          if (bbox.contains(latlng)) {
            poi_is_near = true;
            break;
          }
        }
        const mz = poi_is_near ? poi_near_max_zoom : poi_far_max_zoom;
        this.map.setMaxZoom(mz);
        console.log("map set max zoom", mz);
      }
    );


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
        console.log("touchmove", e, this.map.getCenter(), this.map.getZoom());
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

  displayPins() {
    // console.log("Making display pins");
    this.allMarkers = [];

    // Used to filter out markers that outside of the State's bounding rectangle
    const cal_bounds = L.latLngBounds([42, -125], [32.5, -114]);

    // the data gets set on this object from provider-search component
    this.data.forEach(item => {
      const latlng = L.latLng(item.lat, item.lng);
      if (cal_bounds.contains(latlng)) {
        let marker = L.marker([item.lat, item.lng],{icon:this.regIcon, keyboard:false,riseOnHover:true,highlight: 'temporary'}).addTo(this.map);

        // let cardContent = `<p><a href="${item.formatted_url}">${item.formatted_name}</a><br>
        // ${item.full_address}</p>
        // <p>${this.phoneLabel}: <a href="tel:${item.formatted_phone}">${item.formatted_phone}</a></p>`;

        // marker.bindPopup(cardContent);
        marker.on('click',e => {
          console.log("Marker click",e);
          // if (this.marker_is_showing && this.marker_item === item) {
          //   this.closePopup();
          // } else {
          //   this.openPopup(item, e.target);
          // }
        });
        this.allMarkers.push(marker);
        item.itsMarker = marker;
      }
    });
    // this.populateCardList();
    this.handleMapCredits();
  }

  handleMapCredits() {
    // not yet working...
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
