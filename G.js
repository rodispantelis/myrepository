	//Copyright Panteleimon Rodis 2015-2019 
var WURL='nopoint.png';var L;var lastprj="EPSG:4326";
var formatp = 'image/png'; var anti='none';


var m = new WE.map('map');
/*
var wms = m.initMap(WebGLEarth.Maps.WMS, [la, ur, 
                                                  '', la, wmsprj, '', '', 
                                                  '', 1, 15]);
*/

var wms = new WE.tileLayerWMS(ur, {
    layers: la
}).addTo(m);



m.setPosition(wmscenterx,wmscentery,wmszoom);

function initmap(){
    
}

m.setBaseMap(wms);
//m.addLayer(wms);
//m.setCenter(new OpenLayers.LonLat(23.630000, 38.202100), 5);
//if(zoomcnt || zoomcnt2){arr();}
//var queryableMapLayers = [L];
initmap();
