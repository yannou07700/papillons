var wms_layers = [];

var lyr_lycee_2019_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2019_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2019_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [542875.842008, 5450861.359828, 544019.089337, 5451746.606813]
                            })
                        });
var format_unnamedpearltracks_1 = new ol.format.GeoJSON();
var features_unnamedpearltracks_1 = format_unnamedpearltracks_1.readFeatures(json_unnamedpearltracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_unnamedpearltracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_unnamedpearltracks_1.addFeatures(features_unnamedpearltracks_1);
var lyr_unnamedpearltracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_unnamedpearltracks_1, 
                style: style_unnamedpearltracks_1,
                interactive: true,
                title: '<img src="styles/legend/unnamedpearltracks_1.png" /> unnamed pearl — tracks'
            });
var format_unnamedpearlroutes_2 = new ol.format.GeoJSON();
var features_unnamedpearlroutes_2 = format_unnamedpearlroutes_2.readFeatures(json_unnamedpearlroutes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_unnamedpearlroutes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_unnamedpearlroutes_2.addFeatures(features_unnamedpearlroutes_2);
var lyr_unnamedpearlroutes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_unnamedpearlroutes_2, 
                style: style_unnamedpearlroutes_2,
                interactive: true,
                title: '<img src="styles/legend/unnamedpearlroutes_2.png" /> unnamed pearl — routes'
            });
var format_unnamedpearlroute_points_3 = new ol.format.GeoJSON();
var features_unnamedpearlroute_points_3 = format_unnamedpearlroute_points_3.readFeatures(json_unnamedpearlroute_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_unnamedpearlroute_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_unnamedpearlroute_points_3.addFeatures(features_unnamedpearlroute_points_3);
var lyr_unnamedpearlroute_points_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_unnamedpearlroute_points_3, 
                style: style_unnamedpearlroute_points_3,
                interactive: true,
                title: '<img src="styles/legend/unnamedpearlroute_points_3.png" /> unnamed pearl — route_points'
            });
var format_observationpapillon_4 = new ol.format.GeoJSON();
var features_observationpapillon_4 = format_observationpapillon_4.readFeatures(json_observationpapillon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_observationpapillon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_observationpapillon_4.addFeatures(features_observationpapillon_4);
var lyr_observationpapillon_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_observationpapillon_4, 
                style: style_observationpapillon_4,
                interactive: true,
                title: '<img src="styles/legend/observationpapillon_4.png" /> observation papillon'
            });

lyr_lycee_2019_georef_0.setVisible(true);lyr_unnamedpearltracks_1.setVisible(true);lyr_unnamedpearlroutes_2.setVisible(true);lyr_unnamedpearlroute_points_3.setVisible(true);lyr_observationpapillon_4.setVisible(true);
var layersList = [lyr_lycee_2019_georef_0,lyr_unnamedpearltracks_1,lyr_unnamedpearlroutes_2,lyr_unnamedpearlroute_points_3,lyr_observationpapillon_4];
lyr_unnamedpearltracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', 'locus_activity': 'locus_activity', });
lyr_unnamedpearlroutes_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_unnamedpearlroute_points_3.set('fieldAliases', {'route_fid': 'route_fid', 'route_point_id': 'route_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_observationpapillon_4.set('fieldAliases', {'id': 'id', 'pléride': 'pléride', });
lyr_unnamedpearltracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'line': 'TextEdit', 'locus_activity': 'TextEdit', });
lyr_unnamedpearlroutes_2.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_unnamedpearlroute_points_3.set('fieldImages', {'route_fid': '', 'route_point_id': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_observationpapillon_4.set('fieldImages', {'id': 'TextEdit', 'pléride': 'TextEdit', });
lyr_unnamedpearltracks_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'line': 'no label', 'locus_activity': 'no label', });
lyr_unnamedpearlroutes_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_unnamedpearlroute_points_3.set('fieldLabels', {'route_fid': 'no label', 'route_point_id': 'no label', 'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_observationpapillon_4.set('fieldLabels', {'id': 'no label', 'pléride': 'no label', });
lyr_observationpapillon_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});