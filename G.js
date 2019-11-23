	//Copyright Panteleimon Rodis 2015-2019 
var WURL='nopoint.png';var L;var lastprj="EPSG:4326";
var formatp = 'image/png'; var anti='none';


var m = new WE.map('map');

var wms = m.initMap(WebGLEarth.Maps.WMS, [la, ur, 
                                                  '', la, '', '', '', 
                                                  '', 1, 15]);


//var wms = new WE.tileLayer.wms(ur, {layers: la});//.addTo(map);



m.setPosition(wmscenterx,wmscentery,wmszoom);



m.setBaseMap(wms);

initmap();
